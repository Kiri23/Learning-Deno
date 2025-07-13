// --- FFI para Procesamiento de Imágenes - Rust + JavaScript/Deno ---
use std::ffi::{CString, CStr};
use std::os::raw::c_char;
use image::{DynamicImage, ImageBuffer, Rgb, Rgba};
use base64::{Engine as _, engine::general_purpose::STANDARD as BASE64};
use serde::{Serialize, Deserialize};

#[derive(Serialize, Deserialize)]
struct ImageInfo {
    width: u32,
    height: u32,
    format: String,
    size_bytes: usize,
}

#[derive(Serialize)]
struct ProcessingResult {
    success: bool,
    message: String,
    image_info: Option<ImageInfo>,
    processing_time_ms: u64,
}

// Función que convierte una imagen a escala de grises
#[no_mangle]
pub extern "C" fn convert_to_grayscale(base64_image: *const c_char) -> *mut c_char {
    let start = std::time::Instant::now();
    
    if base64_image.is_null() {
        return create_error_response("Imagen base64 es nula");
    }
    
    let base64_str = unsafe { CStr::from_ptr(base64_image) }.to_string_lossy().into_owned();
    
    // Decodificar base64
    let image_data = match BASE64.decode(base64_str) {
        Ok(data) => data,
        Err(_) => return create_error_response("Error decodificando base64"),
    };
    
    // Cargar imagen
    let img = match image::load_from_memory(&image_data) {
        Ok(img) => img,
        Err(_) => return create_error_response("Error cargando imagen"),
    };
    
    // Convertir a escala de grises
    let grayscale = img.grayscale();
    
    // Convertir de vuelta a bytes
    let mut output = Vec::new();
    if let Err(_) = grayscale.write_to(&mut std::io::Cursor::new(&mut output), image::ImageFormat::Png) {
        return create_error_response("Error guardando imagen procesada");
    }
    
    // Codificar a base64
    let output_base64 = BASE64.encode(&output);
    
    // Crear respuesta con información
    let result = ProcessingResult {
        success: true,
        message: "Imagen convertida a escala de grises exitosamente".to_string(),
        image_info: Some(ImageInfo {
            width: grayscale.width(),
            height: grayscale.height(),
            format: "PNG".to_string(),
            size_bytes: output.len(),
        }),
        processing_time_ms: start.elapsed().as_millis() as u64,
    };
    
    match serde_json::to_string(&result) {
        Ok(json) => match CString::new(json) {
            Ok(c_string) => c_string.into_raw(),
            Err(_) => std::ptr::null_mut(),
        },
        Err(_) => std::ptr::null_mut(),
    }
}

// Función que redimensiona una imagen
#[no_mangle]
pub extern "C" fn resize_image(base64_image: *const c_char, new_width: u32, new_height: u32) -> *mut c_char {
    let start = std::time::Instant::now();
    
    if base64_image.is_null() {
        return create_error_response("Imagen base64 es nula");
    }
    
    let base64_str = unsafe { CStr::from_ptr(base64_image) }.to_string_lossy().into_owned();
    
    // Decodificar base64
    let image_data = match BASE64.decode(base64_str) {
        Ok(data) => data,
        Err(_) => return create_error_response("Error decodificando base64"),
    };
    
    // Cargar imagen
    let img = match image::load_from_memory(&image_data) {
        Ok(img) => img,
        Err(_) => return create_error_response("Error cargando imagen"),
    };
    
    // Redimensionar
    let resized = img.resize(new_width, new_height, image::imageops::FilterType::Lanczos3);
    
    // Convertir de vuelta a bytes
    let mut output = Vec::new();
    if let Err(_) = resized.write_to(&mut std::io::Cursor::new(&mut output), image::ImageFormat::Png) {
        return create_error_response("Error guardando imagen redimensionada");
    }
    
    // Codificar a base64
    let output_base64 = BASE64.encode(&output);
    
    // Crear respuesta
    let result = ProcessingResult {
        success: true,
        message: format!("Imagen redimensionada a {}x{}", new_width, new_height),
        image_info: Some(ImageInfo {
            width: resized.width(),
            height: resized.height(),
            format: "PNG".to_string(),
            size_bytes: output.len(),
        }),
        processing_time_ms: start.elapsed().as_millis() as u64,
    };
    
    match serde_json::to_string(&result) {
        Ok(json) => match CString::new(json) {
            Ok(c_string) => c_string.into_raw(),
            Err(_) => std::ptr::null_mut(),
        },
        Err(_) => std::ptr::null_mut(),
    }
}

