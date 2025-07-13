import * as Plot from "https://esm.sh/@observablehq/plot@0.6";
const data = [
  {
    category: "Asss",
    value: 10
  },
  {
    category: "B",
    value: 20
  },
  {
    category: "C",
    value: 15
  },
  {
    category: "D",
    value: 25
  },
  {
    category: "E",
    value: 30
  }
];
const timeData = Array.from({
  length: 50
}, (_, i) => ({
  time: i,
  value: Math.sin(i * 0.1) * 10 + Math.random() * 5
}));
const scatterData = Array.from({
  length: 100
}, () => ({
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 20 + 5
}));
const barChart = Plot.plot({
  marks: [
    Plot.barY(data, {
      x: "category",
      y: "value",
      fill: "steelblue"
    })
  ],
  width: 600,
  height: 300,
  margin: 40
});
const lineChart = Plot.plot({
  marks: [
    Plot.line(timeData, {
      x: "time",
      y: "value",
      stroke: "red",
      strokeWidth: 2
    })
  ],
  width: 600,
  height: 300,
  margin: 40
});
const scatterPlot = Plot.plot({
  marks: [
    Plot.dot(scatterData, {
      x: "x",
      y: "y",
      r: "size",
      fill: "green",
      opacity: 0.6
    })
  ],
  width: 600,
  height: 300,
  margin: 40
});
function renderPlots() {
  const barChartElement = document.getElementById("bar-chart");
  const lineChartElement = document.getElementById("line-chart");
  const scatterPlotElement = document.getElementById("scatter-plot");
  if (barChartElement) barChartElement.appendChild(barChart);
  if (lineChartElement) lineChartElement.appendChild(lineChart);
  if (scatterPlotElement) scatterPlotElement.appendChild(scatterPlot);
}
export {
  barChart,
  data,
  lineChart,
  renderPlots,
  scatterData,
  scatterPlot,
  timeData
};
