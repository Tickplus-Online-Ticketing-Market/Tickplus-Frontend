import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

function MyModal3({ visible, onClose, SponserRequest }) {
  const [email, setEmail] = useState('');
  const [additionalNote, setAdditionalNote] = useState('');

  useEffect(() => {
    if (SponserRequest && (email !== SponserRequest.email || additionalNote !== SponserRequest.addNote)) {
      setEmail(SponserRequest.email || '');
      setAdditionalNote(SponserRequest.addNote || '');
    }
  }, [SponserRequest, email, additionalNote]);
  

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'additionalNote') {
      setAdditionalNote(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3030/sponsership-management/request/${SponserRequest._id}`, {
        email,
        additionalNote,
      });
      toast.success("Request updated successfully");
      onClose();
    } catch (error) {
      toast.error("Failed to update request");
    }
  };

  const handleOnClose = (e) => {
    if (e.target.id === 'close') onClose();
  };

  if (!visible) return null;

  return (
    <div
      id="close"
      onClick={handleOnClose}
      className="fixed inset-0 z-[101] bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="max-w-md mx-auto mt-8 bg-accent shadow-md rounded px-8 pt-6 pb-8 mb-4 relative">
        <button
          className="absolute top-2 right-2 text-primary hover:text-background transform hover:scale-150 transition duration-300 focus:outline-none"
          onClick={onClose}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-primary text-xl font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleOnChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-primary text-xl font-bold mb-2" htmlFor="additionalNote">
              Additional Note
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="additionalNote"
              name="additionalNote"
              placeholder="Additional Note"
              value={additionalNote}
              onChange={handleOnChange}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-primary hover:bg-background hover:text-primary text-background font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default MyModal3;
