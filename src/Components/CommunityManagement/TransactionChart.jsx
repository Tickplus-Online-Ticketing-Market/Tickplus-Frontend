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
  { name: "Jan", Posts: 40, Reacts: 240 },
  { name: "Feb", Posts: 30, Reacts: 138 },
  { name: "Mar", Posts: 20, Reacts: 980 },
  { name: "Apr", Posts: 27, Reacts: 398 },
  { name: "May", Posts: 18, Reacts: 480 },
  { name: "Jun", Posts: 23, Reacts: 380 },
  { name: "Jul", Posts: 34, Reacts: 430 },
  { name: "Aug", Posts: 20, Reacts: 980 },
  { name: "Sep", Posts: 20, Reacts: 398 },
  { name: "Oct", Posts: 18, Reacts: 480 },
  { name: "Nov", Posts: 23, Reacts: 380 },
  { name: "Dec", Posts: 30, Reacts: 430 },
];

export default function TransactionChart() {
  return (
    <div className="h-[22rem] bg-background p-4 rounded-sm border border-primary flex flex-col flex-1">
      <strong className="text-text fontWeight-medium">Transactions</strong>
      <div className="mt-3 w-full flex-1 text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{ top: 20, right: 10, left: -10, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Posts" fill="#0ea5e9" />
            <Bar dataKey="Reacts" fill="#ea580c" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
