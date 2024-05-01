import axios from 'axios';
import React, { useState } from 'react';

export default function BankTransfers({ visible, onClose }) {
    const [formData, setFormData] = useState({
        customerName: '',
        phoneNumber: '',
        transactionDate: '',
        bankBranch: '',
        file: null
    });
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
        setErrors({
            ...errors,
            [name]: ''
        });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const allowedTypes = ['image/png', 'image/jpeg', 'application/pdf'];

        if (file && allowedTypes.includes(file.type)) {
            setFormData({
                ...formData,
                file: file
            });
            // Clear the error message if a valid file is selected
            setErrors({
                ...errors,
                file: ''
            });
        } else {
            setErrors({
                ...errors,
                file: 'File type not supported! Please upload PNG, JPEG, or PDF files only.'
            });
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        // Validate form data
        const validationErrors = {};
        if (!formData.customerName.trim()) {
            validationErrors.customerName = 'Customer name is required*';
        }
        if (!formData.phoneNumber.trim()) {
            validationErrors.phoneNumber = 'Phone number is required*';
        } else if (!/^\d+$/.test(formData.phoneNumber)) {
            validationErrors.phoneNumber = 'Phone number should contain only numbers*';
        }
        if (!formData.transactionDate) {
            validationErrors.transactionDate = 'Transaction date is required';
        }
        if (!formData.bankBranch.trim()) {
            validationErrors.bankBranch = 'Bank branch is required';
        }
        if (!formData.file) {
            validationErrors.file = 'File is required. Please upload PNG, JPEG, or PDF files only! ';
        }
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('customerName', formData.customerName);
            formDataToSend.append('phoneNumber', formData.phoneNumber);
            formDataToSend.append('transactionDate', formData.transactionDate);
            formDataToSend.append('bankBranch', formData.bankBranch);
            formDataToSend.append('file', formData.file);

            // Make a POST request to the backend API endpoint
            await axios.post('/bpay/', formDataToSend);
            // Show success alert
            alert('Record created successfully');
            
            onClose(); 
        } catch (error) {
            console.error('Error creating record:', error);
        }
    };

    const handleOnClose07 = (e) => {
        if (e.target.id === 'container') onClose();
    };

    if (!visible) return null;

    return (
        <div>
            <div
                id='container'
                onClick={handleOnClose07}
                className='fixed inset-0 bg-text bg-opacity-0 backdrop-blur-sm flex justify-center items-center'>
                <div className='bg-background bg-opacity-100 h-[35rem] w-[50rem] rounded-xl flex justify-between items-center'>
                    <div className='bg-accent rounded-xl h-[35rem] w-[25rem] '>
                        <img src="./images/tick+1.png" alt="" />
                    </div>
                    <div>
                        <span className='flex justify-center pr-[2.5rem] mb-5 text-accent text-xl'>Bank Transfer</span>
                        <form onSubmit={handleFormSubmit}>
                            <div className='flex justify-center pr-[2.5rem]'>
                                <input
                                    type="text"
                                    name="customerName"
                                    id="customerName"
                                    placeholder='Customer name'
                                    value={formData.customerName}
                                    onChange={handleInputChange}
                                    className={`text-xl text-text focus:outline-none active:outlines-none h-10 w-[20rem] border-2 border-primary rounded-lg pl-5 mt-5 ${errors.customerName && 'border-red-500'}`}
                                />
                                
                            </div>
                            <div className='flex justify-center pr-[2.5rem]'>
                                {errors.customerName && <p className="text-primary text-sm">{errors.customerName}</p>}
                            </div>

                            <div className='flex justify-center pr-[2.5rem]'>
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    id="phoneNumber"
                                    placeholder='Phone Number'
                                    value={formData.phoneNumber}
                                    onChange={handleInputChange}
                                    className={`text-xl text-text focus:outline-none active:outlines-none h-10 w-[20rem] border-2 border-primary rounded-lg pl-5 mt-5 ${errors.phoneNumber && 'border-red-500'}`}
                                />
                                
                            </div>
                            <div className='flex justify-center pr-[2.5rem]'>
                                {errors.phoneNumber && <p className="text-primary text-sm">{errors.phoneNumber}</p>}
                            </div>
                            

                            <div className='flex justify-center pr-[2.5rem]'>
                                <input
                                    type="date"
                                    name="transactionDate"
                                    id="transactionDate"
                                    placeholder="Transaction Date"
                                    value={formData.transactionDate}
                                    onChange={handleInputChange}
                                    className={`text-xl text-text focus:outline-none active:outlines-none h-10 w-[20rem] border-2 border-primary rounded-lg pl-5 mt-5 ${errors.transactionDate && 'border-red-500'}`}
                                />
                                
                            </div>
                            <div className='flex justify-center pr-[2.5rem]'>
                                {errors.transactionDate && <p className="text-primary text-sm">{errors.transactionDate}</p>}
                            </div>

                            <div className='flex justify-center pr-[2.5rem] mb-5'>
                                <input
                                    type="text"
                                    name="bankBranch"
                                    id="bankBranch"
                                    placeholder="Bank Branch"
                                    value={formData.bankBranch}
                                    onChange={handleInputChange}
                                    className={`text-xl text-text focus:outline-none active:outlines-none h-10 w-[20rem] border-2 border-primary rounded-lg pl-5 mt-5 mb-5${errors.bankBranch && 'border-red-500'}`}
                                />
                                
                            </div>
                            <div className='flex justify-center pr-[2.5rem]'>
                                {errors.bankBranch && <p className="text-primary text-sm">{errors.bankBranch}</p>}
                            </div>
                            <span className='text-text pl-3 mb-1 text-sm'>Please Upload JPG,PNG or PDF!</span>
                            <div className='mt-1 w-[20rem] flex justify-center'>
                                <input
                                    type="file"
                                    onChange={handleFileChange}
                                    className={`text-xl text-text focus:outline-none active:outlines-none h-8.5 w-[20rem] border-2 border-primary rounded-lg pl-5 mt-0.25 ${errors.file && 'border-red-500'}`}
                                />
                            </div>
                            <div className='flex justify-center pr-[2.5rem]'>
                                {errors.file && <p className="text-primary text-sm">{errors.file}</p>}
                            </div>

                            <div className='mt-5 w-[20rem] flex justify-center'>
                                <button type="submit" className="bg-primary text-background h-[3rem] w-[10rem] rounded hover:scale-95 transition text-xl mr-1">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
