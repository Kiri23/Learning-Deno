# Rust FFI Hello World with Deno Core

Este proyecto demuestra cómo crear una interfaz FFI (Foreign Function Interface) entre Rust y JavaScript usando Deno Core.

## 🏗️ Project Structure

```
foreingFunction/
├── Cargo.toml          # Rust project configuration
├── src/
│   └── lib.rs          # Rust library with FFI functions
├── hello.ts            # Simple JavaScript FFI example
└── README.md           # Este archivo
```

## 🦀 Rust Functions

La librería Rust provee una función:

- `hello_from_rust()` - Devuelve un saludo simple

## 🚀 Getting Started

### Prerequisitos

- Rust (última versión estable)
- Deno (última versión)
- macOS, Linux o Windows

### ⚠️ Problema común en Mac M1/M2 (Apple Silicon)

Si tienes una Mac con procesador M1/M2 (Apple Silicon), **Deno espera que las librerías nativas estén compiladas para x86_64**, no para arm64. Si compilas normalmente, verás un error como este al ejecutar tu ejemplo:

```
error: Uncaught (in promise) Error: Could not open library: ... (mach-o file, but is an incompatible architecture (have 'arm64', need 'x86_64'))
```

#### 💡 Solución: Compilar para x86_64

Debes compilar tu librería Rust así:

```bash
cargo build --release --target x86_64-apple-darwin
```

Esto generará el archivo:
- `target/x86_64-apple-darwin/release/libhello_rust_ffi.dylib`

Y así Deno podrá cargarlo correctamente.

### Ejecución del ejemplo

```bash
# Compila para la arquitectura correcta (ver arriba)
cargo build --release --target x86_64-apple-darwin

# Ejecuta el ejemplo FFI puro
deno run --allow-ffi hello.ts
```

## 🔧 ¿Cómo funciona?

1. Rust exporta una función con `#[no_mangle]` y `extern "C"`.
2. Deno usa `Deno.dlopen` para cargar la librería y llamar la función.

## 📝 Ejemplo de uso

### Rust (`src/lib.rs`)
```rust
#[no_mangle]
pub extern "C" fn hello_from_rust() -> *const u8 {
    b"Hello from Rust!\0".as_ptr()
}
```

### Deno (`hello.ts`)
```typescript
const dylib = Deno.dlopen(
  "./target/x86_64-apple-darwin/release/libhello_rust_ffi.dylib",
  {
    hello_from_rust: { parameters: [], result: "pointer" }
  }
);

const ptr = dylib.symbols.hello_from_rust();
function readCString(ptr: Deno.PointerValue): string {
  if (ptr === null) return "Error: puntero nulo";
  const view = new Deno.UnsafePointerView(ptr);
  return view.getCString();
}
console.log("Rust dice:", readCString(ptr));
dylib.close();
```

## 🔍 Troubleshooting

- **Error de arquitectura:** Compila para x86_64 como se explica arriba.
- **Permisos:** Usa `--allow-ffi` al ejecutar Deno.
- **Ruta incorrecta:** Asegúrate de usar la ruta correcta al `.dylib`.

## 📚 Recursos

- [Deno FFI Docs](https://docs.deno.com/runtime/fundamentals/ffi/)
- [Rust FFI Guide](https://doc.rust-lang.org/nomicon/ffi.html) 