import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { HiOutlineSearch } from 'react-icons/hi';
import { IoHeartSharp } from 'react-icons/io5';
import BuyModel from './models/BuyModel';

export default function ExploreTickets() {
  const [tickets, setTickets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showMyModel01, setShowMyModel01] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState(null); // State to store the selected ticket

  useEffect(() => {
    fetchAllTickets();
  }, []);

  const fetchAllTickets = async () => {
    try {
      const res = await axios.get('http://localhost:3030/tpp/ticks');
      setTickets(res.data.Tickets);
    } catch (error) {
      console.error('Error fetching tickets:', error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddToWishlist = async (ticket) => {
    try {
      await axios.post('http://localhost:3030/tpp/wishes', ticket);
      window.alert('Ticket added to wishlist successfully!');
    } catch (error) {
      console.error('Error adding to wishlist:', error);
      window.alert('Failed to add ticket to wishlist. Please try again later.');
    }
  };

  const handleBuyTicket = (ticket) => {
    setSelectedTicket(ticket);
    setShowMyModel01(true);
  };

  const TicketCard = ({ ticket }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
      setIsHovered(true);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
    };

    return (
      <div
        className={`w-[49.25%] bg-secondary bg-opacity-100 h-[12rem] rounded-xl flex justify-between items-center mb-4`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ transition: 'transform 0.3s ease-in-out', transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
      >
        {/* Image div */}
        <div className="bg-accent rounded-xl h-[12rem] w-[60%]">
          <img src="./images/tick+1.png" alt="" />
        </div>

        {/* Details div */}
        <div div={ticket._id} className="pl-[2rem] mr-[5rem] mb-[2.5rem] mt-[2.5rem] w-[25%]">
          <div className="flex items-center mb-2 text-accent text-sm font-bold">
            <p>Event ID - {ticket.eventId}</p>
          </div>
          <div className="flex items-center mb-2 text-accent text-2xl font-bold">
            <p>{ticket.eventName}</p>
          </div>
          <div className="flex items-center mb-2 text-primary text-2xl font-bold">
            <p>{ticket.unitPrice} LKR</p>
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              onClick={() => handleBuyTicket(ticket)} // Pass the ticket to the handleBuyTicket function
              className="bg-primary text-background h-[2.5rem] w-[6rem] rounded hover:scale-95 transition text-xl mr-1"
            >
              Buy
            </button>
            <button
              type="button"
              onClick={() => handleAddToWishlist(ticket)}
              className="bg-accent text-primary h-[2.5rem] w-[3rem] rounded hover:scale-95 transition text-xl mr-1"
            >
              <div className="ml-[1rem] mr-[1rem]">
                {/*Add to Wishlist Button*/}
                <IoHeartSharp />
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  };

  const handleCloseModal = () => {
    setShowMyModel01(false);
  };

  // Filter tickets based on searchTerm
  const filteredTickets = tickets.filter((ticket) =>
    ticket.eventName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="bg-background h-[8rem] px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-primary text-4xl px-3">
            <MdOutlineTravelExplore />
          </div>
          <div className="text-primary text-4xl font-bold">Explore Tickets</div>
        </div>
        <div className="relative">
          <HiOutlineSearch fontSize={20} className="text-primary absolute top-1/2 -translate-y-1/2 left-3" />
          <input
            type="text"
            placeholder="Find your taste..."
            className="text-xl text-text focus:outline-none active:outlines-none h-10 w-[24rem] border-2 border-primary rounded-lg pl-10 pr-4"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-between">
        {filteredTickets.map((ticket) => (
          <TicketCard key={ticket._id} ticket={ticket} />
        ))}
      </div>
      {/* Pass selectedTicket and handleCloseModal to BuyModel */}
      <BuyModel ticket={selectedTicket} onClose={handleCloseModal} visible={showMyModel01} />
    </div>
  );
}
