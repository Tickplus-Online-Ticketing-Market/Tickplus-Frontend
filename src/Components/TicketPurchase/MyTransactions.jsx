import React, { useState, useEffect } from 'react';
import { IoTicketSharp } from "react-icons/io5";
import ApplyRefund from './models/ApplyRefund';

export default function MyTransactions() {
    const [transactions, setTransactions] = useState([]);
    const [selectedTransaction, setSelectedTransaction] = useState(null);
    const [showMyModel08, setShowMyModel08] = useState(false);
    const [loading, setLoading] = useState(true);
    const handleOnClose08 = () => setShowMyModel08(false);

    useEffect(() => {
        // Fetch transactions from the server
        const fetchTransactions = async () => {
            try {
                const response = await fetch('http://localhost:3030/tpp/pays');
                if (response.ok) {
                    const data = await response.json();
                    // Reverse the order of transactions
                    setTransactions(data.pays.reverse());
                    setLoading(false); // Update loading state when data is fetched
                } else {
                    console.error('Failed to fetch transactions');
                    setLoading(false); // Update loading state even if there's an error
                }
            } catch (error) {
                console.error('Error fetching transactions:', error);
                setLoading(false); // Update loading state even if there's an error
            }
        };

        fetchTransactions();
    }, []);

    const handleApplyRefund = (transaction) => {
        setSelectedTransaction(transaction);
        setShowMyModel08(true);
    };

    return (
        <div className='font-Poppins'>
            <div style={{ transition: 'transform 0.5 ease-in-out', transform: loading ? 'translateY(100%)' : 'translateY(0)' }}>
                <div className={`bg-background h-[8rem] px-4 flex justify-between items-center`}>
                    <div>
                        <div className="text-accent text-4xl px-3 flex items-center">
                            <IoTicketSharp />
                        </div>
                        <div className="text-accent text-4xl font-bold">My Tickets</div>
                    </div>
                </div>

                <div className="bg-accent font-bold relative overflow-x-auto shadow-md sm:rounded-lg px-5 py-5" style={{ transition: 'transform 1s ease-in-out', transform: loading ? 'translateY(100%)' : 'translateY(10%)' }}>
                    <table className="w-full text-xl text-center rtl:text-right text-primary">
                        <thead className="text-xl font-bold">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-background">Payment Done by</th>
                                <th scope="col" className="px-6 py-3 text-primary">Event (EventID)</th>
                                <th scope="col" className="px-6 py-3 text-background">Date/Time</th>
                                <th scope="col" className="px-6 py-3 text-primary">Quantity</th>
                                <th scope="col" className="px-6 py-3 text-background">Total Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                            {transactions.map((transaction, index) => (
                                <React.Fragment key={transaction._id}>
                                    <tr className="bg-text bg-opacity-40 sm:rounded-base pb-2 rounded" key={transaction._id}>
                                    <th scope="row" className="px-4 py-4 font-xl text-background">
                                            {transaction.customerName}
                                        </th>
                                        <th scope="row" className="px-6 py-4 font-xl text-primary">
                                            {transaction.eventName}<div className='text-sm'>({transaction.eventId})</div> 
                                        </th>
                                        <td className="px-6 py-3 text-background">
                                            <div>{transaction.date}</div>
                                            {transaction.time}h  
                                        </td>
                                        <td className="px-6 py-4 text-primary">
                                            {transaction.unitPrice} x {transaction.count}
                                        </td>
                                        <td className="px-6 py-4 text-background">
                                            {transaction.totalCost} LKR
                                        </td>
                                        <td className="px-6 py-4  items-center">
                                            <button type="button" onClick={() => handleApplyRefund(transaction)} className="bg-accent text-primary h-[3rem] w-[10rem] rounded hover:scale-95 transition text-xl ml-1">Apply Refund</button>
                                        </td>
                                    </tr>
                                    {index < transactions.length - 1 && (
                                        <tr key={`spacer-${transaction._id}`}>
                                            <td colSpan="5" className="h-4"></td>
                                        </tr>
                                    )}
                                </React.Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {selectedTransaction && <ApplyRefund onClose={handleOnClose08} visible={showMyModel08} transaction={selectedTransaction} />}
        </div>
    )
}
