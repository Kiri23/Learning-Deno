import { bundleApp } from "./bundle.ts";

// Example usage of the bundle builder pattern
async function createBundle() {
  try {
    await bundleApp()
      .sourcePath("./nativeWindowMac/simple-app")
      .outputPath("./nativeWindowMac/simple-app")
      .executable("simple-app")
      .bundleName("simple-app")
      .bundleId("com.example.simple-app")
      .displayName("Simple App")
      .version("1.0.0")
      .minSystemVersion("10.15")
      .build();
  } catch (error) {
    console.error("Failed to create bundle:", error);
  }
}

// CLI usage
if (import.meta.main) {
  const args = Deno.args;

  if (args.length < 1) {
    console.error(
      "Usage: deno run --allow-read --allow-write --allow-run main.ts <main.ts-path>",
    );
    Deno.exit(1);
  }

  const mainTsPath = args[0];
  const sourceDir = mainTsPath.substring(0, mainTsPath.lastIndexOf("/"));
  const executableName = mainTsPath
    .substring(mainTsPath.lastIndexOf("/") + 1)
    .replace(".ts", "");

  bundleApp()
    .sourcePath(sourceDir)
    .outputPath(sourceDir)
    .executable(executableName)
    .bundleName(executableName)
    .bundleId(`com.example.${executableName}`)
    .displayName(executableName)
    .version("1.0")
    .minSystemVersion("10.15")
    .build()
    .then(() => {
      console.log("🎉 Bundle created successfully!");
    })
    .catch((error) => {
      console.error("❌ Bundle creation failed:", error);
      Deno.exit(1);
    });
}
