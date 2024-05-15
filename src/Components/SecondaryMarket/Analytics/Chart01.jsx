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
    <div className=" overflow-hidden">
      <div className="text-gray-700 m-4 font-bold w-[800px]">
        Impressive Performance Analytics of Tick+ Secondary Auction Market
      </div>
      <div className="h-[22rem] bg-[#eeeeee] rounded-2xl flex flex-col">
        <div className="w-full flex-1 text-xs p-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={800}
              height={200}
              data={data}
              margin={{
                top: 20,
                right: 10,
                left: 10,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3 0 0" vertical={false} />
              <XAxis dataKey="ticketId" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="startingPrice" fill="#122128" />
              <Bar dataKey="winningBid" fill="#ff7637" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
