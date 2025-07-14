use jmap_proto::{
    method::query::{QueryRequest, QueryResponse, Filter, RequestArguments},
    request::{Request, RequestMethod, Call, method::{MethodName, MethodObject, MethodFunction}},
    types::{id::Id, state::State},
    object::email::QueryArguments,
};
use serde::{Serialize, Deserialize};
use serde_json;
use std::collections::HashMap;

// ============================================================================
// STRUCTS SERIALIZABLES PARA FFI CON DENO
// ============================================================================

/// Request JMAP serializable para comunicación con Deno
#[derive(Debug, Serialize, Deserialize)]
pub struct JMAPRequest {
    #[serde(rename = "using")]
    pub using: Vec<String>,
    
    #[serde(rename = "methodCalls")]
    pub method_calls: Vec<JMAPMethodCall>,
    
    #[serde(rename = "createdIds")]
    #[serde(skip_serializing_if = "Option::is_none")]
    pub created_ids: Option<HashMap<String, String>>,
}

/// Method call dentro de un request JMAP
#[derive(Debug, Serialize, Deserialize)]
pub struct JMAPMethodCall {
    pub id: String,
    pub method: String,
    pub arguments: JMAPArguments,
}

/// Argumentos para diferentes métodos JMAP
#[derive(Debug, Serialize, Deserialize)]
#[serde(untagged)]
pub enum JMAPArguments {
    EmailQuery(EmailQueryArguments),
    EmailGet(EmailGetArguments),
    EmailSet(EmailSetArguments),
    CoreEcho(CoreEchoArguments),
}

/// Argumentos para Email/query
#[derive(Debug, Serialize, Deserialize)]
pub struct EmailQueryArguments {
    #[serde(rename = "accountId")]
    pub account_id: String,
    
    #[serde(skip_serializing_if = "Option::is_none")]
    pub filter: Option<JMAPFilter>,
    
    #[serde(skip_serializing_if = "Option::is_none")]
    pub sort: Option<Vec<JMAPSort>>,
    
    #[serde(skip_serializing_if = "Option::is_none")]
    pub position: Option<i32>,
    
    #[serde(skip_serializing_if = "Option::is_none")]
    pub anchor: Option<String>,
    
    #[serde(rename = "anchorOffset")]
    #[serde(skip_serializing_if = "Option::is_none")]
    pub anchor_offset: Option<i32>,
    
    #[serde(skip_serializing_if = "Option::is_none")]
    pub limit: Option<usize>,
    
    #[serde(rename = "calculateTotal")]
    #[serde(skip_serializing_if = "Option::is_none")]
    pub calculate_total: Option<bool>,
}

/// Argumentos para Email/get
#[derive(Debug, Serialize, Deserialize)]
pub struct EmailGetArguments {
    #[serde(rename = "accountId")]
    pub account_id: String,
    
    #[serde(skip_serializing_if = "Option::is_none")]
    pub ids: Option<Vec<String>>,
    
    #[serde(skip_serializing_if = "Option::is_none")]
    pub properties: Option<Vec<String>>,
}

/// Argumentos para Email/set
#[derive(Debug, Serialize, Deserialize)]
pub struct EmailSetArguments {
    #[serde(rename = "accountId")]
    pub account_id: String,
    
    #[serde(rename = "ifInState")]
    #[serde(skip_serializing_if = "Option::is_none")]
    pub if_in_state: Option<String>,
    
    #[serde(skip_serializing_if = "Option::is_none")]
    pub create: Option<HashMap<String, JMAPEmailObject>>,
    
    #[serde(skip_serializing_if = "Option::is_none")]
    pub update: Option<HashMap<String, JMAPEmailUpdate>>,
    
    #[serde(skip_serializing_if = "Option::is_none")]
    pub destroy: Option<Vec<String>>,
}

/// Argumentos para Core/echo
#[derive(Debug, Serialize, Deserialize)]
pub struct CoreEchoArguments {
    pub message: String,
}

/// Filtros JMAP serializables
#[derive(Debug, Serialize, Deserialize)]
#[serde(untagged)]
pub enum JMAPFilter {
    Subject { subject: String },
    From { from: String },
    To { to: String },
    Body { body: String },
    HasKeyword { hasKeyword: String },
    HasAttachment { hasAttachment: bool },
    MinSize { minSize: u32 },
    MaxSize { maxSize: u32 },
    InMailbox { inMailbox: String },
    And { operator: String, conditions: Vec<JMAPFilter> },
    Or { operator: String, conditions: Vec<JMAPFilter> },
    Not { operator: String, condition: Box<JMAPFilter> },
}

