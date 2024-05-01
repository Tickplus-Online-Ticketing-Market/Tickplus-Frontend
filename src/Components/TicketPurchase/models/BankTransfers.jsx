import React, { useState } from 'react';
import axios from 'axios';

export default function BankTransfers({ visible, onClose }) {
    const [formData, setFormData] = useState({
        file: null
    });
    const [errors, setErrors] = useState({});

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
                file: ''
            });
        } else {
            setErrors({
                file: 'File type not supported! Please upload PNG, JPEG, or PDF files only.'
            });
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        if (!formData.file) {
            setErrors({
                file: 'File is required. Please upload JPG, JPEG, PNG, or PDF files only!'
            });
            return;
        }
        const formDataToSend = new FormData();
        formDataToSend.append('file', formData.file);
        try {
            
            await axios.post("http://localhost:3030/tpp/bts", formDataToSend, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            
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
                                    type="file"
                                    onChange={handleFileChange}
                                    className={`text-xl text-text focus:outline-none active:outlines-none h-8.5 w-[20rem] border-2 border-primary rounded-lg pl-5 mt-0.25`}
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