// Función que aplica un filtro de brillo
#[no_mangle]
pub extern "C" fn adjust_brightness(base64_image: *const c_char, factor: f32) -> *mut c_char {
    let start = std::time::Instant::now();
    
    if base64_image.is_null() {
        return create_error_response("Imagen base64 es nula");
    }
    
    let base64_str = unsafe { CStr::from_ptr(base64_image) }.to_string_lossy().into_owned();
    
    // Decodificar base64
    let image_data = match BASE64.decode(base64_str) {
        Ok(data) => data,
        Err(_) => return create_error_response("Error decodificando base64"),
    };
    
    // Cargar imagen
    let img = match image::load_from_memory(&image_data) {
        Ok(img) => img,
        Err(_) => return create_error_response("Error cargando imagen"),
    };
    
    // Aplicar ajuste de brillo
    let adjusted = img.brighten((factor * 100.0) as i32);
    
    // Convertir de vuelta a bytes
    let mut output = Vec::new();
    if let Err(_) = adjusted.write_to(&mut std::io::Cursor::new(&mut output), image::ImageFormat::Png) {
        return create_error_response("Error guardando imagen ajustada");
    }
    
    // Codificar a base64
    let output_base64 = BASE64.encode(&output);
    
    // Crear respuesta
    let result = ProcessingResult {
        success: true,
        message: format!("Brillo ajustado con factor: {}", factor),
        image_info: Some(ImageInfo {
            width: adjusted.width(),
            height: adjusted.height(),
            format: "PNG".to_string(),
            size_bytes: output.len(),
        }),
        processing_time_ms: start.elapsed().as_millis() as u64,
    };
    
    match serde_json::to_string(&result) {
        Ok(json) => match CString::new(json) {
            Ok(c_string) => c_string.into_raw(),
            Err(_) => std::ptr::null_mut(),
        },
        Err(_) => std::ptr::null_mut(),
    }
}

// Función que obtiene información de una imagen
#[no_mangle]
pub extern "C" fn get_image_info(base64_image: *const c_char) -> *mut c_char {
    if base64_image.is_null() {
        return create_error_response("Imagen base64 es nula");
    }
    
    let base64_str = unsafe { CStr::from_ptr(base64_image) }.to_string_lossy().into_owned();
    
    // Decodificar base64
    let image_data = match BASE64.decode(base64_str) {
        Ok(data) => data,
        Err(_) => return create_error_response("Error decodificando base64"),
    };
    
    // Cargar imagen
    let img = match image::load_from_memory(&image_data) {
        Ok(img) => img,
        Err(_) => return create_error_response("Error cargando imagen"),
    };
    
    // Obtener información
    let info = ImageInfo {
        width: img.width(),
        height: img.height(),
        format: "Unknown".to_string(), // image crate no expone el formato original fácilmente
        size_bytes: image_data.len(),
    };
    
    let result = ProcessingResult {
        success: true,
        message: "Información de imagen obtenida".to_string(),
        image_info: Some(info),
        processing_time_ms: 0,
    };
    
    match serde_json::to_string(&result) {
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

// Función auxiliar para crear respuestas de error
fn create_error_response(message: &str) -> *mut c_char {
    let result = ProcessingResult {
        success: false,
        message: message.to_string(),
        image_info: None,
        processing_time_ms: 0,
    };
    
    match serde_json::to_string(&result) {
        Ok(json) => match CString::new(json) {
            Ok(c_string) => c_string.into_raw(),
            Err(_) => std::ptr::null_mut(),
        },
        Err(_) => std::ptr::null_mut(),
    }
} 