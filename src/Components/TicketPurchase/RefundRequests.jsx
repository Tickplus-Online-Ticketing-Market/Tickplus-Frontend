import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HiReceiptRefund } from "react-icons/hi2";
import RefundDelete from './models/RefundDelete';
import ViewRR from './models/ViewRR';

export default function RefundRequests() {

  const [showMyModel08, setShowMyModel08] = useState(false)
  const handleOnClose08 = () => setShowMyModel08(false)

  const [showMyModel05, setShowMyModel05] = useState(false)
  const handleOnClose05 = () => setShowMyModel05(false)

  // Fetch Refund Requests
  const [refs, setRefunds] = useState(null);

  useEffect(() => {
    fetchRefunds();
  },[]);

  // Function to fetch Refund Requests
  const fetchRefunds = async() => {
    // Fetch Refund Requests
    const res = await axios.get("http://localhost:3020/ref/refs");
    // Set Refund Requests
    setRefunds(res.data.refs);
  }

  return (
    <div>
      <div >
        <div className='bg-background h-[8rem] px-4 flex justify-between items-center'>
          <div className='flex items-center'>
            <div className='text-primary text-4xl px-3'><HiReceiptRefund/></div>
            <div className='text-primary text-4xl '>Refund Requests</div>
          </div>
        </div>

        <div className='bg-accent px-1 py-1 rounded-lg md-2'>
          <div className="bg-accent relative overflow-x-auto shadow-md sm:rounded-lg px-5 py-5">
            <table className="w-full text-xl text-center rtl:text-right text-primary dark:text-primary">
              <thead className="text-xl text-primary uppercase bg-accent dark:text-white">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Transaction ID
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Time/Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Reason
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Additional Note
                  </th>
                  <th scope="col" className="px-6 py-3">
           
                  </th>
                </tr>
              </thead>
              <tbody>
                {refs && refs.map((ref)=> {
                  return (
                    <tr className="bg-text" key={ref.transactionId}>
                      <td className="px-6 py-3 text-background">{ref.transactionId}</td>
                      <td className="px-6 py-3 text-background">{ref.date}</td>
                      <td className="px-6 py-4 text-background">{ref.reason}</td>
                      <td className="px-6 py-4 text-background">{ref.additionalNote}</td>
                      <td className="px-6 py-4 text-primary items-center">
                        <button type="button" onClick={() => setShowMyModel08(true)} className="bg-accent text-background px-3 py-2 rounded hover:scale-95 transition text-xl mr-1">View</button>
                        <button type="button" onClick={() => setShowMyModel05(true)} className="bg-primary text-background px-3 py-2 rounded hover:scale-95 transition text-xl">Delete</button>
                      </td>
                    </tr>
                  );
                })}
                <div className="px-2 py-2 bg-accent"></div>        
              </tbody>
            </table>
          </div>
        </div>  
      </div>
      <ViewRR onClose={handleOnClose08} visible={showMyModel08}/>
      <RefundDelete onClose={handleOnClose05} visible={showMyModel05}/>
    </div>
  )
}
