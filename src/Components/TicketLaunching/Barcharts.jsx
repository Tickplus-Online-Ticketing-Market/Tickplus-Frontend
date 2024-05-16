import React, { useEffect, useState } from "react";
import axios from "axios";
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

import { TicketCount } from "./TicketCount";

export default function Barcharts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const ticketCounts = await TicketCount();
        setData(ticketCounts);
        console.log(data);
      } catch (error) {
        console.error("Error fetching ticket counts:", error);
      }
    };

    fetchData();
  }, []);
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
            <XAxis dataKey="eventname" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="vip" fill="#0ea5e9" />
            <Bar dataKey="normal" fill="#ed6c02" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
