import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import BuyModel from './models/BuyModel';

export default function Wishlist() {
  const [showMyModel01, setShowMyModel01] = useState(false);
  const handleOnClose01 = () => setShowMyModel01(false);

  return (
    <div>
      <div className='bg-background h-[8rem] px-4 flex justify-between items-center'>
        <div className='flex items-center'>
          <div className='text-primary text-4xl px-3'><FaShoppingCart/></div>
          <div className='text-primary text-4xl text-bold'>Wishlist</div>
        </div>
      </div>
        
      <div className='bg-accent px-1 py-1 rounded-lg md-2'>
        <div className="bg-accent relative overflow-x-auto shadow-md sm:rounded-lg px-5 py-5">
          <table className="w-full text-xl text-center rtl:text-right text-primary dark:text-primary">
            <thead className="text-xl text-primary uppercase bg-accent dark:text-white">
              <tr>
                <th scope="col" className="px-6 py-3">Event ID</th>
                <th scope="col" className="px-6 py-3">Event Name</th>
                <th scope="col" className="px-6 py-3">Total Cost</th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              <tr className='bg-text'>
                <td className="px-6 py-4 text-background"></td>
                <td className="px-6 py-4 text-background"></td>
                <td className="px-6 py-4 text-background"></td>
                <td className="px-6 py-4 text-primary items-center">
                  <button 
                    type="button" 
                    onClick={() => setShowMyModel01(true)} 
                    className='bg-primary text-background h-[3rem] w-[10rem] rounded hover:scale-95 transition text-xl mr-1'
                  >
                    Buy
                  </button>
                  <button 
                    type="button" 
                    className="bg-secondary text-accent h-[2rem] w-[4rem] rounded hover:scale-95 transition text-xl ml-1"
                  >
                    <div className='ml-6'>
                      <ImBin/>
                    </div>
                  </button>
                </td> 
              </tr>
            </tbody>
          </table>  
        </div>  
      </div>
      <BuyModel onClose={handleOnClose01} visible={showMyModel01}/>
    </div>
  );
}
