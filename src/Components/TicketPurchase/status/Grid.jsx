import React, { useState, useEffect } from 'react';
import { FaMoneyBillTrendUp } from "react-icons/fa6";

export default function Grid() {
  const [mostSellsData, setMostSellsData] = useState(null);

  useEffect(() => {
    async function fetchMostSellsData() {
      try {
        const response = await fetch('https://tickplus-backend.onrender.com/tpp/pays/highest-total-cost');
        if (response.ok) {
          const data = await response.json();
          setMostSellsData(data);
        } else {
          console.error('Failed to fetch most sells data');
        }
      } catch (error) {
        console.error('Error fetching most sells data:', error);
      }
    }

    fetchMostSellsData();
  }, []);

  return (
    <div>
      <div className='mt-[2rem]  flex justify-center gap-4'>
        <div className='rounded-xl p-4 h-[6rem] w-full'>
          <div className='flex justify-center text-primary'>
            <FaMoneyBillTrendUp />
            <span className='ml-3 font-bold text-xl'>Most Sells</span>
          </div>
          <div className='flex justify-center'>
            {mostSellsData ? (
              <>
                <span className='text-accent flex flex-col ml-3 font-bold text-3xl'>{mostSellsData.eventname}</span>
                <span className='text-primary flex flex-col ml-3 font-bold text-2xl'>Total Cost: {mostSellsData.totalCost}</span>
              </>
            ) : (
              <span>Loading...</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
