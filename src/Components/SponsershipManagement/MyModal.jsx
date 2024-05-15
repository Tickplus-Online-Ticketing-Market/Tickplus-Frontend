import React from 'react';
import { AiOutlineClose } from "react-icons/ai";

export default function MyModal({ visible, onClose, SponserRequest }) {


if(!visible) return null;

  return (
    <div className='fixed inset-0 z-[101] bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
      <div className='bg-secondary h-1/3 w-1/3 p-5 rounded relative'>
        <div className='bg-background h-6 w-5 m-3 absolute top-0 right-0 rounded'>
          <button onClick={onClose} className='text-primary scale-125 hover:text-accent transform hover:scale-150 transition duration-300'>
            <AiOutlineClose />
          </button>
        </div>
        <div className='text-primary text-2xl font-bold flex justify-center mb-5'>
          Additional Note
        </div>
        <div className='text-black text-xl'>
          {SponserRequest.addNote}
          </div>
        </div>
      </div>
   
  );
}

