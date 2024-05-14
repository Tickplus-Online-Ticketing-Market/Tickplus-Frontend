import React, { useEffect, useState } from "react";
import axios from "axios";

const Ticketphistory = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3030/ticket-launching/ticketfoam/published"
        );
        setEvents(res.data.ticketfoam.reverse());
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="p-2 bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold text-primary mb-4">
        Your Ticket History is here...
      </h1>
      <div className="h-10">
        {events.length > 0 ? (
          events.map((record, index) => (
            <div
              key={index}
              className="bg-box4 p-4 rounded-lg flex items-center justify-between mb-3"
            >
              <span className="text-background font-bold mr-3">
                {index + 1}.
              </span>
              <span className="text-background text-base flex justify-center">
                {record.eventname}
              </span>
              <span className="text-background text-base flex items-center">
                {record.created_at}
              </span>
              <span className="text-background text-base">
                {record.ticketStatus}
              </span>
            </div>
          ))
        ) : (
          <p className="text-background">No history available</p>
        )}
      </div>
    </div>
  );
};

export default Ticketphistory;
