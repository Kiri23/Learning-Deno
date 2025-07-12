# Observable Plot Hello World with Deno

A simple "Hello World" application demonstrating Observable Plot visualizations with a Deno API server.

## Features

- 📊 Three different chart types: Bar Chart, Line Chart, and Scatter Plot
- 🎨 Beautiful, modern UI with gradient background
- 🔌 REST API endpoint for data
- ⚡ Fast Deno server

## Getting Started

### Prerequisites

- [Deno](https://deno.land/) installed on your system

### Running the Application

1. Navigate to the observablePlot directory:
   ```bash
   cd observablePlot
   ```

2. Run the development server:
   ```bash
   deno task dev
   ```

   Or run directly:
   ```bash
   deno run --allow-net --allow-read main.ts
   ```

3. Open your browser and visit:
   - **Main page**: http://localhost:8000
   - **API endpoint**: http://localhost:8000/api/plot

## What You'll See

- **Bar Chart**: Simple categorical data visualization
- **Line Chart**: Time series data with sine wave pattern
- **Scatter Plot**: Random data points with varying sizes

## API Endpoints

- `GET /` - Serves the main HTML page with visualizations
- `GET /api/plot` - Returns JSON data for API consumption

## Technologies Used

- **Deno** - Runtime and server
- **Observable Plot** - Data visualization library
- **HTML/CSS** - Frontend presentation
- **JavaScript** - Client-side plot rendering

## Customization

You can modify the sample data in the `<script>` section of the HTML to create your own visualizations. The plots are created using Observable Plot's declarative API. 