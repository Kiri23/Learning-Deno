interface BundleConfig {
  executable: string;
  bundleName: string;
  bundleId: string;
  displayName: string;
  version: string;
  minSystemVersion: string;
  sourcePath: string;
  outputPath: string;
}

class InfoPlistBuilder {
  private config: Partial<BundleConfig> = {};

  executable(name: string): InfoPlistBuilder {
    this.config.executable = name;
    return this;
  }

  bundleId(id: string): InfoPlistBuilder {
    this.config.bundleId = id;
    return this;
  }

  displayName(name: string): InfoPlistBuilder {
    this.config.displayName = name;
    return this;
  }

  version(version: string): InfoPlistBuilder {
    this.config.version = version;
    return this;
  }

  minSystemVersion(version: string): InfoPlistBuilder {
    this.config.minSystemVersion = version;
    return this;
  }

  build(): string {
    const config = this.config as BundleConfig;

    return `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>CFBundleExecutable</key>
	<string>${config.executable}</string>
	<key>CFBundleIdentifier</key>
	<string>${config.bundleId}</string>
	<key>CFBundleName</key>
	<string>${config.displayName}</string>
	<key>CFBundleDisplayName</key>
	<string>${config.displayName}</string>
	<key>CFBundleVersion</key>
	<string>${config.version}</string>
	<key>CFBundleShortVersionString</key>
	<string>${config.version}</string>
	<key>CFBundlePackageType</key>
	<string>APPL</string>
	<key>CFBundleSignature</key>
	<string>????</string>
	<key>LSMinimumSystemVersion</key>
	<string>${config.minSystemVersion}</string>
	<key>NSHighResolutionCapable</key>
	<true/>
	<key>NSPrincipalClass</key>
	<string>NSApplication</string>
	<key>NSAppTransportSecurity</key>
	<dict>
		<key>NSAllowsArbitraryLoads</key>
		<true/>
	</dict>
</dict>
</plist>`;
  }
}

class BundleBuilder {
  private config: Partial<BundleConfig> = {};

  sourcePath(path: string): BundleBuilder {
    this.config.sourcePath = path;
    return this;
  }

  outputPath(path: string): BundleBuilder {
    this.config.outputPath = path;
    return this;
  }

  executable(name: string): BundleBuilder {
    this.config.executable = name;
    return this;
  }

  bundleName(name: string): BundleBuilder {
    this.config.bundleName = name;
    return this;
  }

  bundleId(id: string): BundleBuilder {
    this.config.bundleId = id;
    return this;
  }

  displayName(name: string): BundleBuilder {
    this.config.displayName = name;
    return this;
  }

  version(version: string): BundleBuilder {
    this.config.version = version;
    return this;
  }

  minSystemVersion(version: string): BundleBuilder {
    this.config.minSystemVersion = version;
    return this;
  }

  async build(): Promise<void> {
    const config = this.config as BundleConfig;

    // Validate required fields
    if (!config.sourcePath || !config.outputPath || !config.executable) {
      throw new Error(
        "Missing required fields: sourcePath, outputPath, executable",
      );
    }

    // Create bundle directory structure
    const bundlePath = `${config.outputPath}/${config.bundleName}.app`;
    const contentsPath = `${bundlePath}/Contents`;
    const macosPath = `${contentsPath}/MacOS`;
    const resourcesPath = `${contentsPath}/Resources`;

    // Create directories
    await Deno.mkdir(macosPath, { recursive: true });
    await Deno.mkdir(resourcesPath, { recursive: true });

    // Copy executable
    const sourceExecutable = `${config.sourcePath}/${config.executable}`;
    const targetExecutable = `${macosPath}/${config.executable}`;

    try {
      await Deno.copyFile(sourceExecutable, targetExecutable);
      // Make executable
      await Deno.chmod(targetExecutable, 0o755);
    } catch (error) {
      throw new Error(`Failed to copy executable: ${error.message}`);
    }

    // Create Info.plist
    const infoPlist = new InfoPlistBuilder()
      .executable(config.executable)
      .bundleId(config.bundleId || `com.example.${config.bundleName}`)
      .displayName(config.displayName || config.bundleName)
      .version(config.version || "1.0")
      .minSystemVersion(config.minSystemVersion || "10.15")
      .build();

    // Write Info.plist
    await Deno.writeTextFile(`${contentsPath}/Info.plist`, infoPlist);

    console.log(`✅ Bundle created successfully at: ${bundlePath}`);
    console.log(`📦 Bundle structure:`);
    console.log(`   ${bundlePath}/`);
    console.log(`   ├── Contents/`);
    console.log(`   │   ├── Info.plist`);
    console.log(`   │   ├── MacOS/${config.executable}`);
    console.log(`   │   └── Resources/`);
  }
}

export function bundleApp(): BundleBuilder {
  return new BundleBuilder();
}

// CLI usage
if (import.meta.main) {
  const args = Deno.args;

  if (args.length < 1) {
    console.error(
      "Usage: deno run --allow-read --allow-write --allow-run bundle.ts <main.ts-path>",
    );
    Deno.exit(1);
  }

  const mainTsPath = args[0];
  const sourceDir = mainTsPath.substring(0, mainTsPath.lastIndexOf("/"));
  const executableName = mainTsPath
    .substring(mainTsPath.lastIndexOf("/") + 1)
    .replace(".ts", "");
  const bundleName = executableName;

  try {
    await bundleApp()
      .sourcePath(sourceDir)
      .outputPath(sourceDir)
      .executable(executableName)
      .bundleName(bundleName)
      .bundleId(`com.example.${bundleName}`)
      .displayName(bundleName)
      .version("1.0")
      .minSystemVersion("10.15")
      .build();
  } catch (error) {
    console.error(`❌ Bundle creation failed: ${error.message}`);
    Deno.exit(1);
  }
}
