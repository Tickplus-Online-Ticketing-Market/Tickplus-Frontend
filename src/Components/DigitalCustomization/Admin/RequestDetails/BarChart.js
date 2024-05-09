import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

function BarChart({ data }) {
  const chartRef = useRef();

  useEffect(() => {
    if (data && data.requestsNeedResponse !== undefined && data.totalRequests !== undefined && data.requestsDone !== undefined) {
      const ctx = chartRef.current.getContext("2d");
      const labels = ["Requests needing response", "Total requests", "Completed requests"];
      const values = [data.requestsNeedResponse, data.totalRequests, data.requestsDone];

      new Chart(ctx, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Number of Requests",
              data: values,
              backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
              ],
              borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
              ],
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }, [data]);

  return <canvas ref={chartRef} />;
}

export default BarChart;