/// Ordenamiento JMAP serializable
#[derive(Debug, Serialize, Deserialize)]
pub struct JMAPSort {
    pub property: String,
    pub isAscending: Option<bool>,
    pub collation: Option<String>,
}

/// Objeto Email JMAP serializable
#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct JMAPEmailObject {
    #[serde(skip_serializing_if = "Option::is_none")]
    pub subject: Option<String>,
    
    #[serde(skip_serializing_if = "Option::is_none")]
    pub from: Option<Vec<JMAPEmailAddress>>,
    
    #[serde(skip_serializing_if = "Option::is_none")]
    pub to: Option<Vec<JMAPEmailAddress>>,
    
    #[serde(skip_serializing_if = "Option::is_none")]
    pub cc: Option<Vec<JMAPEmailAddress>>,
    
    #[serde(skip_serializing_if = "Option::is_none")]
    pub bcc: Option<Vec<JMAPEmailAddress>>,
    
    #[serde(skip_serializing_if = "Option::is_none")]
    pub body: Option<Vec<JMAPEmailBodyPart>>,
    
    #[serde(skip_serializing_if = "Option::is_none")]
    pub keywords: Option<HashMap<String, bool>>,
    
    #[serde(rename = "mailboxIds")]
    #[serde(skip_serializing_if = "Option::is_none")]
    pub mailbox_ids: Option<HashMap<String, bool>>,
}

/// Actualización de Email JMAP serializable
#[derive(Debug, Serialize, Deserialize)]
pub struct JMAPEmailUpdate {
    #[serde(skip_serializing_if = "Option::is_none")]
    pub keywords: Option<HashMap<String, bool>>,
    
    #[serde(rename = "mailboxIds")]
    #[serde(skip_serializing_if = "Option::is_none")]
    pub mailbox_ids: Option<HashMap<String, bool>>,
}

/// Dirección de email JMAP serializable
#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct JMAPEmailAddress {
    pub name: Option<String>,
    pub email: String,
}

/// Parte del cuerpo de email JMAP serializable
#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct JMAPEmailBodyPart {
    #[serde(rename = "partId")]
    #[serde(skip_serializing_if = "Option::is_none")]
    pub part_id: Option<String>,
    
    #[serde(rename = "type")]
    pub content_type: String,
    
    pub charset: Option<String>,
    
    pub name: Option<String>,
    
    pub size: Option<usize>,
    
    pub value: Option<String>,
    
    #[serde(rename = "blobId")]
    #[serde(skip_serializing_if = "Option::is_none")]
    pub blob_id: Option<String>,
}

// ============================================================================
// RESPONSE STRUCTS
// ============================================================================

/// Response JMAP serializable
#[derive(Debug, Serialize)]
pub struct JMAPResponse {
    #[serde(rename = "methodResponses")]
    pub method_responses: Vec<JMAPMethodResponse>,
    
    #[serde(rename = "sessionState")]
    pub session_state: String,
    
    #[serde(rename = "createdIds")]
    #[serde(skip_serializing_if = "HashMap::is_empty")]
    pub created_ids: HashMap<String, String>,
}

/// Method response dentro de un response JMAP
#[derive(Debug, Serialize)]
pub struct JMAPMethodResponse {
    pub id: String,
    pub method: String,
    pub arguments: JMAPResponseArguments,
}

/// Argumentos de respuesta JMAP
#[derive(Debug, Serialize)]
#[serde(untagged)]
pub enum JMAPResponseArguments {
    EmailQuery(QueryResponse),
    EmailGet(EmailGetResponse),
    EmailSet(EmailSetResponse),
    CoreEcho(CoreEchoResponse),
    Error(JMAPError),
}

/// Response para Email/get
#[derive(Debug, Serialize)]
pub struct EmailGetResponse {
    #[serde(rename = "accountId")]
    pub account_id: String,
    
    pub state: String,
    
    pub list: Vec<JMAPEmailObject>,
    
    #[serde(rename = "notFound")]
    pub not_found: Vec<String>,
}

/// Response para Email/set
#[derive(Debug, Serialize)]
pub struct EmailSetResponse {
    #[serde(rename = "accountId")]
    pub account_id: String,
    
    #[serde(rename = "oldState")]
    pub old_state: Option<String>,
    
    #[serde(rename = "newState")]
    pub new_state: String,
    
