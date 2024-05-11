import React, { useState } from 'react';

export default function ApplyRefund({ visible, onClose }) {
    const [formData, setFormData] = useState({
        event: '',
        tCode: '',
        email: '',
        mobile: '',
        reason: ''
    });
    const [errorMessage, setErrorMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        if (!formData.event || !formData.tCode || !formData.email) {
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
        
        fetch('http://localhost:3030/tpp/refs', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => {
            if (response.ok) {
                alert('Refund request submitted successfully!');
                onClose();
            } else {
                throw new Error('Failed to submit refund request.');
            }
        })
        .catch(error => {
            console.error('Error submitting refund request:', error);
            alert('Failed to submit refund request. Please try again later.');
        });
    };

    const handleOnClose08 = (e) => {
        if (e.target.id === 'container') onClose();
    };

    if (!visible) return null;

    return (
        <div
            id='container'
            onClick={handleOnClose08}
            className='fixed inset-0 bg-text bg-opacity-50 backdrop-blur-sm flex justify-center items-center'>
            <div className='bg-background bg-opacity-100 h-[35rem] w-[50rem] rounded-xl flex justify-between items-center'>
                <div className='bg-accent rounded-xl h-[20rem] w-[25rem] '>
                    <img src="./images/tick+1.png" alt="" />
                </div>
                <div>
                    <span className='flex justify-center pr-[2.5rem] mb-5 text-accent text-2xl font-bold'>Make Refund Request</span>
                    <span className='flex justify-center pr-[2.5rem] mb-5 text-primary text-base font-bold'>Organizing crew will contact you via E-mail!</span>
                    <div className='flex justify-center pr-[2.5rem]'>
                        <input
                            type="text"
                            name="event"
                            placeholder='Event *'
                            value={formData.event}
                            onChange={handleInputChange}
                            className='text-xl text-text focus:outline-none active:outlines-none h-10 w-[20rem] border-2 border-primary rounded-lg pl-5 mb-5'
                        />
                    </div>
                    <div className='flex justify-center pr-[2.5rem]'>
                        <input
                            type="text"
                            name="tCode"
                            placeholder='Ticket Code *'
                            value={formData.tCode}
                            onChange={handleInputChange}
                            className='text-xl text-text focus:outline-none active:outlines-none h-10 w-[20rem] border-2 border-primary rounded-lg pl-5 mb-5'
                        />
                    </div>
                    <div className='flex justify-center pr-[2.5rem]'>
                        <input
                            type="email"
                            name="email"
                            placeholder='Contact E-mail *'
                            value={formData.email}
                            onChange={handleInputChange}
                            className='text-xl text-text focus:outline-none active:outlines-none h-10 w-[20rem] border-2 border-primary rounded-lg pl-5 mb-5'
                        />
                    </div>
                    <div className='flex justify-center pr-[2.5rem]'>
                        <input
                            type="text"
                            name="mobile"
                            placeholder='Contact Number *'
                            value={formData.mobile}
                            onChange={handleInputChange}
                            className='text-xl text-text focus:outline-none active:outlines-none h-10 w-[20rem] border-2 border-primary rounded-lg pl-5 mb-5'
                        />
                    </div>
                    <div className='flex justify-center pr-[2.5rem]'>
                        <input
                            type="text"
                            name="reason"
                            placeholder='Reason/Add Note'
                            value={formData.reason}
                            onChange={handleInputChange}
                            className='text-xl text-text focus:outline-none active:outlines-none h-10 w-[20rem] border-2 border-primary rounded-lg pl-5 mb-5'
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
