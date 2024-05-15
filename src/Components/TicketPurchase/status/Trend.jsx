import React, { useState, useEffect } from 'react';

export default function Trend() {
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
      <div className='flex justify-center gap-4'>
        <div className='bg-accent rounded-xl p-4 h-[3.5rem] w-full'>
          <div className='flex justify-center text-sm text-background'>
            <span className='font-bold'>Most Popular</span>
          </div>
          <div className='flex justify-center'>
            {mostSellsData ? (
              <>
                <span className='text-primary flex flex-col font-bold text-base'>{mostSellsData.eventName}</span>
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