    pub created: HashMap<String, JMAPEmailObject>,
    
    pub updated: HashMap<String, Option<JMAPEmailObject>>,
    
    pub destroyed: Vec<String>,
    
    #[serde(rename = "notCreated")]
    pub not_created: HashMap<String, JMAPError>,
    
    #[serde(rename = "notUpdated")]
    pub not_updated: HashMap<String, JMAPError>,
    
    #[serde(rename = "notDestroyed")]
    pub not_destroyed: HashMap<String, JMAPError>,
}

/// Response para Core/echo
#[derive(Debug, Serialize)]
pub struct CoreEchoResponse {
    pub message: String,
}

/// Error JMAP serializable
#[derive(Debug, Serialize)]
pub struct JMAPError {
    #[serde(rename = "type")]
    pub error_type: String,
    
    pub description: Option<String>,
}

// ============================================================================
// RUNTIME JMAP PARA FFI
// ============================================================================

/// Runtime JMAP que procesa requests y devuelve responses
pub struct JMAPRuntime {
    session_state: String,
    email_store: Vec<JMAPEmailObject>,
}

impl JMAPRuntime {
    /// Crear un nuevo runtime JMAP
    pub fn new() -> Self {
        Self {
            session_state: "initial_state".to_string(),
            email_store: vec![
                JMAPEmailObject {
                    subject: Some("Welcome to JMAP".to_string()),
                    from: Some(vec![JMAPEmailAddress {
                        name: Some("System".to_string()),
                        email: "system@example.com".to_string(),
                    }]),
                    to: Some(vec![JMAPEmailAddress {
                        name: Some("User".to_string()),
                        email: "user@example.com".to_string(),
                    }]),
                    cc: None,
                    bcc: None,
                    body: Some(vec![JMAPEmailBodyPart {
                        part_id: None,
                        content_type: "text/plain".to_string(),
                        charset: Some("UTF-8".to_string()),
                        name: None,
                        size: Some(25),
                        value: Some("Welcome to JMAP!".to_string()),
                        blob_id: None,
                    }]),
                    keywords: Some(HashMap::from([
                        ("$seen".to_string(), true),
                        ("$important".to_string(), false),
                    ])),
                    mailbox_ids: Some(HashMap::from([
                        ("1".to_string(), true), // Inbox
                    ])),
                },
                JMAPEmailObject {
                    subject: Some("Test Email".to_string()),
                    from: Some(vec![JMAPEmailAddress {
                        name: Some("Test Sender".to_string()),
                        email: "test@example.com".to_string(),
                    }]),
                    to: Some(vec![JMAPEmailAddress {
                        name: Some("User".to_string()),
                        email: "user@example.com".to_string(),
                    }]),
                    cc: None,
                    bcc: None,
                    body: Some(vec![JMAPEmailBodyPart {
                        part_id: None,
                        content_type: "text/plain".to_string(),
                        charset: Some("UTF-8".to_string()),
                        name: None,
                        size: Some(10),
                        value: Some("Test body".to_string()),
                        blob_id: None,
                    }]),
                    keywords: Some(HashMap::from([
                        ("$seen".to_string(), false),
                        ("$important".to_string(), true),
                    ])),
                    mailbox_ids: Some(HashMap::from([
                        ("1".to_string(), true), // Inbox
                    ])),
                },
            ],
        }
    }

    /// Procesar un request JMAP y devolver la respuesta
    pub fn process_request(&mut self, request: &JMAPRequest) -> Result<JMAPResponse, String> {
        let mut method_responses = Vec::new();

        for method_call in &request.method_calls {
            let response = match method_call.method.as_str() {
                "Email/query" => self.handle_email_query(&method_call)?,
                "Email/get" => self.handle_email_get(&method_call)?,
                "Email/set" => self.handle_email_set(&method_call)?,
                "Core/echo" => self.handle_core_echo(&method_call)?,
                _ => JMAPMethodResponse {
                    id: method_call.id.clone(),
                    method: method_call.method.clone(),
                    arguments: JMAPResponseArguments::Error(JMAPError {
                        error_type: "unknownMethod".to_string(),
                        description: Some(format!("Unknown method: {}", method_call.method)),
                    }),
                },
            };
            method_responses.push(response);
        }

        Ok(JMAPResponse {
            method_responses,
            session_state: self.session_state.clone(),
            created_ids: HashMap::new(),
        })
    }

