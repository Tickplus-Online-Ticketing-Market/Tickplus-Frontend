import React from 'react';
export default function ApplyRefund({ visible, onClose }) {

    const handleOnClose08 = (e) => {
        if(e.target.id === 'container')
        onClose();
    };

    if (!visible) return null;

    return (
        <div
            id='container'
            onClick={handleOnClose08} 
            className='fixed inset-0 bg-text bg-opacity-50 backdrop-blur-sm
            flex justify-center items-center'>

            <div className='bg-background bg-opacity-100 h-[35rem] w-[50rem] rounded-xl flex justify-between items-center'>
                <div className='bg-accent rounded-xl h-[35rem] w-[25rem] '>
                <img src="./images/tick+1.png" alt=""/>
                </div> 
                <div>
                    <span className='flex justify-center pr-[2.5rem] mb-5 text-accent text-xl'>Make Refund Request</span>
                    <div className='flex justify-center pr-[2.5rem]'>
                        <input 
                            type="text" 
                            placeholder='Reason' 
                            className='text-xl text-text focus:outline-none active:outlines-none h-10 w-[20rem] border-2 border-primary rounded-lg pl-5 mb-5'
                        />
                    </div>

                    <div className='flex justify-center pr-[2.5rem]'>
                        <input 
                            type="text" 
                            placeholder='Additional Note' 
                            className='text-xl text-text focus:outline-none active:outlines-none h-10 w-[20rem] border-2 border-primary rounded-lg pl-5 mb-5'
                        />
                    </div>


                    <div className='mt-5 w-[20rem] flex justify-center'>
                    <button type="button"  className="bg-primary text-background h-[3rem] w-[10rem] rounded hover:scale-95 transition text-xl mr-1">Send</button>
                    </div>
                    

                </div>
                                                               
                
            </div>
            

        </div>
    );
}