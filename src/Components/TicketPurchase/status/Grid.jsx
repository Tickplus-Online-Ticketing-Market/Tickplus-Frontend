import React from 'react';
import { FaMoneyBillTrendUp } from "react-icons/fa6";


export default function Grid() {
  return (
    <div>
        <span className='text-3xl text-primary flex justify-center mt-[5rem] mb-[2rem]'>Financial Status</span>
        <div className='mt-[2rem]  flex justify-center gap-4'>
            <div className='bg-primary rounded-xl p-4 h-[8rem] w-full flex items-center'>
              <div className='text-5xl text-accent'>
                <FaMoneyBillTrendUp />

              </div>
              
              </div>
            <div className='bg-secondary rounded-xl p-4 h-[8rem] w-full flex items-center'>
              <div className='text-5xl text-accent'>
                <FaMoneyBillTrendUp />

              </div>
            </div>
            <div className='bg-text rounded-xl p-4 h-[8rem] w-full flex items-center'>
            <div className='text-5xl text-accent'>
                <FaMoneyBillTrendUp />

              </div>
            </div>
        </div>
    </div>
  );
}
