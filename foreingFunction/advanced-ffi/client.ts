// Cliente JavaScript/Deno que llama funciones Rust avanzadas via FFI

const dylib = Deno.dlopen(
  "./target/x86_64-apple-darwin/release/libadvanced_rust_ffi.dylib",
  {
    process_string: { parameters: ["pointer"], result: "pointer" },
    fibonacci: { parameters: ["u64"], result: "u64" },
    sum_array: { parameters: ["pointer", "usize"], result: "i32" },
    create_user_json: {
      parameters: ["pointer", "u32", "pointer"],
      result: "pointer",
    },
    validate_email: { parameters: ["pointer"], result: "bool" },
    create_api_response: {
      parameters: ["pointer", "bool", "pointer"],
      result: "pointer",
    },
    free_string: { parameters: ["pointer"], result: "void" },
    count_words: { parameters: ["pointer"], result: "u32" },
    find_max: { parameters: ["pointer", "usize"], result: "i32" },
  },
);

// Utilidades para manejar strings y arrays
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

function arrayToPointer(arr: number[]): Deno.PointerValue {
  const buffer = new Int32Array(arr);
  return Deno.UnsafePointer.of(buffer);
}

// Función principal que demuestra todas las capacidades
async function main() {
  console.log(
    "🚀 Cliente JavaScript llamando funciones Rust avanzadas via FFI\n",
  );

  try {
    // 1. Procesar string
    console.log("1. Procesando string:");
    const inputString = "hola mundo desde javascript!";
    const inputPtr = stringToCString(inputString);
    const processedPtr = dylib.symbols.process_string(inputPtr);
    console.log("   Input:", inputString);
    console.log("   Output:", readCString(processedPtr));
    dylib.symbols.free_string(processedPtr);
    console.log();

    // 2. Cálculo de Fibonacci
    console.log("2. Cálculo de Fibonacci:");
    const n = BigInt(40);
    const start = Date.now();
    const fibResult = dylib.symbols.fibonacci(n);
    const end = Date.now();
    console.log(`   Fibonacci(${n}): ${fibResult}`);
    console.log(`   Tiempo: ${end - start}ms`);
    console.log();

    // 3. Sumar array de números
    console.log("3. Sumando array de números:");
    const numbers = [1, 2, 3, 4, 5, 10, 20, 30, 100];
    const numbersPtr = arrayToPointer(numbers);
    const sum = dylib.symbols.sum_array(numbersPtr, numbers.length);
    console.log("   Array:", numbers);
    console.log("   Suma:", sum);
    console.log();

    // 4. Encontrar máximo en array
    console.log("4. Encontrando máximo:");
    const maxNumber = dylib.symbols.find_max(numbersPtr, numbers.length);
    console.log("   Array:", numbers);
    console.log("   Máximo:", maxNumber);
    console.log();

    // 5. Crear usuario JSON
    console.log("5. Creando usuario JSON:");
    const name = "Juan Pérez";
    const age = 25;
    const email = "juan@example.com";

    const namePtr = stringToCString(name);
    const emailPtr = stringToCString(email);
    const userJsonPtr = dylib.symbols.create_user_json(namePtr, age, emailPtr);
    const userJson = readCString(userJsonPtr);
    console.log("   Usuario:", userJson);
    dylib.symbols.free_string(userJsonPtr);
    console.log();

    // 6. Validar emails
    console.log("6. Validando emails:");
    const validEmail = "usuario@dominio.com";
    const invalidEmail = "email-invalido";

    const validEmailPtr = stringToCString(validEmail);
    const invalidEmailPtr = stringToCString(invalidEmail);

    const isValid = dylib.symbols.validate_email(validEmailPtr);
    const isInvalid = dylib.symbols.validate_email(invalidEmailPtr);

    console.log(`   "${validEmail}": ${isValid ? "✅ Válido" : "❌ Inválido"}`);
    console.log(
      `   "${invalidEmail}": ${isInvalid ? "✅ Válido" : "❌ Inválido"}`,
    );
    console.log();

    // 7. Contar palabras
    console.log("7. Contando palabras:");
    const text = "Este es un texto de ejemplo para contar palabras";
    const textPtr = stringToCString(text);
    const wordCount = dylib.symbols.count_words(textPtr);
    console.log("   Texto:", text);
    console.log("   Palabras:", wordCount);
    console.log();

    // 8. Crear respuesta API
    console.log("8. Creando respuesta API:");
    const message = "Operación completada exitosamente";
    const data = '{"result": "success", "items": 42}';

    const messagePtr = stringToCString(message);
    const dataPtr = stringToCString(data);
    const apiResponsePtr = dylib.symbols.create_api_response(
      messagePtr,
      true,
      dataPtr,
    );
    const apiResponse = readCString(apiResponsePtr);
    console.log("   Respuesta API:", apiResponse);
    dylib.symbols.free_string(apiResponsePtr);
    console.log();

    // 9. Probar con error
    console.log("9. Probando respuesta de error:");
    const errorMessage = "Algo salió mal";
    const errorMessagePtr = stringToCString(errorMessage);
    const errorResponsePtr = dylib.symbols.create_api_response(
      errorMessagePtr,
      false,
      null,
    );
    const errorResponse = readCString(errorResponsePtr);
    console.log("   Error API:", errorResponse);
    dylib.symbols.free_string(errorResponsePtr);
  } catch (error) {
    console.error("❌ Error:", error);
    console.log("\n💡 Asegúrate de compilar el proyecto Rust:");
    console.log("   cd advanced-ffi && cargo build --release");
  } finally {
    dylib.close();
  }
}

// Ejecutar si es el archivo principal
if (import.meta.main) {
  main();
}

export { dylib, readCString, stringToCString, arrayToPointer };
