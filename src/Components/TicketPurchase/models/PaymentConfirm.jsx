import React from 'react';

export default function PaymentConfirm({ visible, onClose }) {

    const handleOnClose06 = (e) => {
        if(e.target.id === 'container')
            onClose();
    };

    if (!visible) return null;

    return (
        <div
            id='container'
            onClick={handleOnClose06} 
            className='fixed inset-0 bg-text bg-opacity-50 backdrop-blur-sm
            flex justify-center items-center'>

            <div className='bg-primary p-2 rounded'>
                <p>Payment Successful</p>
            </div>
        </div>
    );
}
