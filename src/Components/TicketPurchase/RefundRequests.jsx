import React, { useState, useEffect } from 'react';
import { HiReceiptRefund } from "react-icons/hi2";
import UpdateRefund from './models/UpdateRefund';
import { ImBin } from "react-icons/im";
import { FaPencil } from "react-icons/fa6";

export default function RefundRequests() {
    const [selectedRefundId, setSelectedRefundId] = useState(null);
    const [showMyModel25, setShowMyModel25] = useState(false);
    const [refunds, setRefunds] = useState([]);
    const [loading, setLoading] = useState(true); 

    const handleOnClose25 = () => setShowMyModel25(false);

    useEffect(() => {
        fetchRefunds();
    }, []);

    const fetchRefunds = async () => {
        try {
            const response = await fetch('https://tickplus-backend.onrender.com/tpp/refs');
            if (response.ok) {
                const data = await response.json();
                setRefunds(data.refunds);
                setLoading(false); 
            } else {
                throw new Error('error');
            }
        } catch (error) {
            console.error(error);
            setLoading(false); 
        }
    };

    const deleteRefund = async (id) => {
        try {
            // Ask for confirmation before deleting
            const confirmDelete = window.confirm('Are you sure you want to delete this refund?');
            
            if (confirmDelete) {
                const response = await fetch(`https://tickplus-backend.onrender.com/tpp/refs/${id}`, {
                    method: 'DELETE',
                });
                if (response.ok) {
                    fetchRefunds(); // Fetch again to update
                } else {
                    throw new Error('error');
                }
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleUpdateRefund = (refundId) => {
        setSelectedRefundId(refundId); // Read in Update
        setShowMyModel25(true); 
    };

    return (
        <div>
            <div>
                <div className={`bg-background h-[8rem] px-4 flex justify-between items-center`} style={{ transition: 'transform 1s ease', transform: loading ? 'translateY(100%)' : 'translateY(0)' }}>
                    <div className='flex items-center'>
                        <div className='text-text text-4xl px-3'><HiReceiptRefund/></div>
                        <div className='text-text text-4xl font-bold'>Refund Requests</div>
                    </div>
                </div>

                <div className='bg-text px-1 py-1 rounded-lg md-2' style={{ transition: 'transform 1.5s ease', transform: loading ? 'translateY(100%)' : 'translateY(0)' }}>
                    <div className="bg-text relative overflow-x-auto shadow-md sm:rounded-lg px-5 py-5">
                        <table className="w-full text-xl text-center rtl:text-right">
                            <thead className="text-xl uppercase bg-text">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-primary">
                                        Customer name
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-background">
                                        Event Name
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-primary">
                                        Contact E-mail 
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-background">
                                        Contact Number
                                    </th>
                                    <th scope="col" className="px-6 py-3 text-primary">
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
                                            <td className="px-6 py-4 text-primary">{refund.customerName}</td>
                                            <td className="px-6 py-4 text-background">{refund.eventname}</td>
                                            <td className="px-6 py-4 text-primary">{refund.email}</td>
                                            <td className="px-6 py-4 text-background">{refund.mobile}</td>
                                            <td className="px-6 py-4 text-primary">{refund.reason}</td>
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
            <UpdateRefund refundId={selectedRefundId} onClose={handleOnClose25} visible={showMyModel25} refunds={refunds} setRefunds={setRefunds} />
        </div>
    );
}
