import React, { useState } from 'react';
import { HiOutlineSearch} from 'react-icons/hi';
import { IoTicketSharp } from "react-icons/io5";
import ViewPayments from './models/ViewPayments';
import PaymentUpdate from './models/PaymentUpdate';
import ApplyRefund from './models/ApplyRefund';

export default function MyTransactions() {

const[showMyModel03, setShowMyModel03] = useState(false)
const handleOnClose03 = ()=>setShowMyModel03(false)

const[showMyModel04, setShowMyModel04] = useState(false)
const handleOnClose04 = ()=>setShowMyModel04(false)

const[showMyModel08, setShowMyModel08] = useState(false)
const handleOnClose08 = ()=>setShowMyModel08(false)

  return (
<div className='font-Poppins'>
  <div >
      <div className='bg-background h-[8rem] px-4 flex justify-between items-center'>
          <div className='flex items-center'>
            <div className='text-primary text-4xl px-3'><IoTicketSharp/></div>
            <div className='text-primary text-4xl '>My Tickets</div>
          </div>

      <div className='relative'>
        <HiOutlineSearch fontSize={20} className='text-primary absolute top-1/2 -translate-y-1/2 left-3'/>
        <input 
          type="text" 
          placeholder='Search Tickets... ' 
          className='text-xl text-text focus:outline-none active:outlines-none h-10 w-[24rem] border-2 border-primary rounded-lg pl-10 pr-4'
        />
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
                  Transaction ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Payment Method 
                </th>
                <th scope="col" className="px-6 py-3">
                  Status
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
                  <button type="button" onClick={()=>setShowMyModel03(true)} class="bg-primary text-background h-[3rem] w-[10rem] rounded hover:scale-95 transition text-xl mr-1">View Details</button>
                  <button type="button" onClick={()=>setShowMyModel04(true)} class="bg-accent text-background h-[3rem] w-[5rem] rounded hover:scale-95 transition text-xl ml-1 mr-1">Update</button>
                  <button type="button" onClick={()=>setShowMyModel08(true)} class="bg-accent text-text h-[3rem] w-[10rem] rounded hover:scale-95 transition text-xl ml-1">Apply Refund</button>
                </td>
              </tr>              
            </tbody>
          </table>
        </div>
      </div>
    
  </div>
  <ViewPayments onClose={handleOnClose03} visible={showMyModel03}/>
  <PaymentUpdate onClose={handleOnClose04} visible={showMyModel04}/>
  <ApplyRefund onClose={handleOnClose08} visible={showMyModel08}/>
</div>
  )
}