    /// Manejar Email/query
    fn handle_email_query(&self, method_call: &JMAPMethodCall) -> Result<JMAPMethodResponse, String> {
        if let JMAPArguments::EmailQuery(args) = &method_call.arguments {
            let mut matching_emails = self.email_store.clone();

            // Aplicar filtros
            if let Some(filter) = &args.filter {
                matching_emails = self.apply_filter(&matching_emails, filter);
            }

            // Aplicar límite
            if let Some(limit) = args.limit {
                matching_emails.truncate(limit);
            }

            // Crear IDs para los emails encontrados
            let ids: Vec<Id> = (0..matching_emails.len())
                .map(|i| Id::new((i + 1) as u64))
                .collect();

            let query_response = QueryResponse {
                account_id: Id::new(args.account_id.parse().unwrap_or(1)),
                query_state: State::new_initial(),
                can_calculate_changes: true,
                position: args.position.unwrap_or(0),
                ids,
                total: if args.calculate_total.unwrap_or(false) {
                    Some(matching_emails.len())
                } else {
                    None
                },
                limit: args.limit,
            };

            Ok(JMAPMethodResponse {
                id: method_call.id.clone(),
                method: "Email/query".to_string(),
                arguments: JMAPResponseArguments::EmailQuery(query_response),
            })
        } else {
            Err("Invalid arguments for Email/query".to_string())
        }
    }

    /// Manejar Email/get
    fn handle_email_get(&self, method_call: &JMAPMethodCall) -> Result<JMAPMethodResponse, String> {
        if let JMAPArguments::EmailGet(args) = &method_call.arguments {
            let mut emails = Vec::new();
            let mut not_found = Vec::new();

            if let Some(requested_ids) = &args.ids {
                for id_str in requested_ids {
                    if let Ok(id) = id_str.parse::<usize>() {
                        if id > 0 && id <= self.email_store.len() {
                            emails.push(self.email_store[id - 1].clone());
                        } else {
                            not_found.push(id_str.clone());
                        }
                    } else {
                        not_found.push(id_str.clone());
                    }
                }
            } else {
                // Si no se especifican IDs, devolver todos
                emails = self.email_store.clone();
            }

            let get_response = EmailGetResponse {
                account_id: args.account_id.clone(),
                state: self.session_state.clone(),
                list: emails,
                not_found,
            };

            Ok(JMAPMethodResponse {
                id: method_call.id.clone(),
                method: "Email/get".to_string(),
                arguments: JMAPResponseArguments::EmailGet(get_response),
            })
        } else {
            Err("Invalid arguments for Email/get".to_string())
        }
    }

    /// Manejar Email/set
    fn handle_email_set(&mut self, method_call: &JMAPMethodCall) -> Result<JMAPMethodResponse, String> {
        if let JMAPArguments::EmailSet(args) = &method_call.arguments {
            let mut created = HashMap::new();
            let mut updated = HashMap::new();
            let mut destroyed = Vec::new();
            let mut not_created = HashMap::new();
            let mut not_updated = HashMap::new();
            let mut not_destroyed = HashMap::new();

            // Procesar create
            if let Some(create_emails) = &args.create {
                for (client_id, email) in create_emails {
                    let new_id = (self.email_store.len() + 1).to_string();
                    let email_clone = email.clone();
                    self.email_store.push(email_clone.clone());
                    created.insert(client_id.clone(), email_clone);
                }
            }

            // Procesar update
            if let Some(update_emails) = &args.update {
                for (id_str, update) in update_emails {
                    if let Ok(id) = id_str.parse::<usize>() {
                        if id > 0 && id <= self.email_store.len() {
                            // Aplicar actualizaciones
                            // Implementar lógica de actualización
                            updated.insert(id_str.clone(), Some(self.email_store[id - 1].clone()));
                        } else {
                            not_updated.insert(id_str.clone(), JMAPError {
                                error_type: "notFound".to_string(),
                                description: Some("Email not found".to_string()),
                            });
                        }
                    } else {
                        not_updated.insert(id_str.clone(), JMAPError {
                            error_type: "invalidArguments".to_string(),
                            description: Some("Invalid email ID".to_string()),
                        });
                    }
                }
            }

            // Procesar destroy
            if let Some(destroy_ids) = &args.destroy {
                for id_str in destroy_ids {
                    if let Ok(id) = id_str.parse::<usize>() {
                        if id > 0 && id <= self.email_store.len() {
                            self.email_store.remove(id - 1);
                            destroyed.push(id_str.clone());
                        } else {
                            not_destroyed.insert(id_str.clone(), JMAPError {
                                error_type: "notFound".to_string(),
                                description: Some("Email not found".to_string()),
                            });
                        }
                    } else {
                        not_destroyed.insert(id_str.clone(), JMAPError {
                            error_type: "invalidArguments".to_string(),
                            description: Some("Invalid email ID".to_string()),
                        });
                    }
                }
            }

            // Actualizar session state
            self.session_state = format!("state_{}", chrono::Utc::now().timestamp());

            let set_response = EmailSetResponse {
                account_id: args.account_id.clone(),
                old_state: args.if_in_state.clone(),
                new_state: self.session_state.clone(),
                created,
                updated,
                destroyed,
                not_created,
                not_updated,
                not_destroyed,
            };

            Ok(JMAPMethodResponse {
                id: method_call.id.clone(),
                method: "Email/set".to_string(),
                arguments: JMAPResponseArguments::EmailSet(set_response),
            })
        } else {
            Err("Invalid arguments for Email/set".to_string())
        }
    }

