import React from 'react';

export default function RejectRefund({ visible, onClose }) {

    const handleOnClose14 = (e) => {
        if(e.target.id === 'container')
        onClose();
    };

    if (!visible) return null;

    return (
        <div
            id='container'
            onClick={handleOnClose14} 
            className='fixed inset-0 bg-text bg-opacity-50 backdrop-blur-sm
            flex justify-center items-center'>

            <div className='bg-background bg-opacity-100 p-2 rounded'>
            
            <div className='text-accent flex justify-center mt-10'>Are you sure?</div>
                <div className='h-[15rem] w-[20rem] px-4 flex justify-between items-center'>
                    
                    
                    <div className='ml-5'>
                    <button type="button" class="bg-accent text-background h-[3rem] w-[15rem] rounded hover:scale-95 transition text-xl mr-5">Yes</button>
                    <button type="button" class="bg-primary text-background h-[3rem] w-[15rem] rounded hover:scale-95 transition text-xl mt-5">No</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
