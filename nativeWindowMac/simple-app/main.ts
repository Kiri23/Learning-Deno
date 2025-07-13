// Aplicación nativa simple para macOS
// Hello World con notificaciones nativas

console.log("🚀 Iniciando aplicación nativa simple...");

// Función para mostrar una notificación nativa
function showNotification(title: string, message: string) {
  const command = new Deno.Command("osascript", {
    args: [
      "-e",
      `display notification "${message}" with title "${title}"`
    ]
  });
  
  return command.output();
}

// Función para mostrar un diálogo nativo
function showDialog(title: string, message: string) {
  const command = new Deno.Command("osascript", {
    args: [
      "-e",
      `display dialog "${message}" with title "${title}" buttons {"OK"} default button "OK"`
    ]
  });
  
  return command.output();
}

// Función para reproducir un sonido del sistema
function playSound(soundName: string = "Glass") {
  const command = new Deno.Command("afplay", {
    args: [`/System/Library/Sounds/${soundName}.aiff`]
  });
  
  return command.spawn();
}

// Función principal
async function main() {
  console.log("🌟 Aplicación nativa iniciada");
  
  try {
    // Mostrar notificación de bienvenida
    console.log("📱 Mostrando notificación de bienvenida...");
    await showNotification(
      "¡Hola desde Deno!",
      "Esta es una aplicación nativa compilada con deno compile"
    );
    
    // Reproducir sonido
    console.log("🔊 Reproduciendo sonido...");
    const soundProcess = playSound("Glass");
    
    // Esperar un momento
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mostrar diálogo
    console.log("💬 Mostrando diálogo...");
    await showDialog(
      "Aplicación Nativa",
      "¡Hola Mundo! Esta aplicación fue compilada con deno compile para Apple Silicon."
    );
    
    console.log("✅ Aplicación completada exitosamente");
    
  } catch (error) {
    console.error("❌ Error:", error);
  }
}

// Ejecutar la aplicación
main().catch(console.error); 