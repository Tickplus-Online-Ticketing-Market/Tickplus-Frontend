import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Barcharts({ data }) {
  return (
    <div className="h-[22rem] bg-background p-4 rounded-lg shadow-xl flex flex-col flex-1">
      <strong className="text-text1 font-bold text-lg">Budget</strong>
      <div className="mt-3 w-full flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={300}
            height={300}
            data={data}
            margin={{
              top: 30,
              right: 20, // Increase the right margin to accommodate larger numbers
              left: 20,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis tickFormatter={(value) => `$${value}` + "k"} />
            <Tooltip formatter={(value) => `$${value}`} />
            <Legend />
            <Bar dataKey="budget" fill="#ff7637" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
