import React, { useState, useEffect } from 'react';
import { HiReceiptRefund } from "react-icons/hi2";
import UpdateRefund from './models/UpdateRefund';
import { ImBin } from "react-icons/im";
import { FaPencil } from "react-icons/fa6";

export default function RefundRequests() {
    const [selectedRefundId, setSelectedRefundId] = useState(null);
    const [showMyModel25, setShowMyModel25] = useState(false);
    const [refunds, setRefunds] = useState([]);
    const [loading, setLoading] = useState(true); // Add loading state

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
                setLoading(false); // Update loading state after data is fetched
            } else {
                throw new Error('error');
            }
        } catch (error) {
            console.error(error);
            setLoading(false); // Update loading state in case of error
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
                <div className={`bg-background h-[8rem] px-4 flex justify-between items-center`} style={{ transition: 'transform 1s ease', transform: loading ? 'translateY(100%)' : 'translateY(0)' }}>
                    <div className='flex items-center'>
                        <div className='text-primary text-4xl px-3'><HiReceiptRefund/></div>
                        <div className='text-primary text-4xl font-bold'>Refund Requests</div>
                    </div>
                </div>

                <div className='bg-text px-1 py-1 rounded-lg md-2' style={{ transition: 'transform 2s ease', transform: loading ? 'translateY(100%)' : 'translateY(0)' }}>
                    <div className="bg-text relative overflow-x-auto shadow-md sm:rounded-lg px-5 py-5">
                        <table className="w-full text-xl text-center rtl:text-right text-primary dark:text-primary">
                            <thead className="text-xl text-primary uppercase bg-text">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Customer name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Event Name(ID)
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
                                    <React.Fragment key={index}>
                                        <tr className={`bg-accent font-bold ${index !== refunds.length - 1 && 'h-4'}`}>
                                            <td className="px-6 py-4 bg-accenttext-background">{refund.customerName}</td>
                                            <td className="px-6 py-4 text-background">{refund.eventName}({refund.eventId})</td>
                                            <td className="px-6 py-4 text-background">{refund.email}</td>
                                            <td className="px-6 py-4 text-background">{refund.mobile}</td>
                                            <td className="px-6 py-4 text-background">{refund.reason}</td>
                                            <td className="px-6 py-4 items-center">
                                                <button type="button" onClick={() => handleUpdateRefund(refund._id) } className="bg-secondary text-accent px-3 py-2 rounded hover:scale-95 transition text-xl mr-2"><FaPencil /></button>
                                                <button type="button" onClick={() => deleteRefund(refund._id)} className="bg-primary text-background px-3 py-2 rounded hover:scale-95 transition text-xl"><ImBin/></button>
                                            </td>
                                        </tr>
                                        {index !== refunds.length - 1 && <tr key={`spacer-${index}`} className="h-4"></tr>}
                                    </React.Fragment>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>  
            </div>
            <UpdateRefund refundId={selectedRefundId} onClose={handleOnClose25} visible={showMyModel25} refunds={refunds} />
        </div>
    );
}
