import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Event 01',
    Accepted: 4,
    Rejected: 10
  },
  {
    name: 'Event 02',
    Accepted: 5,
    Rejected: 13
  },
  {
	name: 'Event 03',
	Accepted: 4,
	Rejected: 16
},
{
	name: 'Event 04',
	Accepted: 4,
	Rejected: 3
}
];

export default function Barcharts() {
  return (
    <div className="h-[22rem] bg-background p-4 rounded-lg  shadow-xl flex flex-col flex-1">
      <strong className="text-text1 font-bold text-lg">Request amount</strong>
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
              bottom: 0
            }}
          >
            <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="Accepted" fill="#57666f" />
            <Bar dataKey="Rejected" fill="#ea580c" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}