    /// Manejar Core/echo
    fn handle_core_echo(&self, method_call: &JMAPMethodCall) -> Result<JMAPMethodResponse, String> {
        if let JMAPArguments::CoreEcho(args) = &method_call.arguments {
            let echo_response = CoreEchoResponse {
                message: args.message.clone(),
            };

            Ok(JMAPMethodResponse {
                id: method_call.id.clone(),
                method: "Core/echo".to_string(),
                arguments: JMAPResponseArguments::CoreEcho(echo_response),
            })
        } else {
            Err("Invalid arguments for Core/echo".to_string())
        }
    }

    /// Aplicar filtros a la lista de emails
    fn apply_filter(&self, emails: &[JMAPEmailObject], filter: &JMAPFilter) -> Vec<JMAPEmailObject> {
        emails
            .iter()
            .filter(|email| self.matches_filter(email, filter))
            .cloned()
            .collect()
    }

    /// Verificar si un email coincide con un filtro
    fn matches_filter(&self, email: &JMAPEmailObject, filter: &JMAPFilter) -> bool {
        match filter {
            JMAPFilter::Subject { subject } => {
                email.subject.as_ref().map_or(false, |s| s.contains(subject))
            }
            JMAPFilter::From { from } => {
                email.from.as_ref().map_or(false, |addresses| {
                    addresses.iter().any(|addr| addr.email.contains(from))
                })
            }
            JMAPFilter::To { to } => {
                email.to.as_ref().map_or(false, |addresses| {
                    addresses.iter().any(|addr| addr.email.contains(to))
                })
            }
            JMAPFilter::Body { body } => {
                email.body.as_ref().map_or(false, |parts| {
                    parts.iter().any(|part| {
                        part.value.as_ref().map_or(false, |v| v.contains(body))
                    })
                })
            }
            JMAPFilter::HasAttachment { hasAttachment } => {
                // Implementar lógica de attachments
                !*hasAttachment // Por ahora siempre false
            }
            JMAPFilter::MinSize { minSize } => {
                email.body.as_ref().map_or(false, |parts| {
                    parts.iter().any(|part| part.size.unwrap_or(0) >= *minSize as usize)
                })
            }
            JMAPFilter::MaxSize { maxSize } => {
                email.body.as_ref().map_or(false, |parts| {
                    parts.iter().any(|part| part.size.unwrap_or(0) <= *maxSize as usize)
                })
            }
            JMAPFilter::InMailbox { inMailbox } => {
                email.mailbox_ids.as_ref().map_or(false, |mailboxes| {
                    mailboxes.contains_key(inMailbox)
                })
            }
            _ => true, // Filtros complejos no implementados
        }
    }
}

// ============================================================================
// FUNCIONES FFI PARA DENO
// ============================================================================

