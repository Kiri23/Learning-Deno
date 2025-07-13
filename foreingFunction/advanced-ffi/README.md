# 🚀 FFI Avanzado: Rust + JavaScript/Deno

Este proyecto demuestra cómo llamar funciones Rust avanzadas directamente desde JavaScript/Deno usando FFI (Foreign Function Interface).

## Funciones Rust disponibles

### 1. **Procesamiento de Strings**
- `process_string()` - Procesa y convierte strings a mayúsculas
- `count_words()` - Cuenta palabras en un texto

### 2. **Cálculos Matemáticos**
- `fibonacci()` - Calcula números de Fibonacci
- `sum_array()` - Suma elementos de un array
- `find_max()` - Encuentra el máximo en un array

### 3. **Validación y Estructuras**
- `validate_email()` - Valida formato de email
- `create_user_json()` - Crea objetos JSON estructurados
- `create_api_response()` - Genera respuestas API tipadas

## Cómo usar

### 1. Compilar el proyecto Rust

```bash
cd advanced-ffi
cargo build --release --target x86_64-apple-darwin
```

### 2. Ejecutar el cliente JavaScript

```bash
deno task start
```

## Ejemplos de uso

### Llamar función simple
```typescript
const result = dylib.symbols.fibonacci(BigInt(40));
console.log(result); // 102334155
```

### Procesar strings
```typescript
const inputPtr = stringToCString("hola mundo");
const resultPtr = dylib.symbols.process_string(inputPtr);
const result = readCString(resultPtr);
console.log(result); // "PROCESSED: HOLA MUNDO"
dylib.symbols.free_string(resultPtr);
```

### Trabajar con arrays
```typescript
const numbers = [1, 2, 3, 4, 5];
const numbersPtr = arrayToPointer(numbers);
const sum = dylib.symbols.sum_array(numbersPtr, numbers.length);
console.log(sum); // 15
```

### Crear JSON estructurado
```typescript
const namePtr = stringToCString("Juan");
const emailPtr = stringToCString("juan@example.com");
const userJsonPtr = dylib.symbols.create_user_json(namePtr, 25, emailPtr);
const userJson = readCString(userJsonPtr);
console.log(userJson); // {"name":"Juan","age":25,"email":"juan@example.com"}
dylib.symbols.free_string(userJsonPtr);
```

## Ventajas de FFI directo

✅ **Máximo rendimiento** - Sin overhead de red  
✅ **Tipado fuerte** - Rust garantiza seguridad de tipos  
✅ **Memoria eficiente** - Control directo de memoria  
✅ **Funciones complejas** - Puedes crear cualquier lógica en Rust  

## Casos de uso ideales

1. **Procesamiento de datos intensivo**
2. **Algoritmos complejos** (ML, criptografía, etc.)
3. **Validaciones de alto rendimiento**
4. **Manipulación de archivos binarios**
5. **Integración con bibliotecas nativas**

## Consideraciones importantes

⚠️ **Gestión de memoria**: Siempre libera strings retornados con `free_string()`  
⚠️ **Tipos de datos**: Maneja correctamente la conversión entre JS y Rust  
⚠️ **Punteros nulos**: Verifica siempre si los punteros son válidos  
⚠️ **Plataforma específico**: Los binarios son específicos por arquitectura  

## Próximos pasos

- Agregar más tipos de datos complejos
- Implementar callbacks de JavaScript a Rust
- Crear bindings para bibliotecas externas
- Agregar manejo de errores más robusto 