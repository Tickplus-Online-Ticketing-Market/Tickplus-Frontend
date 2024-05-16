// ScatterChart.jsx

import React, { useState, useEffect } from 'react';
import { ScatterChart, CartesianGrid, XAxis, YAxis, ZAxis, Tooltip, Legend, Scatter } from 'recharts';
import axios from 'axios';

export default function ScatterChartComponent() {
  const [scatterData, setScatterData] = useState([]);

  useEffect(() => {
    const fetchScatterData = async () => {
      try {
        const response = await axios.get('http://localhost:3030/tpp/pays/counts-sum-by-event');
        const countsData = response.data.countsSum;
        const scatterChartData = countsData.map(item => ({
          eventname: item.eventname,
          count: item.totalCount,
          date: item.date,
        }));
        setScatterData(scatterChartData);
      } catch (error) {
        console.error('Error fetching scatter chart data:', error);
      }
    };

    fetchScatterData();
  }, []);

  return (
    <div>
      <ScatterChart
        width={730}
        height={250}
        margin={{
          top: 20,
          right: 20,
          bottom: 10,
          left: 10,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" type="category" name="Date" />
        <YAxis dataKey="count" type="number" name="Count" />
        <ZAxis dataKey="eventname" type="category" name="Event Name" />
        <Tooltip cursor={{ strokeDasharray: '3 3' }} />
        <Legend />
        {scatterData.map((entry, index) => (
            <Scatter key={index} name={entry.eventname} data={[entry]} fill={`#${Math.floor(Math.random()*16777215).toString(16)}`} />
        ))}
      </ScatterChart>
    </div>
  );
}
