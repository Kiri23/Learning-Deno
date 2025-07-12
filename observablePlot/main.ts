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

    <script type="module">
        import * as Plot from "https://esm.sh/@observablehq/plot@0.6";
        
        // Sample data
        const data = [
            { category: "A", value: 10 },
            { category: "B", value: 20 },
            { category: "C", value: 15 },
            { category: "D", value: 25 },
            { category: "E", value: 30 }
        ];
        
        const timeData = Array.from({ length: 50 }, (_, i) => ({
            time: i,
            value: Math.sin(i * 0.1) * 10 + Math.random() * 5
        }));
        
        const scatterData = Array.from({ length: 100 }, () => ({
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 20 + 5
        }));
        
        // Create plots
        const barChart = Plot.plot({
            marks: [
                Plot.barY(data, { x: "category", y: "value", fill: "steelblue" })
            ],
            width: 600,
            height: 300,
            margin: 40
        });
        
        const lineChart = Plot.plot({
            marks: [
                Plot.line(timeData, { x: "time", y: "value", stroke: "red", strokeWidth: 2 })
            ],
            width: 600,
            height: 300,
            margin: 40
        });
        
        const scatterPlot = Plot.plot({
            marks: [
                Plot.dot(scatterData, { x: "x", y: "y", r: "size", fill: "green", opacity: 0.6 })
            ],
            width: 600,
            height: 300,
            margin: 40
        });
        
        // Render plots
        document.getElementById("bar-chart").appendChild(barChart);
        document.getElementById("line-chart").appendChild(lineChart);
        document.getElementById("scatter-plot").appendChild(scatterPlot);
    </script>
</body>
</html>
`;

function handler(req: Request): Response {
  const url = new URL(req.url);

  if (url.pathname === "/") {
    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=utf-8",
      },
    });
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
