import React from 'react';
import Gateway from '../collectors/Gateway';



export default function CardPayments({ visible, onClose }) {

    const handleOnClose06 = (e) => {
        if(e.target.id === 'container')
        onClose();
    };

    if (!visible) return null;

    

    return (
        <div
            id='container'
            onClick={handleOnClose06} 
            className='fixed inset-0 bg-text bg-opacity-0 backdrop-blur-sm
            flex justify-center items-center'>

<div className='bg-background bg-opacity-100 h-[35rem] w-[50rem] rounded-xl flex justify-between items-center'>
                <div className='bg-accent rounded-xl h-[35rem] w-[25rem] '>
                <img src="./images/tick+1.png" alt=""/>
                </div> 
                <div>
                    <Gateway/>  
                </div>  
            </div>
        </div>
    );
}