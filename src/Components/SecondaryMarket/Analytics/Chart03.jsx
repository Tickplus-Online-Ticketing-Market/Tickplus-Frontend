import React from "react";

import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const data = [
  { name: "High", value: 100 },
  { name: "Low", value: 30 },
  { name: "Market", value: 50 },
];

const RADIAN = Math.PI / 180;
const COLORS = ["#ff7637", "#122128", "#48525b", "#000"];

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

export default function Piecharts({ data }) {
  return (
    <div className=" overflow-hidden">
      <div className="text-gray-700 m-4 font-bold">Bid Status Data</div>
      <div className="w-[20rem] h-[22rem] bg-[#eeeeee] rounded-2xl flex flex-col">
        <div className="w-full flex-1 text-xs p-4">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart width={400} height={300}>
              <Pie
                data={data}
                cx="50%"
                cy="45%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={105}
                fill="#fafafa"
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
    </div>
  );
}
