// Hello World con FFI puro - Rust + Deno
const dylib = Deno.dlopen(
  "./target/x86_64-apple-darwin/release/libhello_rust_ffi.dylib",
  {
    hello_from_rust: { parameters: [], result: "pointer" },
  },
);

const ptr = dylib.symbols.hello_from_rust();

function readCString(ptr: Deno.PointerValue): string {
  if (ptr === null) {
    return "Error: puntero nulo";
  }
  const view = new Deno.UnsafePointerView(ptr);
  return view.getCString();
}

console.log("🚀 Hello World con FFI puro!");
console.log("Rust dice:", readCString(ptr));

dylib.close();
