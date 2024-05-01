import React from 'react';

export default function ViewBTC({ visible, onClose }) {

    const handleOnClose10 = (e) => {
        if(e.target.id === 'container')
        onClose();
    };

    if (!visible) return null;

    return (
        <div
            id='container'
            onClick={handleOnClose10} 
            className='fixed inset-0 bg-text bg-opacity-50 backdrop-blur-sm
            flex justify-center items-center'>

            <div className='bg-background bg-opacity-100 h-[35rem] w-[50rem] rounded-xl flex justify-between items-center'>
                <div className='bg-accent rounded-xl h-[35rem] w-[25rem] '>
                <img src="./images/tick+1.png" alt=""/>
    
                </div> 

                <div>
                    <span className='flex justify-center pr-[7.5rem] mb-5 text-accent text-xl'>View Payment Details</span>
                    <div className='flex justify-center pr-[9.5rem]'>
                        <p>Retrieve in here</p>
                    </div>

                    <div className='flex justify-center pr-[2.5rem]'>
                        
                    </div>

                    <div className='flex justify-center pr-[2.5rem]'>
                        
                    </div>

                    <div className='flex justify-center pr-[2.5rem]'>
                                           
                    </div>

                </div>
                                                               
                
            </div>
            
        </div>
    );
}

