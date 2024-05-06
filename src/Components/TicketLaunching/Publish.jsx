import React from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';

export default function Publish({ visible, onClose, onConfirm, event }) {
  const handleConfirm = async () => {
    const { _id } = event; // Destructuring _id from event object

    try {
      const res = await axios.put(`http://localhost:3030/ticketfoam/${_id}`);

      toast.success('Event published successfully');
      onConfirm(event);
      onClose();
      
    } catch (error) {
      console.error('Error publishing event:', error);
      toast.error('Failed to publish event');
    }
  };
  
  const handlePublishOnClose = () => {
    onClose();
  };

  if (!visible) return null;

  return (
    <div
      onClick={handlePublishOnClose}
      className='fixed inset-0 bg-accent bg-opacity-20 backdrop-blur-sm
      flex justify-center items-center'
    >
      <div className='bg-box3 h-28 w-60 p-2 rounded'>
        <div className='font-bold text-boxf flex justify-center text-2xl pt-2 pb-4'>Are you sure?</div>
        <div className='flex justify-between gap-3 '>
          <button 
            className="bg-accent h-full w-full font-bold rounded-full py-2 text-background
              transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-2xl hover:bg-background hover:text-accent  duration-300"
            onClick={handleConfirm}
          >
            Confirm
          </button>
          <button 
            className="bg-boxf h-full w-full font-bold rounded-full py-2 text-background 
              transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-2xl hover:bg-background hover:text-boxf  duration-300"
            onClick={handlePublishOnClose}
          >
            Decline
          </button>
        </div>
      </div>
    </div>
  );
}
