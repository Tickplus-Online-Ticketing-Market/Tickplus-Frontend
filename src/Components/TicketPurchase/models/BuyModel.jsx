import React from 'react';
import Counter from '../collectors/Counter';

export default function BuyModel({ visible, onClose }) {

    const handleOnClose01 = (e) => {
        if (e.target.id === 'container') onClose();
    };

    if(!visible) return null;

    return (
        <div
            id='container'
            onClick={handleOnClose01}
            className='fixed inset-0 bg-text bg-opacity-50 backdrop-blur-sm
            flex justify-center items-center'>

            <div className='bg-background h-[30rem] w-[50rem] rounded-xl flex justify-between items-center'>
                {/*Calculation*/}
                <div className='bg-accent rounded-xl h-[30rem] w-[50%]'>
                    <div className='mt-[2rem] mr-[2rem] ml-[2rem] mb-[2rem]'>
                        <img src="./images/tick+1.png" alt=""/>
                    </div>
                    <div className='font-bold mt-[5rem] mr-[2rem] ml-[2rem] flex flex-col h-full'>
                        <div className="flex text-secondary items-center mb-2 text-sm">
                            <p>Event ID - </p>
                        </div>
                        <div className="flex text-secondary items-center mb-2 text-2xl">
                            <p>Event Name</p>
                        </div>
                        <div className="flex text-primary items-center mb-2 text-2xl">
                            <p>10000 LKR</p>
                        </div>
                        <div className="flex text-primary justify-center mb-2 text-2xl">
                            <p>Quantity <Counter/></p>
                        </div>
                    </div>
                </div> 
                <div className='bg-background rounded-xl h-[30rem] w-[50%]'>
                    <p className="text-accent font-bold text-base flex flex-col justify-center items-center mt-10">Total cost</p>
                    <p className="text-primary font-bold text-2xl flex flex-col justify-center items-center">50000 LKR</p>
                </div>    
            </div>

            
        </div>
    );
}
