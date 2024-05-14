import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto'; // 'auto' helps load appropriate chart types

// Example chart configuration (bar chart)
const chartConfig = {
  type: 'bar',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
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
};

const MyChartComponent = ({ data }) => {
  const canvasRef = useRef(null); // Reference for the canvas element
  const chartRef = useRef(null); // Reference for the Chart.js instance

  useEffect(() => {
    // Destroy existing chart instance if it exists
    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const ctx = canvasRef.current.getContext('2d');
    // Create a new chart instance with the provided configuration
    chartRef.current = new Chart(ctx, {
      ...chartConfig,
      data: {
        ...chartConfig.data,
        datasets: [
          {
            ...chartConfig.data.datasets[0],
            data, // Use the provided data
          },
        ],
      },
    });

    // Cleanup function to destroy the chart when the component unmounts or updates
    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [data]); // Depend on 'data', so re-run effect if 'data' changes

  return <canvas ref={canvasRef} />; // Attach the canvas reference
};

export default MyChartComponent;
