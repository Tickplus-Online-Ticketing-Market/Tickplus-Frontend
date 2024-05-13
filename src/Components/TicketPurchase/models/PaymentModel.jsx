import React, { useState, useEffect } from 'react';

export default function WishlistBuy({ visible, onClose, selectedItem }) {
    const [count, setCount] = useState(0);
    const [totalCost, setTotalCost] = useState(0);

    const handleOnClose02 = (e) => {
        if (e.target.id === 'container') {     
            onClose();
            setCount(0);
        }
    };

    //Cal Total Cost
    useEffect(() => {
        if (selectedItem !== null) {
            setTotalCost(selectedItem.unitPrice * count);
        } else {
            console.log("No item data");
        }
    }, [count, selectedItem]); 

    if (!visible || !selectedItem) return null;
    
    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };
    
    const decrement = () => {
        setCount(prevCount => {
            if (prevCount > 1) {
                return prevCount - 1;
            }
            return prevCount;
        });
    };

    //Payment Functions and Validations
    
    return (
        <div
            id='container'
            onClick={handleOnClose02}
            className='fixed inset-0 bg-text bg-opacity-50 backdrop-blur-sm flex justify-center items-center'>

            <div className='bg-background h-[30rem] w-[50rem] rounded-xl flex justify-between items-center'>
                {/*Data read from Mother Component*/}
                <div className='bg-accent rounded-xl h-[30rem] w-[50%]'>
                    <div className='mt-[2rem] mr-[2rem] ml-[2rem] mb-[2rem]'>
                        <img src="./images/tick+1.png" alt=""/>
                    </div>
                    <div className='font-bold mt-[5rem] mr-[2rem] ml-[2rem] flex flex-col h-full'>
                        <div className="flex text-secondary items-center mb-2 text-sm">
                            <p>Event ID - {selectedItem.eventId}</p>
                        </div>
                        <div className="flex text-secondary items-center mb-2 text-2xl">
                            <p>{selectedItem.eventName}</p>
                        </div>
                        <div className="flex text-primary items-center mb-2 text-2xl">
                            <p>{selectedItem.unitPrice} LKR</p>
                        </div>
                        <div className="flex text-primary justify-center mb-2 text-2xl">
                            <p>Quantity
                            <div>
                                <div className='flex justify-center'>
                                    <button onClick={decrement} className='flex items-center justify-center bg-primary bg-opacity-50 text-background h-[1.5rem] w-[2rem] rounded hover:scale-95 transition text-xl mr-1'>-</button>
                                        <div className='text-secondary text-xl mr-2.5 ml-2'>{count}</div>
                                    <button onClick={increment} className='flex items-center justify-center bg-primary bg-opacity-50 text-background h-[1.5rem] w-[2rem] rounded hover:scale-95 transition text-xl flex items-center'>+</button>
                                </div>
                            </div>
                            </p>
                        </div>
                    </div>
                </div> 
                
                <div className='bg-background rounded-xl h-[30rem] w-[50%]'>
                    <p className="text-accent font-bold text-base flex flex-col justify-center items-center mt-10">Total cost</p>
                    <p className="text-primary font-bold text-2xl flex flex-col justify-center items-center">{totalCost} LKR</p>
                </div> 

                {/*Payment Gateway*/} 
                <div>
                    

                </div>  
            </div>  
        </div>
    );
}
