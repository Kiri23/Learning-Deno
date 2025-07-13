const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Observable Plot Hello World</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            margin: 0;
            padding: 20px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
        }
        .container {
            background: white;
            border-radius: 12px;
            padding: 30px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            max-width: 800px;
            width: 100%;
        }
        h1 {
            color: #333;
            text-align: center;
            margin-bottom: 30px;
            font-size: 2.5em;
        }
        .plot-container {
            margin: 20px 0;
            border: 1px solid #e0e0e0;
            border-radius: 8px;
            padding: 20px;
            background: #fafafa;
        }
        .description {
            color: #666;
            text-align: center;
            margin-bottom: 20px;
            font-size: 1.1em;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>📊 Observable Plot Hello World</h1>
        <p class="description">Welcome to your first Observable Plot visualization with Deno!</p>
        
        <div class="plot-container">
            <h3>Simple Bar Chart</h3>
            <div id="bar-chart"></div>
        </div>
        
        <div class="plot-container">
            <h3>Line Chart</h3>
            <div id="line-chart"></div>
        </div>
        
        <div class="plot-container">
            <h3>Scatter Plot</h3>
            <div id="scatter-plot"></div>
        </div>
    </div>

    <script type="module" src="/dist/plot.js"></script>
</body>
</html>
`;

async function handler(req: Request): Promise<Response> {
  const url = new URL(req.url);

  if (url.pathname === "/") {
    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    });
  }

  if (url.pathname.startsWith("/dist/")) {
    try {
      const filePath = url.pathname.substring(1); // Remove leading slash
      const fileContent = Deno.readTextFileSync(filePath);
      return new Response(fileContent, {
        headers: {
          "content-type": "application/javascript; charset=utf-8",
        },
      });
    } catch (error) {
      return new Response(`File not found: ${url.pathname}`, { status: 404 });
    }
  }

  if (url.pathname === "/api/plot") {
    // API endpoint that returns plot data
    const plotData = {
      message: "Hello from Observable Plot API!",
      timestamp: new Date().toISOString(),
      sampleData: [
        { x: 1, y: 10 },
        { x: 2, y: 20 },
        { x: 3, y: 15 },
        { x: 4, y: 25 },
        { x: 5, y: 30 },
      ],
    };

    return new Response(JSON.stringify(plotData, null, 2), {
      headers: {
        "content-type": "application/json",
      },
    });
  }

  return new Response("Not Found", { status: 404 });
}

console.log(
  "🚀 Observable Plot Hello World server running on http://localhost:8000",
);
console.log("📊 Visit http://localhost:8000 to see the visualizations");
console.log("🔗 API endpoint available at http://localhost:8000/api/plot");

await Deno.serve({ port: 8000 }, handler);
