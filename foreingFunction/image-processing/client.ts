// Cliente JavaScript/Deno para procesamiento de imágenes via FFI

const dylib = Deno.dlopen(
  "./target/x86_64-apple-darwin/release/libimage_processing_ffi.dylib",
  {
    convert_to_grayscale: { parameters: ["pointer"], result: "pointer" },
    resize_image: { parameters: ["pointer", "u32", "u32"], result: "pointer" },
    adjust_brightness: { parameters: ["pointer", "f32"], result: "pointer" },
    get_image_info: { parameters: ["pointer"], result: "pointer" },
    free_string: { parameters: ["pointer"], result: "void" },
  },
);

// Utilidades para manejar strings
function readCString(ptr: Deno.PointerValue): string {
  if (ptr === null) {
    return "Error: puntero nulo";
  }
  const view = new Deno.UnsafePointerView(ptr);
  return view.getCString();
}

function stringToCString(str: string): Deno.PointerValue {
  const encoder = new TextEncoder();
  const bytes = encoder.encode(str + "\0");
  return Deno.UnsafePointer.of(new Uint8Array(bytes));
}

// Función para crear una imagen de prueba (base64)
function createTestImage(): string {
  // Esta es una imagen PNG 1x1 pixel rojo en base64
  return "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==";
}

// Función para crear una imagen de prueba más grande
function createLargerTestImage(): string {
  // Esta es una imagen PNG 10x10 pixel azul en base64
  return "iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QjY0NjdGNjgyN0U1MTFFQ0E5Q0FFQjM1N0RCMzMyMkIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QjY0NjdGNjkyN0U1MTFFQ0E5Q0FFQjM1N0RCMzMyMkIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCNjQ2N0Y2NjI3RTUxMUVDQTlDQUVCMzU3REIzMzIyQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCNjQ2N0Y2NzI3RTUxMUVDQTlDQUVCMzU3REIzMzIyQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PgH//v38+/r5+Pf29fTz8vHw7+7t7Ovq6ejn5uXk4+Lh4N/e3dzb2tnY19bV1NPS0dDPzs3My8rJyMfGxcTDwsHAv769vLu6ubi3trW0s7KxsK+urayrqqmop6alpKOioaCfnp2cm5qZmJeWlZSTkpGQj46NjIuKiYiHhoWEg4KBgH9+fXx7enl4d3Z1dHNycXBvbm1sa2ppaGdmZWRjYmFgX15dXFtaWVhXVlVUU1JRUE9OTUxLSklIR0ZFRENCQUA/Pj08Ozo5ODc2NTQzMjEwLy4tLCsqKSgnJiUkIyIhIB8eHRwbGhkYFxYVFBMSERAPDg0MCwoJCAcGBQQDAgEAACH5BAEAAAAALAAAAAAoACgAAAITjI+py+0Po5y02ouz3rz7D4biSJbmiabqyrbuCwAAOw==";
}

// Función principal que demuestra el procesamiento de imágenes
async function main() {
  console.log("🚀 Cliente JavaScript para procesamiento de imágenes via FFI\n");

  try {
    // Crear imagen de prueba
    const testImage = createTestImage();
    const largerImage = createLargerTestImage();

    console.log("📸 Imagen de prueba creada (1x1 pixel)");
    console.log("📸 Imagen más grande creada (10x10 pixel)");
    console.log();

    // 1. Obtener información de la imagen
    console.log("1. Obteniendo información de imagen:");
    const imageInfoPtr = stringToCString(largerImage);
    const infoResultPtr = dylib.symbols.get_image_info(imageInfoPtr);
    const infoResult = readCString(infoResultPtr);
    console.log("   Resultado:", infoResult);
    dylib.symbols.free_string(infoResultPtr);
    console.log();

    // 2. Convertir a escala de grises
    console.log("2. Convirtiendo a escala de grises:");
    const grayscalePtr = stringToCString(largerImage);
    const grayscaleResultPtr = dylib.symbols.convert_to_grayscale(grayscalePtr);
    const grayscaleResult = readCString(grayscaleResultPtr);
    console.log("   Resultado:", grayscaleResult);
    dylib.symbols.free_string(grayscaleResultPtr);
    console.log();

    // 3. Redimensionar imagen
    console.log("3. Redimensionando imagen:");
    const resizePtr = stringToCString(largerImage);
    const resizeResultPtr = dylib.symbols.resize_image(resizePtr, 5, 5);
    const resizeResult = readCString(resizeResultPtr);
    console.log("   Resultado:", resizeResult);
    dylib.symbols.free_string(resizeResultPtr);
    console.log();

    // 4. Ajustar brillo
    console.log("4. Ajustando brillo:");
    const brightnessPtr = stringToCString(largerImage);
    const brightnessResultPtr = dylib.symbols.adjust_brightness(
      brightnessPtr,
      0.5,
    );
    const brightnessResult = readCString(brightnessResultPtr);
    console.log("   Resultado:", brightnessResult);
    dylib.symbols.free_string(brightnessResultPtr);
    console.log();

    // 5. Procesar imagen pequeña (más rápido)
    console.log("5. Procesando imagen pequeña:");
    const smallPtr = stringToCString(testImage);
    const smallResultPtr = dylib.symbols.convert_to_grayscale(smallPtr);
    const smallResult = readCString(smallResultPtr);
    console.log("   Resultado:", smallResult);
    dylib.symbols.free_string(smallResultPtr);
    console.log();

    // 6. Probar con imagen inválida
    console.log("6. Probando con imagen inválida:");
    const invalidPtr = stringToCString("imagen-invalida");
    const invalidResultPtr = dylib.symbols.convert_to_grayscale(invalidPtr);
    const invalidResult = readCString(invalidResultPtr);
    console.log("   Resultado:", invalidResult);
    dylib.symbols.free_string(invalidResultPtr);
  } catch (error) {
    console.error("❌ Error:", error);
    console.log("\n💡 Asegúrate de compilar el proyecto Rust:");
    console.log(
      "   cd image-processing && cargo build --release --target x86_64-apple-darwin",
    );
  } finally {
    dylib.close();
  }
}

// Ejecutar si es el archivo principal
if (import.meta.main) {
  main();
}

export {
  dylib,
  readCString,
  stringToCString,
  createTestImage,
  createLargerTestImage,
};
