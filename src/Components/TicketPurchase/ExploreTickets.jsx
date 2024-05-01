import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Counter from './collectors/Counter';
import { MdOutlineTravelExplore } from 'react-icons/md';
import { HiOutlineSearch } from 'react-icons/hi';
import { FaShoppingCart } from 'react-icons/fa';

export default function ExploreTickets() {
  const [tickets, setTickets] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchAllTickets();
  }, []);

  const fetchAllTickets = async () => {
    try {
      const res = await axios.get("http://localhost:3030/tpp/ticks");
      setTickets(res.data.Tickets);
    } catch (error) {
      console.error('Error fetching tickets:', error);
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredTickets = tickets.filter((ticket) =>
    ticket.eventName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleAddToWishlist = async (eventId, eventName, unitPrice, qty) => {
    try {
      const unitPriceNumber = parseFloat(unitPrice);
      const qtyNumber = parseInt(qty);

      const totalCost = unitPriceNumber * qtyNumber;

      if (isNaN(totalCost) || totalCost <= 0) {
        console.error('Invalid totalCost:', totalCost);
        return;
      }

      await axios.post("http://localhost:3030/tpp/wishes", {
        eventId: String(eventId),
        eventName: String(eventName),
        totalCost: totalCost,
      });

      console.log('Item added to wishlist:', { eventId, eventName, totalCost });
    } catch (error) {
      console.error('Error adding to wishlist:', error);
    }
  };

  const TicketCard = ({ ticket }) => {
    const [qty, setQty] = useState(0);

    const handleSubmit = (event) => {
      event.preventDefault();
      handleAddToWishlist(ticket.eventId, ticket.eventName, ticket.unitPrice, qty);
    };

    return (
      <div className="bg-background relative overflow-x-auto shadow-md sm:rounded-lg px-5 py-5">
        <div className="bg-accent bg-opacity-100 h-[17rem] rounded-xl flex justify-between items-center">
          <div className="bg-accent rounded-xl h-[15rem] w-[35rem]">
            <img src="./images/tick+1.png" alt="" />
          </div>

          <div div={ticket._id} className="pl-[5rem] mr-[5rem]">
            <div className="mr-[12rem] flex items-center mb-1 mt-10 text-primary text-sm">
              <p>Event ID - {ticket.eventId}</p>
            </div>
            <div className="mr-[12rem] flex items-center mb-2 text-primary text-2xl">
              <p>{ticket.eventName}</p>
            </div>
            <div className="mr-[12rem] flex items-center mb-2 text-primary text-sm">
              <p>{ticket.unitPrice} LKR</p>
            </div>
            <div className="mr-[12rem] flex items-center mb-2 text-primary text-sm">
              <form onSubmit={handleSubmit}>
                <p className="text-background">
                  Add to Wishlist!{' '}
                  <Counter value={qty} onChange={(value) => setQty(value)} />
                </p>
                <button
                  type="submit"
                  className="bg-primary text-background h-[3rem] w-[3.25rem] rounded hover:scale-95 transition text-xl mt-1"
                >
                  <div className="flex items-center justify-center">
                    <FaShoppingCart />
                  </div>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="bg-background h-[8rem] px-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="text-primary text-4xl px-3">
            <MdOutlineTravelExplore />
          </div>
          <div className="text-primary text-4xl text-bold">Explore Tickets</div>
        </div>
        <div className="relative">
          <HiOutlineSearch fontSize={20} className="text-primary absolute top-1/2 -translate-y-1/2 left-3" />
          <input
            type="text"
            placeholder="Search Your Favour... "
            className="text-xl text-text focus:outline-none active:outlines-none h-10 w-[24rem] border-2 border-primary rounded-lg pl-10 pr-4"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div>
        {filteredTickets.map((ticket) => <TicketCard key={ticket._id} ticket={ticket} />)}
      </div>
    </div>
  );
}
