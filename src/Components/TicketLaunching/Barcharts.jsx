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

const data = [
  {
    name: "Event 01",
    Normal: 270,
    VIP: 100,
  },
  {
    name: "Event 02",
    Normal: 330,
    VIP: 139,
  },
  {
    name: "Event 03",
    Normal: 420,
    VIP: 50,
  },
  {
    name: "Event 04",
    Normal: 300,
    VIP: 160,
  },
  {
    name: "Event 05",
    Normal: 280,
    VIP: 102,
  },
];

export default function Barcharts() {
  return (
    <div className="h-[22rem] bg-background p-4 rounded-lg  shadow-xl flex flex-col flex-1">
      <strong className="text-text1 font-bold text-lg">Launched Tickets</strong>
      <div className="mt-3 w-full flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 20,
              right: 10,
              left: -10,
              bottom: 0,
            }}
          >
            <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Normal" fill="#0ea5e9" />
            <Bar dataKey="VIP" fill="#ea580c" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
