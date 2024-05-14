import React, { useState, useEffect } from 'react';
import { ImHeart } from "react-icons/im";
import { ImBin } from "react-icons/im";
import WishlistBuy from './models/PaymentModel';
import axios from 'axios';

export default function Wishlist() {
  const [showMyModel02, setShowMyModel02] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleOnClose02 = () => setShowMyModel02(false);

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
        alert("Your Wish Will be Delete!.");
      } else {
        alert("Failed to delete wish.");
      }
    } catch (error) {
      console.error("Error deleting wish:", error);
      alert("Failed to delete wish.");
    }
  };

  const handleBuyClick = (item) => {
    setSelectedItem(item);
    setShowMyModel02(true);
  };

  return (
    <div>
      <div className='bg-background h-[8rem] px-4 flex justify-between items-center'>
        <div className='flex items-center'>
          <div className='text-accent text-4xl px-3'><ImHeart /></div>
          <div className='text-accent text-4xl font-bold'>Wishlist</div>
        </div>
      </div>
        
      <div className="bg-accent font-bold relative overflow-x-auto shadow-md sm:rounded-lg px-5 py-5">
        <table className="w-full text-xl text-center rtl:text-right text-primary">
          <thead className="text-xl text-background font-bold">
            <tr>
              <th scope="col" className="px-6 py-3">Event ID</th>
              <th scope="col" className="px-6 py-3">Event Name</th>
              <th scope="col" className="px-6 py-3">Unit Price</th>
            </tr>
          </thead>
          <tbody>
            {wishlist.map((item, index) => (
              <React.Fragment key={item._id}>
                <tr className='bg-primary bg-opacity-40 sm:rounded-base pb-2 rounded'>
                  <td className="px-6 py-4 text-secondary">{item.eventId}</td>
                  <td className="px-6 py-4 text-background">{item.eventName}</td>
                  <td className="px-6 py-4 text-secondary">{item.unitPrice}.00 LKR</td>
                  <td className="px-6 py-4 items-center">
                    <button 
                      type="button" 
                      onClick={() => handleBuyClick(item)} // Pass item data to handleBuyClick
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
                {index !== wishlist.length - 1 && <tr className="h-4" />}
              </React.Fragment>
            ))}
          </tbody>  
        </table>  
      </div>  
      
      <WishlistBuy onClose={handleOnClose02} visible={showMyModel02} selectedItem={selectedItem}/>
    </div>
  );
}
