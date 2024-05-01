import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HiOutlineSearch} from 'react-icons/hi';
import { FaShoppingCart } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import BuyModel from './models/BuyModel';
import WishlistDelete from './models/WishlistDelete';
import Counter from './collectors/Counter';


export default function Wishlist() {
const[showMyModel01, setShowMyModel01] = useState(false)
const handleOnClose01 = ()=>setShowMyModel01(false)

const[showMyModel02, setShowMyModel02] = useState(false)
const handleOnClose02 = ()=>setShowMyModel02(false)

//Fetch Wishes
const [wishes, setWishes] = useState(null);

useEffect(() => {
  fetchWishes();
}, []);

//Function to fetch Wishes
const fetchWishes = async() => {
  //Fetch Wishes
  const res = await axios.get("http://localhost:3020/wl/wishes");
  //Set Wishes
  setWishes(res.data.wishes);
  
}
  return (
  <div>
    <div >
        <div className='bg-background h-[8rem] px-4 flex justify-between items-center'>
          <div className='flex items-center'>
            <div className='text-primary text-4xl px-3'><FaShoppingCart/></div>
            <div className='text-primary text-4xl text-bold'>Wishlist</div>
        </div>

        <div className='relative'>
          <HiOutlineSearch fontSize={20} className='text-primary absolute top-1/2 -translate-y-1/2 left-3'/>
          <input 
            type="text" 
            placeholder='Search Events on Wishlist... ' 
            className='text-xl text-text focus:outline-none active:outlines-none h-10 w-[24rem] border-2 border-primary rounded-lg pl-10 pr-4'
          />
        </div>
      </div>
        
      <div className='bg-accent px-1 py-1 rounded-lg md-2'>
        
          <div className="bg-accent relative overflow-x-auto shadow-md sm:rounded-lg px-5 py-5">
            <table className="w-full text-xl text-center rtl:text-right text-primary dark:text-primary">
              <thead className="text-xl text-primary uppercase bg-accent dark:text-white">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Event
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Time / Date
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Quantity
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Total
                  </th>
                  <th scope="col" className="px-6 py-3">
           
                  </th>
                </tr>
              </thead>
              <tbody>
              {wishes && wishes.map((wish) => {
      return (
    <tr key={wish._id}>
      <td className="px-6 py-4 font-xl text-background">{wish.eventName}</td>
      <td className="px-6 py-3 text-background">{wish.eventDate}</td>
      <td className="px-6 py-4 text-background"><Counter/></td>
      <td className="px-6 py-4 text-background">10000LKR</td>
      <td className="px-6 py-4 text-primary items-center">
        <button 
          type="button" 
          onClick={()=>setShowMyModel01(true)} 
          className='bg-primary text-background h-[3rem] w-[10rem] rounded hover:scale-95 transition text-xl mr-1'
        >
          Buy
        </button>
        <button 
          type="button" 
          onClick={()=>setShowMyModel02(true)} 
          className="bg-accent text-background h-[3rem] w-[4rem] rounded hover:scale-95 transition text-xl ml-1"
        >
          <div className='ml-6'>
            <ImBin/>
          </div>
        </button>
      </td>
    </tr>
  );
})}
     
              </tbody>
            </table>  
          </div>  
      </div>
      </div>
      <BuyModel onClose={handleOnClose01} visible={showMyModel01}/>
      <WishlistDelete onClose={handleOnClose02} visible={showMyModel02}/>
  </div>
  )
}
