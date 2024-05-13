import React from 'react';
import { FaMoneyBillTrendUp } from "react-icons/fa6";


export default function Grid() {
  return (
    <div>
      <span className='text-3xl text-primary flex justify-center mt-[5rem] mb-[2rem] font-bold'>Financial Status</span>
        <div className='mt-[2rem]  flex justify-center gap-4'>
            <div className='bg-primary rounded-xl p-4 h-[8rem] w-full flex items-center'>
              <div className='text-5xl text-accent'>
                <FaMoneyBillTrendUp />
              </div>  
            </div>
            <div className='bg-secondary rounded-xl p-4 h-[8rem] w-full flex items-center'>
              <div className='text-5xl text-accent'>
                <FaMoneyBillTrendUp />
              </div>
            </div>
            <div className='bg-text rounded-xl p-4 h-[8rem] w-full flex items-center'>
              <div className='text-5xl text-accent'>
                <FaMoneyBillTrendUp />
              </div>
            </div>
        </div>
        <div>
          <span className='text-3xl text-primary flex justify-center mt-[5rem] mb-[2rem] font-bold'>Daily Ticket sells</span>
          <div className="bg-accent relative overflow-x-auto shadow-md sm:rounded-lg px-5 py-5">
              <table className="w-full text-xl text-center rtl:text-right text-primary dark:text-primary">
                <thead className="text-xl text-primary uppercase bg-accent dark:text-white">
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
                    <tr className="bg-text">
                      <th scope="row" className="px-6 py-4 font-xl text-background">
                        
                      </th>
                      <td className="px-6 py-3 text-background">
                        
                      </td>
                      <td className="px-6 py-4 text-background">
                        
                      </td>
                      <td className="px-6 py-4 text-background">
                        
                      </td>
                      
                    </tr>
                </tbody>
              </table>
            </div>
        </div>
    </div>
  );
}
