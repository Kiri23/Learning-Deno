// --- FFI AVANZADO - Funciones Rust llamables desde JavaScript ---
use std::ffi::{CString, CStr};
use std::os::raw::c_char;
use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize)]
struct User {
    name: String,
    age: u32,
    email: String,
}

#[derive(Serialize)]
struct ApiResponse {
    success: bool,
    message: String,
    data: Option<String>,
    timestamp: String,
}

// Función que procesa strings
#[no_mangle]
pub extern "C" fn process_string(input: *const c_char) -> *mut c_char {
    if input.is_null() {
        return std::ptr::null_mut();
    }
    
    let c_str = unsafe { CStr::from_ptr(input) };
    let rust_string = c_str.to_string_lossy().into_owned();
    
    // Procesar el string (convertir a mayúsculas y agregar prefijo)
    let processed = format!("PROCESSED: {}", rust_string.to_uppercase());
    
    match CString::new(processed) {
        Ok(c_string) => c_string.into_raw(),
        Err(_) => std::ptr::null_mut(),
    }
}

// Función que hace cálculos matemáticos pesados
#[no_mangle]
pub extern "C" fn fibonacci(n: u64) -> u64 {
    if n <= 1 {
        return n;
    }
    
    let mut a = 0u64;
    let mut b = 1u64;
    
    for _ in 2..=n {
        let temp = a + b;
        a = b;
        b = temp;
    }
    
    b
}

// Función que suma un array de números
#[no_mangle]
pub extern "C" fn sum_array(numbers: *const i32, length: usize) -> i32 {
    if numbers.is_null() || length == 0 {
        return 0;
    }
    
    let slice = unsafe { std::slice::from_raw_parts(numbers, length) };
    slice.iter().sum()
}

// Función que crea un usuario y retorna JSON
#[no_mangle]
pub extern "C" fn create_user_json(name: *const c_char, age: u32, email: *const c_char) -> *mut c_char {
    if name.is_null() || email.is_null() {
        return std::ptr::null_mut();
    }
    
    let name_str = unsafe { CStr::from_ptr(name) }.to_string_lossy().into_owned();
    let email_str = unsafe { CStr::from_ptr(email) }.to_string_lossy().into_owned();
    
    let user = User {
        name: name_str,
        age,
        email: email_str,
    };
    
    match serde_json::to_string(&user) {
        Ok(json) => match CString::new(json) {
            Ok(c_string) => c_string.into_raw(),
            Err(_) => std::ptr::null_mut(),
        },
        Err(_) => std::ptr::null_mut(),
    }
}

// Función que valida un email
#[no_mangle]
pub extern "C" fn validate_email(email: *const c_char) -> bool {
    if email.is_null() {
        return false;
    }
    
    let email_str = unsafe { CStr::from_ptr(email) }.to_string_lossy().into_owned();
    
    // Validación simple de email
    email_str.contains('@') && email_str.contains('.') && email_str.len() > 5
}

// Función que retorna una respuesta API estructurada
#[no_mangle]
pub extern "C" fn create_api_response(message: *const c_char, success: bool, data: *const c_char) -> *mut c_char {
    if message.is_null() {
        return std::ptr::null_mut();
    }
    
    let message_str = unsafe { CStr::from_ptr(message) }.to_string_lossy().into_owned();
    let data_str = if data.is_null() {
        None
    } else {
        Some(unsafe { CStr::from_ptr(data) }.to_string_lossy().into_owned())
    };
    
    let response = ApiResponse {
        success,
        message: message_str,
        data: data_str,
        timestamp: chrono::Utc::now().to_rfc3339(),
    };
    
    match serde_json::to_string(&response) {
        Ok(json) => match CString::new(json) {
            Ok(c_string) => c_string.into_raw(),
            Err(_) => std::ptr::null_mut(),
        },
        Err(_) => std::ptr::null_mut(),
    }
}

// Función para liberar memoria de strings retornados
#[no_mangle]
pub extern "C" fn free_string(ptr: *mut c_char) {
    if !ptr.is_null() {
        unsafe {
            let _ = CString::from_raw(ptr);
        }
    }
}

// Función que cuenta palabras en un texto
#[no_mangle]
pub extern "C" fn count_words(text: *const c_char) -> u32 {
    if text.is_null() {
        return 0;
    }
    
    let text_str = unsafe { CStr::from_ptr(text) }.to_string_lossy().into_owned();
    text_str.split_whitespace().count() as u32
}

// Función que encuentra el número más grande en un array
#[no_mangle]
pub extern "C" fn find_max(numbers: *const i32, length: usize) -> i32 {
    if numbers.is_null() || length == 0 {
        return i32::MIN;
    }
    
    let slice = unsafe { std::slice::from_raw_parts(numbers, length) };
    *slice.iter().max().unwrap_or(&i32::MIN)
} 