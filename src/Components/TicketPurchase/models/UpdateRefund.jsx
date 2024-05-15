// UpdateRefund.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function UpdateRefund({ visible, onClose, refundId, refunds, setRefunds }) {
    const [formData, setFormData] = useState({
        email: '',
        mobile: '',
        reason: '',
    });
    const [errors, setErrors] = useState({
        email: '',
        mobile: '',
    });

    useEffect(() => {
        const fetchRefundData = async () => {
            try {
                const selectedRefund = refunds.find(refund => refund._id === refundId);
                if (selectedRefund) {
                    setFormData({
                        email: selectedRefund.email,
                        mobile: selectedRefund.mobile,
                        reason: selectedRefund.reason
                    });
                }
            } catch (error) {
                console.error('Error fetching refund data:', error);
            }
        };

        if (visible && refundId && refunds.length) {
            fetchRefundData();
        }
    }, [visible, refundId, refunds]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        // Validation
        let errorMsg = '';
        if (name === 'email') {
            errorMsg = !value.includes('@') ? '*Please enter valid E-mail' : '';
        } else if (name === 'mobile') {
            errorMsg = value.length !== 10 ? '*Mobile number must be 10 digits' : '';
        }
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: errorMsg
        }));
    };

    const handleUpdateRefund = async () => {
        try {
            const response = await axios.put(`http://localhost:3030/tpp/refs/${refundId}`, formData);
            if (response.status === 200) {
                alert('Refund updated successfully!');
                onClose(); 
                
                const updatedRefunds = refunds.map(refund => {
                    if (refund._id === refundId) {
                        return {
                            ...refund,
                            email: formData.email,
                            mobile: formData.mobile,
                            reason: formData.reason
                        };
                    }
                    return refund;
                });
                setRefunds(updatedRefunds);
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

    if (!visible) return null;

    return (
        <div
            id='container'
            onClick={handleOnClose}
            className='fixed inset-0 bg-text bg-opacity-50 backdrop-blur-sm flex justify-center items-center'
        >
            <div className='bg-background bg-opacity-100 h-[40rem] w-[60rem] rounded-xl flex justify-between items-center'>
                <div className='bg-accent rounded-xl h-[40rem] w-[35rem] '>
                    {/* Image content */}
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
                            type="email"
                            placeholder="Contact E-mail"
                            className='text-xl text-text focus:outline-none active:outlines-none h-10 w-[20rem] border-2 border-accent rounded-lg pl-5 mb-1'
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    {errors.email && <p className="text-primary text-sm flex justify-center mb-2">{errors.email}</p>}
                    <div className='flex justify-center pr-[2.5rem]'>
                        <input
                            type="text"
                            placeholder="Contact Number"
                            className='text-xl text-text focus:outline-none active:outlines-none h-10 w-[20rem] border-2 border-accent rounded-lg pl-5 mb-1'
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    {errors.mobile && <p className="text-primary text-sm flex justify-center mb-2">{errors.mobile}</p>}
                    <div className='flex justify-center pr-[2.5rem]'>
                        <input
                            type="text"
                            placeholder="Reason/Add Note"
                            className='text-xl text-text focus:outline-none active:outlines-none h-10 w-[20rem] border-2 border-accent rounded-lg pl-5 mb-5'
                            name="reason"
                            value={formData.reason}
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
