import React, { useState, useEffect } from 'react';
import { FaMoneyBillTrendUp } from "react-icons/fa6";

export default function Grid() {
  const [mostSellsData, setMostSellsData] = useState(null);

  useEffect(() => {
    async function fetchMostSellsData() {
      try {
        const response = await fetch('http://localhost:3030/tpp/pays/highest-total-cost');
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
                <span className='text-accent flex flex-col ml-3 font-bold text-3xl'>{mostSellsData.eventName}</span>
                <span className='text-accent flex flex-col ml-3 font-bold text-3xl'>({mostSellsData.totalCost} LKR)</span>
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
