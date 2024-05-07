import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CardPayments from './CardPayments';
import BankTransfers from './BankTransfers';

export default function BuyModel({ visible, onClose }) {
//Fetch Wishes
const [wishes, setWishes] = useState(null);

    useEffect(() => {
        fetchWishes();
        }, []);

    
    const fetchWishes = async() => {
        let res = [];
    try {
        res = await axios.get("http://localhost:3030/wl/wishes");
        setWishes(res.data.wishes);
    } catch (error) {
        console.log(error);
    }
    
  
}
    const [showMyModel06, setShowMyModel06] = useState(false);
    const [showMyModel07, setShowMyModel07] = useState(false);

    const handleOnClose01 = (e) => {
        if (e.target.id === 'container') onClose();
    };

    if (!visible) return null;

    const handleCardPaymentsClick = () => {
        setShowMyModel06(true);
        setShowMyModel07(false); 
    };

    const handleBankTransfersClick = () => {
        setShowMyModel07(true);
        setShowMyModel06(false); 
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
                    {wishes && wishes.map((wish) => {
                    return (
                    <span className='flex justify-center pr-[5rem] mb-10 text-accent text-4xl mt-10'>Total Cost - {wish.totalCost}</span> 
                    );
                    })}
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
