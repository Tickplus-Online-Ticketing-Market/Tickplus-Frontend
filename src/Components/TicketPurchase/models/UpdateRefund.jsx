import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function UpdateRefund({ visible, onClose, refundId }) {
    const [formData, setFormData] = useState({
        event: '',
        tCode: '',
        email: '',
        mobile: '',
        reason: '',
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleUpdateRefund = async () => {
        console.log("Refund ID : ",refundId)
        try {
            const response = await axios.put(`http://localhost:3030/tpp/refs/${refundId}`, formData);
            if (response.status === 200) {
                alert('Refund updated successfully!');
                onClose(); // Close the modal after successful update
            }
        } catch (error) {
            console.error('Error updating refund:', error);
            alert('Failed to update refund. Please try again later.');
        }
    };

    const handleOnClose = (e) => {
        if (e.target.id === 'container') {
            onClose();
        }
    };

    useEffect(() => {
        const fetchRefundData = async () => {
            try {
                const response = await axios.get(`http://localhost:3030/tpp/refs/${refundId}`);
                if (response.status === 200) {
                    const refundData = response.data;
                    setFormData(refundData);
                }
            } catch (error) {
                console.error('Error fetching refund data:', error);
            }
        };

        if (visible && refundId) {
            fetchRefundData();
        }
    }, [visible, refundId]);

    if (!visible) return null;

    return (
        <div
            id='container'
            onClick={handleOnClose}
            className='fixed inset-0 bg-text bg-opacity-50 backdrop-blur-sm flex justify-center items-center'
        >
            <div className='bg-background bg-opacity-100 h-[40rem] w-[60rem] rounded-xl flex justify-between items-center'>
                <div className='bg-accent rounded-xl h-[40rem] w-[35rem] '>
                    <img src="./images/tick+1.png" alt="" />
                </div>
                <div>
                    <span className='flex justify-center pr-[2.5rem] mb-2 text-accent text-xl font-bold'>Update Refund Request</span>
                    <p className='flex justify-center pr-[2.5rem] text-primary text-xl font-bold'>Terms & Conditions apply!</p>
                    <p className='flex justify-center pr-[2.5rem] text-primary text-base'>Only 75% of the value will be refunded.</p>
                    <p className='flex justify-center pr-[2.5rem] text-primary text-base'>Request should made before one week on event date.</p>
                    <span className='flex justify-center pr-[2.5rem] text-primary text-base'>Organizers will Contact via updated contact details.</span>
                    <span className='flex justify-center pr-[2.5rem] mb-5 text-primary text-base font-bold'></span>
                    <div className='flex justify-center pr-[2.5rem]'>
                        <input
                            type="text"
                            placeholder="Event Name/Ticket Code"
                            className='text-xl text-text focus:outline-none active:outlines-none h-10 w-[20rem] border-2 border-accent rounded-lg pl-5 mb-5'
                            name="event"
                            value={formData.event} // Display existing data
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className='flex justify-center pr-[2.5rem]'>
                        <input
                            type="text"
                            placeholder="Customer name"
                            className='text-xl text-text focus:outline-none active:outlines-none h-10 w-[20rem] border-2 border-accent rounded-lg pl-5 mb-5'
                            name="tCode"
                            value={formData.tCode} // Display existing data
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className='flex justify-center pr-[2.5rem]'>
                        <input
                            type="email"
                            placeholder="Contact E-mail"
                            className='text-xl text-text focus:outline-none active:outlines-none h-10 w-[20rem] border-2 border-accent rounded-lg pl-5 mb-5'
                            name="email"
                            value={formData.email} // Display existing data
                            onChange={handleInputChange}
                            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                            required
                        />
                    </div>
                    <div className='flex justify-center pr-[2.5rem]'>
                        <input
                            type="text"
                            placeholder="Contact Number"
                            className='text-xl text-text focus:outline-none active:outlines-none h-10 w-[20rem] border-2 border-accent rounded-lg pl-5 mb-5'
                            name="mobile"
                            value={formData.mobile} // Display existing data
                            onChange={handleInputChange}
                            pattern="[0-9]{10}"
                            required
                        />
                    </div>
                    <div className='flex justify-center pr-[2.5rem]'>
                        <input
                            type="text"
                            placeholder="Reason/Add Note"
                            className='text-xl text-text focus:outline-none active:outlines-none h-10 w-[20rem] border-2 border-accent rounded-lg pl-5 mb-5'
                            name="reason"
                            value={formData.reason} // Display existing data
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className='mt-5 w-[20rem] flex justify-center'>
                        <button type="button" onClick={handleUpdateRefund} className="bg-primary text-background h-[3rem] w-[10rem] rounded hover:scale-95 transition text-xl mr-1">Send Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
