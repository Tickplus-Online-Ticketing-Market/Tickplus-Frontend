import React, { useState, useEffect } from 'react';
import axios from "axios";

export default function MyModal2({ onClose, visible, event }) {
  
  
  const [formData, setFormData] = useState({
    sponsorName: '',
    brandName: '',
    sponsorId: '',
    budget: '',
    email: '',
    addNote: '',
    eventName: '',    
  });
  const [errors, setErrors] = useState({});

  const handleOnClose = (e) => {
    if (e.target.id === 'close') onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value, ...event });
    // Clear validation error when input changes
    setErrors({ ...errors, [name]: '' });
  };

   const handleSubmit = async (e) => {
    e.preventDefault();
     console.log("submitted")

     const newErrors = {};
     if (!formData.sponsorName) {
       newErrors.sponsorName = 'Sponsor name is required';
     }
     if (!formData.brandName) {
       newErrors.brandName = 'Brand name is required';
     }
     if (!formData.sponsorId) {
       newErrors.sponsorId = 'Sponsor ID is required';
     }
     if (!formData.budget) {
       newErrors.budget = 'Budget is required';
     } else if (!/^\d+$/.test(formData.budget)) {
       newErrors.budget = 'Invalid price. Please enter a valid price.';
     } else if (isNaN(parseFloat(formData.budget))) {
       newErrors.budget = 'Budget must be a valid number.';
     }
     if (!formData.email) {
       newErrors.email = 'Email is required';
     } else if (!isValidEmail(formData.email)) {
       newErrors.email = 'Invalid email format';
     }
     setErrors(newErrors);
 
     // If there are validation errors, don't submit the form
     if (Object.keys(newErrors).length > 0) {
       return;
     }
     
     try {
       // Create the request
       const response = await axios.post('https://tickplus-backend.onrender.com/sponsership-management/request', formData);
       console.log(response);
       
       
       // Clear the form data
       setFormData({
         sponsorName: '',
         brandName: '',
         sponsorId: '',
         budget: '',
         email: '',
         addNote: ''
       });
       
     } catch (error) {
       console.error('Error submitting request:', error);
     }
     // Close the modal after successful submission
     onClose();
   };

  const isValidEmail = (email) => {
    // Email validation 
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  useEffect(() => {
    // Populate form data with event details when request changes
    if (true) {
      setFormData({
        sponsorName: '',
        brandName: '',
        sponsorId: '',
        budget: '',
        email: '',
        addNote: ''
      });
    }
  }, []);

  if (!visible) return null;
  
  return (
    <div id='close'
      onClick={handleOnClose}
      className='fixed inset-0 z-[101] bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      <div className="bg-secondary p-5 w-2/3 rounded">
       <div className="flex justify-between items-center">
        <div className="container mx-auto p-6 max-w-lg">
          <h1 className="text-3xl font-bold mb-6">Request Sponsorship</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="sponsorName" className="text-xl text-accent mb-2">Sponsor Name:</label>
              <input
                type="text"
                id="sponsorName"
                name="sponsorName"
                value={formData.sponsorName}
                onChange={handleChange}
                className="input"
                placeholder="Enter sponsor name"
                required
              />
              {errors.sponsorName && <p className="text-reject text-500">{errors.sponsorName}</p>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="brandName" className="text-xl text-accent mb-2">Brand Name:</label>
              <input
                type="text"
                id="brandName"
                name="brandName"
                value={formData.brandName}
                onChange={handleChange}
                className="input"
                placeholder="Enter brand name"
                required
              />
              {errors.brandName && <p className="text-reject text-500">{errors.brandName}</p>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="sponsorId" className="text-xl text-accent mb-2">Sponsor ID:</label>
              <input
                type="text"
                id="sponsorId"
                name="sponsorId"
                value={formData.sponsorId}
                onChange={handleChange}
                className="input"
                placeholder="Enter sponsor ID"
                required
              />
              {errors.sponsorId && <p className="text-reject text-500">{errors.sponsorId}</p>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="budget" className="text-xl text-accent mb-2">Budget:</label>
              <input
                type="text"
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="input"
                placeholder="Enter budget"
                required
              />
              {errors.budget && <p className="text-reject text-500">{errors.budget}</p>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="text-xl text-accent mb-2">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="input"
                placeholder="Enter email"
                required
              />
              {errors.email && <p className="text-reject text-500">{errors.email}</p>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="note" className="text-lg mb-2">Additional Note:</label>
              <textarea
                id="addNote"
                name="addNote"
                value={formData.addNote}
                onChange={handleChange}
                className="input"
                placeholder="Enter additional note (optional)"
              />
            </div>
            <div className='flex justify-between items-center'>
              <button type="submit" className="btn bg-primary text-background py-2 px-4 rounded-md hover:bg-accent">Submit Request</button>
              <button type="button" onClick={onClose} className="btn bg-background text-primary py-2 px-4 rounded-md hover:bg-accent">Cancel</button>
            </div>
          </form>
        </div>

             <div className='bg-accent p-10 rounded'>
               <div className="mb-2 text-3xl font-bold leading-tight text-primary">
                {event.name}
               </div>
               <div className="overflow-hidden bg-cover bg-no-repeat aspect-video">
               <img className="rounded-t-lg" src={event.image} alt="" />
               </div>
              <div className="flex justify-between items-center">
                <div className="text-primary">
                  <div className="mb-2 text-base">
                    Event ID: {event._id}
                  </div>
                  <div className="mb-2 text-base">
                    Date: {event.date}
                  </div>
                </div>
                <div className="text-primary">
                  <div className="mb-2 text-base">
                    Venue: {event.venue}
                  </div>
                  <div className="mb-2 text-base ">
                    Time: {event.time}
                  </div>
                  <p className="text-primary">Artists: {event.artist}</p>
                </div>
              </div>
             </div>

       </div>
      </div>
    </div>
  );
}

