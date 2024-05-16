import React, { useEffect, useState } from "react";
import axios from "axios";

import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const COLORS = ["#00C49F", "#FFBB28"];
const RADIAN = Math.PI / 180; // Define RADIAN constant

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function Piecharts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://tickplus-backend.onrender.com/ticket-launching/clickCounts"
      );
      const { systemClickCount, customClickCount } = response.data;
      setData([
        { name: "System Template", value: systemClickCount },
        { name: "Custom Template", value: customClickCount },
      ]);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="w-[20rem] h-[22rem] bg-background p-4 rounded-lg shadow-xl flex flex-col">
      <strong className="text-text1 font-bold text-lg">Ticket Templates</strong>
      <div className="mt-3 w-full flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={300}>
            <Pie
              data={data}
              cx="50%"
              cy="45%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={105}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
