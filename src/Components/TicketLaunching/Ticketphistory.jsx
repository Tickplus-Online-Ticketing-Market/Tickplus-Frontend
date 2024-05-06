import React from 'react';

const Ticketphistory = ({ tickets }) => {
  console.log("Tickets in Ticketphistory:", tickets);

  if (!tickets || !Array.isArray(tickets) || tickets.length === 0) {
    return (
      <div>
        <h1 className="text-2xl font-bold text-boxf mb-4">Your Ticket Published History is here...</h1>
        <div className="p-4 bg-accent rounded-lg h-screen">
          <p className=' text-background'>No tickets available</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-2xl font-bold text-boxf mb-4">Your Ticket Published History is here...</h1>
      <div className="p-4 bg-accent rounded-lg h-screen">
        <div className="gap-4">
          <table className="min-w-full rounded-xl">
            <thead className='bg-box4 text-background m-6 border border-background'>
              <tr className="text-left m-6 p-6">
                <th className="px-4 py-2 font-bold text-lg">Event Name</th>
                <th className="px-4 py-2 font-bold text-lg">Status</th>
              </tr>
            </thead>

            <tbody>
              {tickets.map((ticket, index) => (
                <tr key={index} className="bg-box5">
                  <td className="px-4 py-4 m-4 text-accent">{ticket.eventname}</td>
                  <td className="px-4 py-4 text-accent">{ticket.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Ticketphistory;
