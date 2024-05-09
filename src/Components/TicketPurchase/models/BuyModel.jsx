import React from 'react';

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

            <div className='bg-background bg-opacity-100 h-[35rem] w-[50rem] rounded-xl flex justify-between items-center'>
                <div className='bg-accent rounded-xl h-[35rem] w-[25rem]'>
                    <img src="./images/tick+1.png" alt=""/>
                </div> 

                
            </div>

            
        </div>
    );
}
