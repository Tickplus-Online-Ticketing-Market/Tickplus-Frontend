import React, { useState, useEffect } from 'react';
import { HiReceiptRefund } from "react-icons/hi2";
import UpdateRefund from './models/UpdateRefund';

export default function RefundRequests() {
  const [selectedRefundId, setSelectedRefundId] = useState(null);
  const [showMyModel25, setShowMyModel25] = useState(false);
  const [refunds, setRefunds] = useState([]);

  const handleOnClose25 = () => setShowMyModel25(false);

  useEffect(() => {
    fetchRefunds();
  }, []);

  const fetchRefunds = async () => {
    try {
      const response = await fetch('http://localhost:3030/tpp/refs');
      if (response.ok) {
        const data = await response.json();
        setRefunds(data.refunds);
      } else {
        throw new Error('error');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteRefund = async (id) => {
    try {
      const response = await fetch(`http://localhost:3030/tpp/refs/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchRefunds(); // Fetch again to update
      } else {
        throw new Error('error');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateRefund = (refundId) => {
    setSelectedRefundId(refundId); // Set the selected refundId when Update Refund button is clicked
    setShowMyModel25(true); // Open the modal
  };

  return (
    <div>
      <div>
        <div className='bg-background h-[8rem] px-4 flex justify-between items-center'>
          <div className='flex items-center'>
            <div className='text-primary text-4xl px-3'><HiReceiptRefund/></div>
            <div className='text-primary text-4xl font-bold'>Refund Requests</div>
          </div>
        </div>

        <div className='bg-accent px-1 py-1 rounded-lg md-2'>
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
                    Contact E-mail 
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Contact Number
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Reason
                  </th>
                  <th scope="col" className="px-6 py-3">
           
                  </th>
                </tr>
              </thead>
              <tbody>
                {refunds.map((refund, index) => (
                  <tr key={index} className="bg-text">
                    <td className="px-6 py-3 text-background">{refund.event}</td>
                    <td className="px-6 py-3 text-background">{refund.tCode}</td>
                    <td className="px-6 py-4 text-background">{refund.email}</td>
                    <td className="px-6 py-4 text-background">{refund.mobile}</td>
                    <td className="px-6 py-4 text-background">{refund.reason}</td>
                    <td className="px-6 py-4 text-primary items-center">
                      <button type="button" onClick={() => handleUpdateRefund(refund._id) } className="bg-secondary text-accent px-3 py-2 rounded hover:scale-95 transition text-xl mr-5">Update Refund</button>
                      <button type="button" onClick={() => deleteRefund(refund._id)} className="bg-primary text-background px-3 py-2 rounded hover:scale-95 transition text-xl">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>  
      </div>
      <UpdateRefund refundId={selectedRefundId} onClose={handleOnClose25} visible={showMyModel25}/>
    </div>
  );
}
