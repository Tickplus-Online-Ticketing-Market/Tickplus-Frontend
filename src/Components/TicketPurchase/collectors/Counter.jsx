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
            <div>{count}</div>
            <div>
                <button onClick={decrement} className='bg-primary bg-opacity-50 text-background h-[2rem] w-[2rem] rounded hover:scale-95 transition text-xl mr-1'>-</button>
                <button onClick={increment} className='bg-primary bg-opacity-50 text-background h-[2rem] w-[2rem] rounded hover:scale-95 transition text-xl mr-1'>+</button>
            </div>
        </div>
    );
};

export default Counter;
