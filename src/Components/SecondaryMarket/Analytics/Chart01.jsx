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
    name: "TIK1458369",
    Market: 270,
    Sold: 550,
  },
  {
    name: "TIK7894526",
    Market: 100,
    Sold: 80,
  },
  {
    name: "TIK7895541",
    Market: 270,
    Sold: 350,
  },
  {
    name: "TIK1458369",
    Market: 450,
    Sold: 580,
  },
  {
    name: "TIK1458369",
    Market: 899,
    Sold: 640,
  },
  {
    name: "TIK1458369",
    Market: 466,
    Sold: 550,
  },
  {
    name: "TIK1458369",
    Market: 270,
    Sold: 795,
  },
  {
    name: "TIK1458369",
    Market: 270,
    Sold: 456,
  },
];

export default function Barcharts({ data }) {
  return (
    <div className=" overflow-hidden">
      <div className="text-gray-700 m-4 font-bold w-[800px]">
        Our Secondary Market Auction Gave More Value to Our Customers
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
