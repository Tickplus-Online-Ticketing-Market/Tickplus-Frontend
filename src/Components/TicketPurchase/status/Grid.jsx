import React from 'react';
import { FaMoneyBillTrendUp } from "react-icons/fa6";


export default function Grid() {
  return (
    <div>
        <div className='mt-[2rem]  flex justify-center gap-4'>
            <div className='bg-primary rounded-xl p-4 h-[6rem] w-full'>
              <div className='flex justify-center'>
                <FaMoneyBillTrendUp />
                <span className='text-accent ml-3 font-bold text-xl'>Most Sells</span>
              </div>
              <div className='flex justify-center'>
                <span className='text-background flex flex-col ml-3 font-bold text-3xl'>Interflash</span>
              </div>  
            </div>

            <div className='bg-accent rounded-xl p-4 h-[6rem] w-full'>
              <div className='flex justify-center text-primary'>
                <FaMoneyBillTrendUp />
                <span className='ml-3 font-bold text-xl'>Total Income</span>
              </div>
              <div className='flex justify-center'>
                <span className='text-background flex flex-col ml-3 font-bold text-3xl'>Interflash</span>
              </div>  
            </div>

            <div className='bg-primary rounded-xl p-4 h-[6rem] w-full'>
              <div className='flex justify-center'>
                <FaMoneyBillTrendUp />
                <span className='text-accent ml-3 font-bold text-xl'>Most Refunds</span>
              </div>
              <div className='flex justify-center'>
                <span className='text-background flex flex-col ml-3 font-bold text-3xl'>Mega Blast</span>
              </div>  
            </div>
        </div>
        <div>
          
        </div>
    </div>
  );
}
