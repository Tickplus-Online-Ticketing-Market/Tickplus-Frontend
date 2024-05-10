import React, { useState } from 'react';

const Counter = () => {
    
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };

    const decrement = () => {
        setCount(prevCount => {
            if (prevCount > 0) {
                return prevCount - 1;
            }
            return prevCount;
        });
    };

    return (
        <div>
            <div className='flex justify-center'>
                <button onClick={decrement} className='flex items-center justify-center bg-primary bg-opacity-50 text-background h-[1.5rem] w-[2rem] rounded hover:scale-95 transition text-xl mr-1'>-</button>
                    <div className='text-secondary text-xl mr-2.5 ml-2'>{count}</div>
                <button onClick={increment} className='flex items-center justify-center bg-primary bg-opacity-50 text-background h-[1.5rem] w-[2rem] rounded hover:scale-95 transition text-xl flex items-center'>+</button>
            </div>
        </div>
    );
};

export default Counter;
