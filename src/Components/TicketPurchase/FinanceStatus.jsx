// FinanceStatus.jsx
import React, { useState, useEffect } from 'react';
import Grid from './status/Grid';
import axios from 'axios';

export default function FinanceStatus() {
  const [loading, setLoading] = useState(true);
  const [refundRequests, setRefundRequests] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3030/tpp/refs');
        setRefundRequests(response.data.refunds);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching refund requests:', error);
        setLoading(false);
      }
    };

    fetchData();

    // Cleanup function
    return () => {
      // Any cleanup needed can go here
    };
  }, []);

  return (
    <div className=''>
      <div style={{ transform: loading ? 'translateY(100%)' : 'translateY(0)', transition: 'transform 0.5s ease-in-out' }}>
        <div className='relative'>

            <div>
              <Grid />
            </div>
          
            <span className='text-3xl bg-background text-primary flex justify-center mt-[5rem] mb-[2rem] font-bold'>Refund Requests</span>
            <div className="bg-accent relative overflow-x-auto shadow-md sm:rounded-lg px-5 py-5">
              <table className="w-full text-xl text-center rtl:text-right text-primary dark:text-primary">
                <thead className="text-xl text-primary uppercase bg-accent dark:text-white">
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
                    <tr className="bg-text" key={index}>
                      <th scope="row" className="px-6 py-4 font-xl text-background">
                        {request.event}
                      </th>
                      <td className="px-6 py-3 text-background">
                        {request.tCode}
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
                  ))}
                </tbody>
              </table>
            </div>
              
        </div>
      </div>
    </div>
  );
}
