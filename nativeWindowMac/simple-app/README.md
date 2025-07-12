# Aplicación Nativa Simple - Hello World

Una aplicación nativa simple para macOS creada con Deno que muestra notificaciones y diálogos nativos.

## 🚀 Características

- Notificaciones nativas de macOS
- Diálogos nativos
- Sonidos del sistema
- Compilación nativa para Apple Silicon

## 📋 Requisitos

- macOS 10.15+ (Catalina o superior)
- Deno 1.40+

## 🛠️ Uso

### Desarrollo

```bash
cd simple-app
deno task dev
```

### Compilación

```bash
cd simple-app
deno task compile
```

### Ejecutar binario

```bash
./simple-native-app
```

## 🎯 Funcionalidades

1. **Notificación de bienvenida**: Muestra una notificación nativa
2. **Sonido del sistema**: Reproduce un sonido de macOS
3. **Diálogo nativo**: Muestra un diálogo con botón OK

## 📦 Empaquetado con Platypus

Para crear una aplicación con icono de escritorio:

1. Descarga Platypus desde: https://sveinbjorn.org/platypus
2. Abre Platypus
3. Configura:
   - **App Name**: Hello World App
   - **Script Type**: Executable
   - **Script Path**: Selecciona `simple-native-app`
   - **Icon**: Selecciona un icono personalizado
4. Haz clic en "Create App"

## 📁 Estructura

```
simple-app/
├── main.ts          # Código principal
├── deno.json        # Configuración
└── README.md        # Este archivo
```

## 🔧 Comandos Disponibles

- `deno task dev`: Ejecuta en modo desarrollo
- `deno task compile`: Compila para Apple Silicon
- `deno task run`: Ejecuta el binario compilado 