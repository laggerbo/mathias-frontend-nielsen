import { useEffect, useRef } from "react";
import { Chart, ArcElement, PieController, Tooltip, Legend, type ChartItem } from "chart.js";

Chart.register(ArcElement, PieController, Tooltip, Legend);

interface PieChartProps {
  title: string;
  labels: string[];
  data: number[];
  colors: string[];
  emptyLabel?: string;
}

export function PieChart({ title, labels, data, colors, emptyLabel }: PieChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const chartRef = useRef<Chart | null>(null);
  const fallbackLabel = emptyLabel || "No data yet";

  useEffect(() => {
    if (!canvasRef.current) return;
    const hasData = data.some((v) => v > 0);
    const chartData = hasData ? data : [1];
    const chartLabels = hasData ? labels : [fallbackLabel];
    const chartColors = hasData ? colors : ["#d9d2c1"];
    const inkColor = getComputedStyle(document.documentElement).getPropertyValue("--ink").trim();

    if (chartRef.current) {
      chartRef.current.data.labels = chartLabels;
      chartRef.current.data.datasets[0].data = chartData;
      (chartRef.current.data.datasets[0] as any).backgroundColor = chartColors;
      chartRef.current.update();
      return;
    }

    chartRef.current = new Chart(canvasRef.current as ChartItem, {
      type: "pie",
      data: {
        labels: chartLabels,
        datasets: [{ data: chartData, backgroundColor: chartColors, borderWidth: 1, borderColor: "#ffffff33" }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "bottom",
            labels: {
              boxWidth: 11,
              color: inkColor,
              font: { family: "'IBM Plex Mono', monospace", size: 11 },
              generateLabels: (chart) => {
                const ds = chart.data.datasets[0];
                const values = ds.data as number[];
                const total = values.reduce((a, b) => a + b, 0);
                const isPlaceholder = chart.data.labels?.length === 1 && chart.data.labels[0] === fallbackLabel;
                return (chart.data.labels as string[]).map((label, i) => {
                  const pct = total ? Math.round((values[i] / total) * 100) : 0;
                  return {
                    text: isPlaceholder ? label : `${label} — ${pct}%`,
                    fillStyle: (ds.backgroundColor as string[])[i],
                    strokeStyle: (ds.backgroundColor as string[])[i],
                    index: i,
                  };
                });
              },
            },
          },
          tooltip: {
            callbacks: {
              label: (ctx) => {
                const isPlaceholder = ctx.label === fallbackLabel;
                if (isPlaceholder) return ctx.label;
                const values = ctx.dataset.data as number[];
                const total = values.reduce((a, b) => a + b, 0);
                const pct = total ? Math.round(((ctx.parsed as number) / total) * 100) : 0;
                return `${ctx.label}: ${ctx.parsed} (${pct}%)`;
              },
            },
          },
        },
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data.join(",")]);

  useEffect(() => {
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
        chartRef.current = null;
      }
    };
  }, []);

  return (
    <div className="chart-card">
      <h3>{title}</h3>
      <div className="chart-holder">
        <canvas ref={canvasRef} role="img" aria-label={title}></canvas>
      </div>
    </div>
  );
}
