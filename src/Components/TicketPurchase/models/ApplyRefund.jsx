import React, { useState } from 'react';

export default function ApplyRefund({ visible, onClose, transaction }) {
    const [formData, setFormData] = useState({
        email: '',
        mobile: '',
        reason: ''
    });
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {
        if (!formData.email || !formData.mobile) {
            setErrorMessage('Please fill in all required fields!');
            return;
        }
        if (!formData.email.includes('@')) {
            setErrorMessage('Please provide a valid email address!');
            return;
        }
        if (!/^[0-9]\d{9}$/.test(formData.mobile)) {
            setErrorMessage('Please provide a valid mobile number!');
            return;
        }

        const requestData = {
            ...transaction,
            ...formData,   
        };

        try {
            const response = await fetch('http://localhost:3030/tpp/refs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            });
            if (response.ok) {
                alert('Refund request submitted successfully!');
                setFormData({ email: '', mobile: '', reason: '' }); // Clear form fields
                onClose(); // Close the modal after successful submission
            } else {
                setErrorMessage('Failed to submit refund request. Please try again later.');
            }
        } catch (error) {
            console.error('Error submitting refund request:', error);
            setErrorMessage('Failed to submit refund request. Please try again later.');
        }
    };

    const handleOnClose08 = (e) => {
        if (e.target.id === 'container') onClose();
    };

    if (!visible || !transaction) return null;

    return (
        <div
            id='container'
            onClick={handleOnClose08}
            className='fixed inset-0 bg-text bg-opacity-50 backdrop-blur-sm flex justify-center items-center'>
            <div className='bg-background bg-opacity-100 h-[30rem] w-[60rem] rounded-xl flex justify-between items-center'>
                <div className='bg-accent rounded-xl h-[30rem] w-[35rem] '>
                    <img src="./images/tick+1.png" alt="" />
                    <div className='font-bold mt-[5rem] mr-[2rem] ml-[2rem] flex flex-col h-full'>
                        <div className="flex text-secondary items-center mb-2 text-xl">Purchase by Mr/Ms- {transaction.customerName}</div>
                        <div className="flex text-secondary items-center mb-2 text-xl">Event - {transaction.eventname}</div>
                        <div className="flex text-secondary items-center mb-2 text-xl">UnitPrice x Count - {transaction.ticketPrice} x {transaction.count}</div>
                        <div className="flex text-secondary items-center mb-2 text-xl">Total Cost - {transaction.totalCost} LKR</div>
                    </div>
                </div>
                
                <div>
                    <span className='flex justify-center pr-[2.5rem] mb-2 text-accent text-2xl font-bold'>Request a Refund</span>
                    <span className='flex justify-center pr-[2.5rem] text-primary text-xl font-bold'>Terms & Conditions apply!</span>
                    <span className='flex justify-center pr-[2.5rem] text-primary text-base'>Only <span className='font-bold'> 75%</span> of the value will be refunded.</span>
                    <span className='flex justify-center pr-[2.5rem] text-primary text-base'>Organizers will contact via provided contact details.</span>
                    <span className='flex justify-center pr-[2.5rem] text-primary text-base font-bold'>Please provide valid contact details!</span>
                    <span className='flex justify-center pr-[2.5rem] mb-5 text-primary text-base font-bold'></span>
                    <div className='flex justify-center pr-[2.5rem]'>
                        <input
                            type="email"
                            name="email"
                            placeholder='Contact E-mail *'
                            value={formData.email}
                            onChange={handleInputChange}
                            className='text-xl text-text focus:outline-none active:outlines-none h-10 w-[20rem] border-2 border-accent rounded-lg pl-5 mb-5'
                        />
                    </div>
                    <div className='flex justify-center pr-[2.5rem]'>
                        <input
                            type="text"
                            name="mobile"
                            placeholder='Contact Number *'
                            value={formData.mobile}
                            onChange={handleInputChange}
                            className='text-xl text-text focus:outline-none active:outlines-none h-10 w-[20rem] border-2 border-accent rounded-lg pl-5 mb-5'
                        />
                    </div>
                    <div className='flex justify-center pr-[2.5rem]'>
                        <input
                            type="text"
                            name="reason"
                            placeholder='Reason/Add Note'
                            value={formData.reason}
                            onChange={handleInputChange}
                            className='text-xl text-text focus:outline-none active:outlines-none h-10 w-[20rem] border-2 border-accent rounded-lg pl-5 mb-5'
                        />
                    </div>
                    <div className='mt-5 w-[20rem] flex justify-center'>
                        <button type="button" onClick={handleSubmit} className="bg-primary text-background h-[3rem] w-[10rem] rounded hover:scale-95 transition text-xl mr-1">Send</button>
                    </div>
                    {errorMessage && <p className="text-primary mt-5 text-base font-bold">{errorMessage}</p>}
                </div>
            </div>
        </div>
    );
}
