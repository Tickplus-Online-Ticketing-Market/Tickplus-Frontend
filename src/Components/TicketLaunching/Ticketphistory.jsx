import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment/moment";

const generateTicketId = () => {
  const randomDigits = Math.floor(Math.random() * 10000000); // Generate random 4-digit number
  return `TIK${randomDigits}`;
};

const Ticketphistory = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "https://tickplus-backend.onrender.com/ticket-launching/ticketfoam/published"
        );
        setEvents(res.data.ticketfoam.reverse());
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="overflow-hidden rounded-2xl border-none shadow-md m-1">
      <div className="text-3xl font-bold text-primary pl-4 pb-3">
        Your Ticket History is here...
      </div>
      <table className="w-full border-collapse bg-white text-left text-gray-500">
        <thead className="bg-accent">
          <tr>
            <th className="px-6 py-4 font-bold text-primary">No.</th>
            <th className="px-6 py-4 font-bold text-primary">Ticket ID</th>
            <th className="px-6 py-4 font-bold text-primary">Event Name</th>
            <th className="px-6 py-4 font-bold text-primary">Creation Date</th>
            <th className="px-6 py-4 font-bold text-primary">Ticket Mode</th>
            <th className="px-6 py-4 font-bold text-primary">Ticket Status</th>
          </tr>
        </thead>
        <tbody className="divide-white divide-y-4 border-t-4 border-t-white">
          {events.length > 0 ? (
            events.map((record, index) => (
              <tr key={index} className="bg-box4">
                <td className="px-6 py-4 text-background">{index + 1}.</td>
                <td className="px-6 py-4 text-background">
                  {record.ticketId || generateTicketId()}{" "}
                  {/* Use record.ticketId if available, else generate a new one */}
                </td>
                <td className="px-6 py-4 text-background">
                  {record.eventname}
                </td>
                <td className="px-6 py-4 text-background">
                  {moment(record.created_at).format("MMMM Do YYYY, h:mm:ss a")}
                </td>
                <td className="px-6 py-4 text-background">
                  {record.ticketMode}
                </td>
                <td className="px-6 py-4 text-background">
                  {record.ticketStatus}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center px-6 py-4">
                No history available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Ticketphistory;
