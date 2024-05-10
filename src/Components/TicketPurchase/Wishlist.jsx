import React, { useState, useEffect } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { ImBin } from "react-icons/im";
import BuyModel from './models/BuyModel';
import axios from 'axios';

export default function Wishlist() {
  const [showMyModel01, setShowMyModel01] = useState(false);
  const [wishlist, setWishlist] = useState([]);

  const handleOnClose01 = () => setShowMyModel01(false);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await axios.get("http://localhost:3030/tpp/wishes");
        setWishlist(response.data.wishes);
      } catch (error) {
        console.error("Error fetching wishlist:", error);
      }
    };

    fetchWishlist();
  }, []);

  const handleDeleteWish = async (wishId) => {
    try {
      const response = await axios.delete(`http://localhost:3030/tpp/wishes/${wishId}`);
      if (response.status === 200) {
        // Remove the deleted wish from the local state
        setWishlist(prevWishlist => prevWishlist.filter(item => item._id !== wishId));
        alert("Wish deleted successfully.");
      } else {
        alert("Failed to delete wish.");
      }
    } catch (error) {
      console.error("Error deleting wish:", error);
      alert("Failed to delete wish.");
    }
  };

  return (
    <div>
      <div className='bg-background h-[8rem] px-4 flex justify-between items-center'>
        <div className='flex items-center'>
          <div className='text-accent text-4xl px-3'><FaShoppingCart/></div>
          <div className='text-accent text-4xl font-bold'>Wishlist</div>
        </div>
      </div>
        
      
        <div className="bg-primary font-bold relative overflow-x-auto shadow-md sm:rounded-lg px-5 py-5">
          <table className="w-full text-xl text-center rtl:text-right text-primary dark:text-primary">
            <thead className="text-xl text-accent font-bold bg-primary">
              <tr>
                <th scope="col" className="px-6 py-3">Event ID</th>
                <th scope="col" className="px-6 py-3">Event Name</th>
                <th scope="col" className="px-6 py-3">Unit Price</th>
                <th scope="col" className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {wishlist.map(item => (
                <tr className='bg-text bg-opacity-80 sm:rounded-lg' key={item._id}>
                  <td className="px-6 py-4 text-background">{item.eventId}</td>
                  <td className="px-6 py-4 text-background">{item.eventName}</td>
                  <td className="px-6 py-4 text-background">{item.unitPrice}</td>
                  <td className="px-6 py-4 text-primary items-center">
                    <button 
                      type="button" 
                      onClick={() => setShowMyModel01(true)} 
                      className='bg-accent text-background h-[3rem] w-[10rem] rounded hover:scale-95 transition text-xl mr-1'
                    >
                      Buy
                    </button>
                    <button 
                      type="button" 
                      onClick={() => handleDeleteWish(item._id)} // Call handleDeleteWish with the wishId
                      className="bg-secondary text-accent h-[2rem] w-[4rem] rounded hover:scale-95 transition text-xl ml-1"
                    >
                      <div className='ml-6'>
                        <ImBin/>
                      </div>
                    </button>
                  </td> 
                </tr>
              ))}
            </tbody>
          </table>  
        </div>  
      
      <BuyModel onClose={handleOnClose01} visible={showMyModel01}/>
    </div>
  );
}
