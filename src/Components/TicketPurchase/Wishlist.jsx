// Wishlist.jsx
import React, { useState, useEffect } from 'react';
import { ImHeart } from "react-icons/im";
import { ImBin } from "react-icons/im";
import WishlistBuy from './models/PaymentModel';
import axios from 'axios';

export default function Wishlist() {
  const [showMyModel02, setShowMyModel02] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [loading, setLoading] = useState(true);

  const handleOnClose02 = () => setShowMyModel02(false);

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const response = await axios.get("http://localhost:3030/tpp/wishes");
        setWishlist(response.data.wishes);
        setLoading(false); // Update loading state when data is fetched
      } catch (error) {
        console.error("Error fetching wishlist:", error);
        setLoading(false); // Update loading state even if there's an error
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
      <div className={`bg-background h-[8rem] px-4 flex justify-between items-center`} style={{ transition: 'transform 1s ease-in-out', transform: loading ? 'translateY(100%)' : 'translateY(0)' }}>
        <div>
          <div className="text-primary text-4xl px-3 flex items-center">
            <ImHeart /> 
            <div className="text-primary text-4xl font-bold ml-2">Wishlist</div>
          </div> 
        </div>
      </div>
        
      <div className="bg-text font-bold relative overflow-x-auto shadow-md sm:rounded-lg px-5 py-5" style={{ transition: 'transform 1.5s ease-in-out', transform: loading ? 'translateY(100%)' : 'translateY(0)' }}>
        <table className="w-full text-xl text-center rtl:text-right">
          <thead className="text-xl font-bold">
            <tr>
              <th scope="col" className="px-6 py-3 text-background">Event Name</th>
              <th scope="col" className="px-6 py-3 text-accent">Unit Price</th>
            </tr>
          </thead>
          <tbody>
            {wishlist.map((item, index) => (
              <React.Fragment key={item._id}>
                <tr className='bg-secondary bg-opacity-40 sm:rounded-base pb-2 rounded' style={{ transition: 'height 0.5s ease-in-out', height: index !== wishlist.length - 1 ? 'auto' : '4px' }}>
                  <td className="px-6 py-4 text-background">{item.eventname}</td>
                  <td className="px-6 py-4 text-accent">{item.ticketPrice}.00 LKR</td>
                  <td className="px-6 py-4 items-center">
                    <button 
                      type="button" 
                      onClick={() => handleBuyClick(item)} // Pass item data to handleBuyClick
                      className='bg-primary text-background h-[3rem] w-[10rem] rounded hover:scale-95 transition text-xl mr-1'
                    >
                      Buy
                    </button>
                    <button 
                      type="button" 
                      onClick={() => handleDeleteWish(item._id)} // Call handleDeleteWish with the wishId
                      className="bg-accent text-secondary h-[2rem] w-[4rem] rounded hover:scale-95 transition text-xl ml-1"
                    >
                      <div className='ml-6'>
                        <ImBin/>
                      </div>
                    </button>  
                  </td>  
                </tr>
                {index !== wishlist.length - 1 && <tr key={`spacer-${index}`} className="h-4"></tr>}
              </React.Fragment>
            ))}
          </tbody>  
        </table>  
      </div>  
      <WishlistBuy onClose={handleOnClose02} visible={showMyModel02} selectedItem={selectedItem}/>
    </div>
  );
}
