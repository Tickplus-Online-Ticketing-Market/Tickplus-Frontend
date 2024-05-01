import React, { useState } from 'react';
import CardPayments from './CardPayments';
import BankTransfers from './BankTransfers';

export default function BuyModel({ visible, onClose }) {
    const [showMyModel06, setShowMyModel06] = useState(false);
    const [showMyModel07, setShowMyModel07] = useState(false);

    const handleOnClose01 = (e) => {
        if (e.target.id === 'container') onClose();
    };

    if (!visible) return null;

    const handleCardPaymentsClick = () => {
        setShowMyModel06(true);
        setShowMyModel07(false); // Close Bank Transfers modal
    };

    const handleBankTransfersClick = () => {
        setShowMyModel07(true);
        setShowMyModel06(false); // Close Card Payments modal
    };

    return (
        <div
            id='container'
            onClick={handleOnClose01}
            className='fixed inset-0 bg-text bg-opacity-50 backdrop-blur-sm
            flex justify-center items-center'>

            <div className='bg-background bg-opacity-100 h-[35rem] w-[50rem] rounded-xl flex justify-between items-center'>
                <div className='bg-accent rounded-xl h-[35rem] w-[25rem]'>
                    <img src="./images/tick+1.png" alt=""/>
                </div> 

                <div>
                    <span className='flex justify-center pr-[5rem] mb-10 text-accent text-2xl'>Select Payment Method</span>
                    <div className='flex justify-center pr-[5rem]'>
                        <button type="button" onClick={handleCardPaymentsClick} className="bg-primary text-background h-[3rem] w-[15rem] rounded hover:scale-95 transition text-xl mb-5">Card Payments</button> 
                    </div>

                    <div className='flex justify-center pr-[5rem]'>
                        <button type="button" onClick={handleBankTransfersClick} className="bg-primary text-background h-[3rem] w-[15rem] rounded hover:scale-95 transition text-xl">Bank Transfers</button>
                    </div>                    
                </div>
            </div>

            {showMyModel06 && <CardPayments onClose={() => setShowMyModel06(false)} visible={true} />}
            {showMyModel07 && <BankTransfers onClose={() => setShowMyModel07(false)} visible={true} />}
        </div>
    );
}
