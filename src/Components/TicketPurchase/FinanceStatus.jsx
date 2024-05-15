// FinanceStatus.jsx

import React, { useState, useEffect } from 'react';
import Grid from './status/Grid';
import axios from 'axios';
import TransactionChart from './status/BarChart';
import ScatterChart from './status/ScatterChart';

export default function FinanceStatus() {
  const [loading, setLoading] = useState(true);
  const [refundRequests, setRefundRequests] = useState([]);
  const [ticketSells, setTicketSells] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const refundResponse = await axios.get('http://localhost:3030/tpp/refs');
        setRefundRequests(refundResponse.data.refunds);

        const ticketSellsResponse = await axios.get('http://localhost:3030/tpp/pays');
        setTicketSells(ticketSellsResponse.data.pays);

        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // Any cleanup needed can go here
    };
  }, []);

  // Calculate sum of count and totalCost for each eventId
  const calculateTicketSells = () => {
    const ticketSellMap = new Map();
    ticketSells.forEach(pay => {
      if (ticketSellMap.has(pay.eventId)) {
        const existingData = ticketSellMap.get(pay.eventId);
        existingData.count += pay.count;
        existingData.totalCost += pay.totalCost;
        ticketSellMap.set(pay.eventId, existingData);
      } else {
        ticketSellMap.set(pay.eventId, {
          eventId: pay.eventId,
          eventName: pay.eventName,
          count: pay.count,
          totalCost: pay.totalCost
        });
      }
    });
    return Array.from(ticketSellMap.values());
  };

  return (
    <div className=''>
      <div style={{ transform: loading ? 'translateY(100%)' : 'translateY(0)', transition: 'transform 1s ease-in-out' }}>
        <div className='relative'>
          <span className='text-3xl text-text flex justify-center mt-[5rem] mb-[2rem] font-bold'>Total Ticket Sells</span>
          <div>
            <Grid />
          </div>
          
          <div className="bg-accent relative overflow-x-auto shadow-md sm:rounded-lg px-5 py-5 font-bold">
            <table className="w-full text-xl text-center rtl:text-right text-primary dark:text-primary">
              <thead className="text-xl text-primary uppercase bg-accent">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Event ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Event Name
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Sold Tickets
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total income
                  </th>
                </tr>
              </thead>
              <tbody>
                {calculateTicketSells().map((sell, index) => (
                  <React.Fragment key={index}>
                    <tr className="bg-text" style={{ height: '1.5rem' }}>
                      <th scope="row" className="px-6 py-4 font-xl text-background">
                        {sell.eventId}
                      </th>
                      <td className="px-6 py-3 text-background">
                        {sell.eventName}
                      </td>
                      <td className="px-6 py-4 text-background">
                        {sell.count}
                      </td>
                      <td className="px-6 py-4 text-background">
                        {sell.totalCost} LKR
                      </td>  
                    </tr>
                    {index !== calculateTicketSells().length - 1 && <tr key={`spacer-${index}`} className="h-4"></tr>}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className=''>
          <span className='text-3xl text-text flex justify-center mt-[5rem] mb-[2rem] font-bold'>Ticket Purchasing History</span>
          <div className='flex justify-center'><ScatterChart/></div>
        </div>

        <div>
          <span className='text-3xl text-text flex justify-center mt-[5rem] mb-[2rem] font-bold'>Purchases and Refunds</span>
          <TransactionChart/>
        </div>

        <span className='text-3xl bg-background text-text flex justify-center mt-[5rem] mb-[2rem] font-bold'>Refund Requests</span>
        <div className="bg-accent relative overflow-x-auto shadow-md sm:rounded-xl px-5 py-5">
          <table className="w-full text-xl text-center rtl:text-right text-primary dark:text-primary">
            <thead className="text-xl text-primary uppercase bg-accent ">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Event / Ticket Code
                </th>
                <th scope="col" className="px-6 py-3">
                  Customer Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Contact e-mail
                </th>
                <th scope="col" className="px-6 py-3">
                  Contact Number
                </th>
                <th scope="col" className="px-6 py-3">
                  Reason
                </th>
              </tr>
            </thead>
            <tbody>
              {refundRequests.map((request, index) => (
                <React.Fragment key={index}>
                  <tr className="bg-text font-bold" style={{ height: '1.5rem' }}>
                    <th scope="row" className="px-6 py-4 font-xl text-background">
                      {request.eventName}
                      <div className='text-sm'>({request.eventId})</div>
                    </th>
                    <td className="px-6 py-3 text-background">
                      {request.customerName}
                    </td>
                    <td className="px-6 py-4 text-background">
                      {request.email}
                    </td>
                    <td className="px-6 py-4 text-background">
                      {request.mobile}
                    </td>
                    <td className="px-6 py-4 text-background items-center">
                      {request.reason}
                    </td>
                  </tr>
                  {index !== refundRequests.length - 1 && <tr key={`spacer-${index}`} className="h-4"></tr>}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>              
      </div>
    </div>
  );
}
