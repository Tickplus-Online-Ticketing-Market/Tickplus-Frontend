import React, { useState, useEffect } from 'react';
import image from './shared/image.png';
import axios from 'axios';
import { toast } from 'react-toastify';

const TicketForm = ({ visible, onClose }) => {
  const [errors, setErrors] = useState({});
  const [ticketfoams, setTicketfoam] = useState([]);
  const [createForm, setCreateForm] = useState({
    eventname: '',
    date: '',
    venue: '',
    time: '',
    ticketQuantity: '',
    ticketPrice: '',
  });

  const [submitted, setSubmitted] = useState(false); // State to track form submission

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true); // Set form as submitted

    const currentDate = new Date().toISOString().split('T')[0];
    const newErrors = {};


    // Validation logic

    // Event Name Validation
    if (!createForm.eventname.trim()) {
      newErrors.eventname = 'Event Name cannot be empty';
    } else if (createForm.eventname.length < 4) {
      newErrors.eventname = 'Event Name should be at least 4 characters long';
    } else if (!/^[a-zA-Z0-9\s]*$/.test(createForm.eventname)) {
      newErrors.eventname = 'Event Name should contain only letters, numbers, and spaces';
    }

    // Date Validation
    if (!createForm.date) {
      newErrors.date = 'Please select a Date';
    } else if (createForm.date < currentDate) {
      newErrors.date = 'Selected date cannot be in the past';
    }

    // Venue Validation
    if (!createForm.venue.trim()) {
      newErrors.venue = 'Venue cannot be empty';
    } else if (createForm.venue.length < 3) {
      newErrors.venue = 'Venue should be at least 3 characters long';
    } else if (!/^[a-zA-Z0-9\s]*$/.test(createForm.venue)) {
      newErrors.venue = 'Venue should contain only letters, numbers, and spaces';
    }

    // Time Validation
    if (!createForm.time) {
      newErrors.time = 'Please select a Time';
    } else if (!/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(createForm.time)) {
      newErrors.time = 'Please enter a valid Time in HH:MM format';
    }

    // Ticket Quantity Validation
    if (createForm.ticketQuantity.trim() === '' || parseInt(createForm.ticketQuantity) <= 0) {
      newErrors.ticketQuantity = 'Ticket Quantity must be greater than 0';
    }

    // Ticket Price Validation
    if (createForm.ticketPrice.trim() === '' || parseFloat(createForm.ticketPrice) <= 0) {
      newErrors.ticketPrice = 'Ticket Price must be greater than 0';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        // Generate automatic eventid (e.g., based on timestamp)
        const timestamp = Date.now();
        const eventid = `EVENT_${timestamp}`;

        const ticketData = {
          ...createForm,
          eventid, // add generated eventid to the ticket data
        };

        const res = await axios.post('http://localhost:3000/ticketfoam', ticketData);
        
        setTicketfoam([...ticketfoams, res.data]);
        
        setCreateForm({
          eventname: '',
          date: '',
          venue: '',
          time: '',
          ticketQuantity: '',
          ticketPrice: '',
        });

        console.log(res);

        setSubmitted(false); // Reset submitted state
        onClose(); // Close the form
        toast.success('Ticket created successfully'); // Show success toast

      } catch (error) {
        console.error('Error creating ticketfoam:', error);
        toast.error('Failed to create ticket'); // Show error toast
      }
    }
  };

  const updateCreateFormField = (e) => {
    const { name, value } = e.target;
  
    setCreateForm({
      ...createForm,
      [name]: value,
    });
  };

  useEffect(() => {
    if (visible) {
      // Fetch existing tickets if needed
    }
  }, [visible]);

  

  if (!visible) return null;

  return (
    <div className='fixed inset-0 bg-accent bg-opacity-0 backdrop-blur-sm flex justify-center shadow-2xl items-center'>
      <div className='bg-box3 shadow-2xl h-[36rem] w-[50rem] rounded-lg'>
        <div className='flex'>
          <div className='bg-accent h-[36rem] w-[25rem] rounded-lg'>
            <div className="flex items-center gap-2 px-1 py-3">
              <img src={image} alt='description' />
            </div>
          </div>
          <div className='bg-box3 shadow-2xl h-[36rem] w-[25rem] rounded-lg scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb scrollbar-track  overflow-y-scroll'>
            <form onSubmit={handleSubmit} className="space-y-2 space-x-8">
              <div className='font-bold text-boxf flex justify-center text-3xl pt-2 pl-4 '>Ticket Details</div>

              {/* Event Name */}
              <div>
                <label className="block text-sm font-medium">
                  Event Name
                </label>
                <input
                  type="text"
                  name="eventname"
                  value={createForm.eventname}
                  onChange={updateCreateFormField}
                  className="block w-72 p-1.5 shadow-lg border border-boxf rounded-md text-sm"
                  placeholder="Enter event name"
                  required
                />
                {errors.eventname && <p className="text-red text-sm">{errors.eventname}</p>}
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-medium">
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={createForm.date}
                  onChange={updateCreateFormField}
                  className="block w-72 p-2 border border-boxf rounded-md shadow-lg text-sm"
                  required
                />
                {errors.date && <p className="text-red text-sm">{errors.date}</p>}
              </div>

              {/* Venue */}
              <div>
                <label className="block text-sm font-medium">
                  Venue
                </label>
                <input
                  type="text"
                  name="venue"
                  value={createForm.venue}
                  onChange={updateCreateFormField}
                  className="w-72 p-2 border border-boxf rounded-md shadow-lg text-sm"
                  placeholder="Enter venue"
                  required
                />
                {errors.venue && <p className="text-red text-sm">{errors.venue}</p>}
              </div>

              {/* Time */}
              <div>
                <label className="block text-sm font-medium">
                  Time
                </label>
                <input
                  type="time"
                  name="time"
                  value={createForm.time}
                  onChange={updateCreateFormField}
                  className="block w-72 p-2 border border-boxf rounded-md shadow-lg text-sm"
                  required
                />
                {errors.time && <p className="text-red text-sm">{errors.time}</p>}
              </div>

              {/* Ticket Quantity */}
              <div>
                <label className="block text-sm font-medium">
                  Ticket Quantity
                </label>
                <input
                  type="number"
                  name="ticketQuantity"
                  value={createForm.ticketQuantity}
                  onChange={updateCreateFormField}
                  className="block w-72 p-2 border border-boxf rounded-md shadow-lg text-sm"
                  placeholder="Enter ticket quantity"
                  min="0"
                  required
                />
                {errors.ticketQuantity && <p className="text-red text-sm">{errors.ticketQuantity}</p>}
              </div>

              {/* Ticket Price */}
              <div>
                <label className="block text-sm font-medium">
                  Ticket Price
                </label>
                <input
                  type="number"
                  name="ticketPrice"
                  value={createForm.ticketPrice}
                  onChange={updateCreateFormField}
                  className="block w-72 p-2 border border-boxf rounded-md shadow-lg text-sm"
                  placeholder="Enter ticket price"
                  min="0"
                  required
                />
                {errors.ticketPrice && <p className="text-red text-sm">{errors.ticketPrice}</p>}
              </div>

              <div className='flex justify-center pt-4 pr-6 gap-3'>
                <button className="bg-accent h-10 w-28 font-bold rounded-full py-2 text-background 
                    transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-2xl hover:bg-background hover:text-accent duration-300">
                  Confirm
                </button>
                <button onClick={onClose} className="bg-boxf h-10 w-28 font-bold rounded-full py-2 text-background 
                    transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-2xl hover:bg-background hover:text-boxf duration-300">
                  Decline
                </button>
              </div>
              {/* Error messages */}
        {submitted && (
          <>
            {Object.keys(errors).length > 0 && (
              <div className="text-red text-sm">
                Please correct the following errors:
                {Object.values(errors).map((error, index) => (
                  <p key={index}>{error}</p>
                ))}
              </div>
            )}
          </>
        )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketForm;
