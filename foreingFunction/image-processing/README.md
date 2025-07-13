# 🖼️ Procesamiento de Imágenes con FFI: Rust + JavaScript/Deno

Este proyecto demuestra cómo usar bibliotecas de terceros en Rust (como `image`) para procesar imágenes y llamarlas desde JavaScript/Deno usando FFI.

## 🎯 Funcionalidades

### 📸 **Procesamiento de Imágenes**
- `convert_to_grayscale()` - Convierte imagen a escala de grises
- `resize_image()` - Redimensiona imagen a nuevas dimensiones
- `adjust_brightness()` - Ajusta el brillo de la imagen
- `get_image_info()` - Obtiene información de la imagen

### 🔧 **Características Técnicas**
- ✅ **Bibliotecas de terceros**: Usa la crate `image` de Rust
- ✅ **Base64**: Transfiere imágenes como strings base64
- ✅ **Múltiples formatos**: Soporta PNG, JPEG, etc.
- ✅ **Información detallada**: Retorna metadata de procesamiento
- ✅ **Manejo de errores**: Respuestas estructuradas con JSON

## 🚀 Cómo usar

### 1. Compilar el proyecto Rust

```bash
cd image-processing
cargo build --release --target x86_64-apple-darwin
```

### 2. Ejecutar el cliente JavaScript

```bash
deno task start
```

## 📋 Ejemplos de uso

### Convertir imagen a escala de grises
```typescript
const imageBase64 = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==";
const imagePtr = stringToCString(imageBase64);
const resultPtr = dylib.symbols.convert_to_grayscale(imagePtr);
const result = readCString(resultPtr);
console.log(result); // JSON con imagen procesada
dylib.symbols.free_string(resultPtr);
```

### Redimensionar imagen
```typescript
const resultPtr = dylib.symbols.resize_image(imagePtr, 800, 600);
const result = readCString(resultPtr);
console.log(result); // JSON con imagen redimensionada
dylib.symbols.free_string(resultPtr);
```

### Ajustar brillo
```typescript
const resultPtr = dylib.symbols.adjust_brightness(imagePtr, 0.5);
const result = readCString(resultPtr);
console.log(result); // JSON con imagen ajustada
dylib.symbols.free_string(resultPtr);
```

## 🏗️ Arquitectura

```
┌─────────────────┐    Base64    ┌─────────────────┐
│   JavaScript    │ ◄──────────► │   Rust + image  │
│   (Deno)        │              │   (FFI)         │
└─────────────────┘              └─────────────────┘
        │                                │
        │                                │
   Imagen base64                    Procesamiento
   (PNG, JPEG, etc.)                (filtros, resize, etc.)
```

## 📦 Dependencias Rust utilizadas

- **`image`** - Procesamiento de imágenes (PNG, JPEG, etc.)
- **`base64`** - Codificación/decodificación base64
- **`serde`** - Serialización JSON
- **`serde_json`** - Manejo de JSON

## 🎨 Casos de uso reales

1. **Aplicaciones web** - Procesar imágenes subidas por usuarios
2. **Herramientas de diseño** - Filtros y efectos en tiempo real
3. **Sistemas de archivos** - Optimización automática de imágenes
4. **APIs de procesamiento** - Backend para servicios de imagen
5. **Aplicaciones móviles** - Procesamiento local de fotos

## ⚡ Ventajas de esta aproximación

✅ **Rendimiento máximo** - Rust es extremadamente rápido para procesamiento de imágenes  
✅ **Bibliotecas maduras** - Acceso a todo el ecosistema de Rust  
✅ **Memoria eficiente** - Control directo de memoria  
✅ **Tipado fuerte** - Seguridad de tipos en el procesamiento  
✅ **Sin overhead de red** - Procesamiento local directo  

## 🔍 Estructura de respuesta

```json
{
  "success": true,
  "message": "Imagen procesada exitosamente",
  "image_info": {
    "width": 800,
    "height": 600,
    "format": "PNG",
    "size_bytes": 24576
  },
  "processing_time_ms": 15
}
```

## 🚨 Consideraciones importantes

⚠️ **Tamaño de imagen**: Las imágenes grandes pueden consumir mucha memoria  
⚠️ **Formato base64**: Aumenta el tamaño ~33% vs binario  
⚠️ **Gestión de memoria**: Siempre libera strings con `free_string()`  
⚠️ **Validación**: Verifica que las imágenes sean válidas antes de procesar  

## 🔮 Próximos pasos

- Agregar más filtros (blur, sharpen, etc.)
- Soporte para más formatos (WebP, AVIF)
- Procesamiento por lotes
- Optimización de memoria para imágenes grandes
- Integración con Canvas API del navegador 