import React, { useState } from 'react';
import { IoTicketSharp } from "react-icons/io5";
import ApplyRefund from './models/ApplyRefund';

export default function MyTransactions() {

const[showMyModel08, setShowMyModel08] = useState(false)
const handleOnClose08 = ()=>setShowMyModel08(false)

  return (
<div className='font-Poppins'>
  <div >
      <div className='bg-background h-[8rem] px-4 flex justify-between items-center'>
          <div className='flex items-center'>
            <div className='text-primary text-4xl px-3'><IoTicketSharp/></div>
            <div className='text-primary text-4xl font-bold'>My Tickets</div>
          </div>
      </div>

    <div className='bg-accent px-1 py-1 rounded-lg md-2'>
        <div className="bg-accent relative overflow-x-auto shadow-md sm:rounded-lg px-5 py-5">
          <table className="w-full text-xl text-center rtl:text-right text-primary dark:text-primary">
            <thead className="text-xl text-primary uppercase bg-accent dark:text-white">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Event
                </th>
                <th scope="col" className="px-6 py-3">
                  Date/Time
                </th>
                <th scope="col" className="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" className="px-6 py-3">
                  Total Cost
                </th>
              </tr>
          </thead>
            <tbody>
              <tr className="bg-text">
                <th scope="row" className="px-6 py-4 font-xl text-background">
                  Event 01
                </th>
                <td className="px-6 py-3 text-background">
                  ############
                </td>
                <td className="px-6 py-4 text-background">
                  Bank Transfer
                </td>
                <td className="px-6 py-4 text-background">
                  Complete
                </td>
                <td className="px-6 py-4 text-primary items-center">
                  <button type="button" onClick={()=>setShowMyModel08(true)} class="bg-accent text-primary h-[3rem] w-[10rem] rounded hover:scale-95 transition text-xl ml-1">Apply Refund</button>
                </td>
              </tr>              
            </tbody>
          </table>
        </div>
      </div>
    
  </div>
  <ApplyRefund onClose={handleOnClose08} visible={showMyModel08}/>
</div>
  )
}