/// Función FFI para procesar un request JMAP desde Deno
/// 
/// # Arguments
/// * `json_request` - JSON string con el request JMAP
/// 
/// # Returns
/// * JSON string con la respuesta JMAP
#[no_mangle]
pub extern "C" fn process_jmap_request(json_request: *const i8) -> *mut i8 {
    let request_str = unsafe {
        std::ffi::CStr::from_ptr(json_request)
            .to_string_lossy()
            .into_owned()
    };

    match serde_json::from_str::<JMAPRequest>(&request_str) {
        Ok(request) => {
            let mut runtime = JMAPRuntime::new();
            match runtime.process_request(&request) {
                Ok(response) => {
                    match serde_json::to_string(&response) {
                        Ok(response_json) => {
                            let c_string = std::ffi::CString::new(response_json).unwrap();
                            c_string.into_raw()
                        }
                        Err(_) => {
                            let error_json = r#"{"error": "Failed to serialize response"}"#;
                            let c_string = std::ffi::CString::new(error_json).unwrap();
                            c_string.into_raw()
                        }
                    }
                }
                Err(e) => {
                    let error_json = format!(r#"{{"error": "{}"}}"#, e);
                    let c_string = std::ffi::CString::new(error_json).unwrap();
                    c_string.into_raw()
                }
            }
        }
        Err(e) => {
            let error_json = format!(r#"{{"error": "Failed to parse request: {}"}}"#, e);
            let c_string = std::ffi::CString::new(error_json).unwrap();
            c_string.into_raw()
        }
    }
}

/// Función FFI para liberar memoria de strings C
#[no_mangle]
pub extern "C" fn free_string(ptr: *mut i8) {
    unsafe {
        if !ptr.is_null() {
            let _ = std::ffi::CString::from_raw(ptr);
        }
    }
}

// ============================================================================
// EJEMPLO DE USO (para testing)
// ============================================================================

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_jmap_runtime() {
        println!("🚀 JMAP Runtime para FFI con Deno");
        println!("==================================\n");

        let mut runtime = JMAPRuntime::new();

        // Ejemplo 1: Email/query
        let query_request = JMAPRequest {
            using: vec!["urn:ietf:params:jmap:core".to_string(), "urn:ietf:params:jmap:mail".to_string()],
            method_calls: vec![JMAPMethodCall {
                id: "query_1".to_string(),
                method: "Email/query".to_string(),
                arguments: JMAPArguments::EmailQuery(EmailQueryArguments {
                    account_id: "1".to_string(),
                    filter: Some(JMAPFilter::Subject { subject: "Test".to_string() }),
                    sort: None,
                    position: None,
                    anchor: None,
                    anchor_offset: None,
                    limit: Some(10),
                    calculate_total: Some(true),
                }),
            }],
            created_ids: None,
        };

        println!("📤 Request 1 (Email/query):");
        println!("{}", serde_json::to_string_pretty(&query_request).unwrap());

        match runtime.process_request(&query_request) {
            Ok(response) => {
                println!("\n📥 Response 1:");
                println!("{}", serde_json::to_string_pretty(&response).unwrap());
            }
            Err(e) => println!("❌ Error: {}", e),
        }

        println!("\n{}", "=".repeat(50));
        println!();

        // Ejemplo 2: Email/get
        let get_request = JMAPRequest {
            using: vec!["urn:ietf:params:jmap:core".to_string(), "urn:ietf:params:jmap:mail".to_string()],
            method_calls: vec![JMAPMethodCall {
                id: "get_1".to_string(),
                method: "Email/get".to_string(),
                arguments: JMAPArguments::EmailGet(EmailGetArguments {
                    account_id: "1".to_string(),
                    ids: Some(vec!["1".to_string(), "2".to_string()]),
                    properties: Some(vec!["subject".to_string(), "from".to_string(), "body".to_string()]),
                }),
            }],
            created_ids: None,
        };

        println!("📤 Request 2 (Email/get):");
        println!("{}", serde_json::to_string_pretty(&get_request).unwrap());

        match runtime.process_request(&get_request) {
            Ok(response) => {
                println!("\n📥 Response 2:");
                println!("{}", serde_json::to_string_pretty(&response).unwrap());
            }
            Err(e) => println!("❌ Error: {}", e),
        }

        println!("\n{}", "=".repeat(50));
        println!();

        // Ejemplo 3: Core/echo
        let echo_request = JMAPRequest {
            using: vec!["urn:ietf:params:jmap:core".to_string()],
            method_calls: vec![JMAPMethodCall {
                id: "echo_1".to_string(),
                method: "Core/echo".to_string(),
                arguments: JMAPArguments::CoreEcho(CoreEchoArguments {
                    message: "Hello from JMAP Runtime!".to_string(),
                }),
            }],
            created_ids: None,
        };

        println!("📤 Request 3 (Core/echo):");
        println!("{}", serde_json::to_string_pretty(&echo_request).unwrap());

        match runtime.process_request(&echo_request) {
            Ok(response) => {
                println!("\n📥 Response 3:");
                println!("{}", serde_json::to_string_pretty(&response).unwrap());
            }
            Err(e) => println!("❌ Error: {}", e),
        }
    }
} 