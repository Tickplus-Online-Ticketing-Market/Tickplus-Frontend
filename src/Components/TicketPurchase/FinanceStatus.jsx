import React, { useState, useEffect } from 'react';
import Grid from './status/Grid';



export default function FinanceStatus() {
const [loading, setLoading] = useState(true);
useEffect(() => {
    
  const timer = setTimeout(() => {
    setLoading(false);
  }, 1000);
  
  return () => clearTimeout(timer);
  }, []);

  return (
    <div className=''>
    <div style={{ transform: loading ? 'translateY(100%)' : 'translateY(0)', transition: 'transform 0.5s ease-in-out' }}>
      <div className='relative'>
      <div className=''>
        <span className='text-3xl bg-background text-primary flex justify-center mt-[2rem] mb-[2rem] rounded-lg'>Bank Transfers Confirmations</span>
        <div className="bg-accent relative overflow-x-auto shadow-md sm:rounded-lg px-5 py-5 mb-10">
          <table className="w-full text-xl text-center rtl:text-right text-primary dark:text-primary">
            <thead className="text-xl text-primary uppercase bg-accent dark:text-white">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Event ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Transaction ID
                </th>
                
              </tr>
            </thead>
            <tbody>
              <tr className="bg-text">
                <th scope="row" className="px-6 py-4 font-xl text-background">
                  HK458452
                </th>
                <td className="px-6 py-3 text-background">
                  TID5685
                </td>
                <td className="px-6 py-4 text-primary items-center">
                  <button type="button"  className='bg-primary text-background h-[3rem] w-[5rem] rounded hover:scale-95 transition text-xl mr-1'>View Slip</button>
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>

      {/*Table 02 */}
        <span className='text-3xl bg-background text-primary flex justify-center mt-[5rem] mb-[2rem]'>Refund Requests</span>
        <div className="bg-accent relative overflow-x-auto shadow-md sm:rounded-lg px-5 py-5">
          <table className="w-full text-xl text-center rtl:text-right text-primary dark:text-primary">
            <thead className="text-xl text-primary uppercase bg-accent dark:text-white">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Event Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Ticket Code
                </th>
                <th scope="col" className="px-6 py-3">
                  Contact e-mail
                </th>
                <th scope="col" className="px-6 py-3">
                  Reason
                </th>
                <th scope="col" className="px-6 py-3">
                  Additional Note
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-text">
                <th scope="row" className="px-6 py-4 font-xl text-background">
                  123456
                </th>
                <td className="px-6 py-3 text-background">
                  5555-5555
                </td>
                <td className="px-6 py-4 text-background">
                  Emergency Absence
                </td>
                <td className="px-6 py-4 text-background">
                  10000LKR
                </td>
                <td className="px-6 py-4 text-primary items-center">
                  
                  
                </td>
              </tr>
              
            </tbody>
          </table>
        </div>
      </div>
      <Grid />
      </div>
    </div>
    
  </div>
  );
}
