import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
import Delete from './Delete';
import Publish from './Publish';
import ticket from './ticket.png';
import { HiOutlineSearch } from 'react-icons/hi';
import Ticketphistory from './Ticketphistory';


const TicketItem = ({ event, number, onDelete, onPublish }) => {
  const { _id, eventname } = event;

  const [showPublish, setShowPublish] = useState(false);
  const handlepublishOnClose = () => setShowPublish(false);

  const [showDelete, setShowDelete] = useState(false);
  const handleOnClose = () => setShowDelete(false);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3030/ticketfoam/${_id}`);
      onDelete(_id); // Update the state in the parent component after successful deletion
      setShowDelete(false);
      toast.success('Delete successful');
    } catch (error) {
      console.error('Error deleting event:', error);
      toast.error('Failed to delete event');
    }
  };
   
  const handlePublish = async () => {
    console.log("Attempting to publish event:", _id);
    try {
      await axios.put(`http://localhost:3030/ticketfoam/${_id}`);
      toast.success('Event published successfully');
      onPublish(event);
    } catch (error) {
      console.error('Error publishing event:', error);
      toast.error('Failed to publish event');
    }
  };
  
  return (
    <div className="bg-box4 p-4 rounded-lg flex items-center justify-between mb-3">
      <div className="flex items-center">
        <span className="text-background font-bold mr-3">{number}.</span>
        <img src={ticket} alt='ticket' className='w-36 h-16 mr-4'/>
        <span className="text-background text-sm">{eventname}</span>
      </div>
      <div className="flex gap-4">
        <button className="bg-boxf text-background rounded-xl font-bold px-10 py-2 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 
           hover:scale-110 hover:shadow-2xl hover:bg-background hover:text-boxf  duration-300 mr-2">Update</button>
        <button onClick={() => setShowDelete(true)}
           className="bg-boxf text-background rounded-xl font-bold px-10 py-2 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 
           hover:scale-110 hover:shadow-2xl hover:bg-background hover:text-boxf  duration-300 mr-2">Delete</button>
        <button onClick={() => setShowPublish(true)}
           className="bg-boxf text-background rounded-xl font-bold px-10 py-2 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 
           hover:scale-110 hover:shadow-2xl hover:bg-background hover:text-boxf  duration-300">Publish</button>
      </div>
      <Publish visible={showPublish} onClose={handlepublishOnClose} onConfirm={handlePublish} event={event} />

      <Delete onDelete={handleDelete} onClose={handleOnClose} visible={showDelete} />
    </div>
  );
}

const TicketList = ({ searchTerm }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:3030/ticketfoam');
        setEvents(res.data.ticketfoam);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };
  
    fetchData();
  }, []);
  
  const handleDeleteItem = (deletedId) => {
    setEvents(events.filter(event => event._id !== deletedId));
  };

  const handlePublishItem = async (publishedEvent) => {
    setEvents(prevEvents => 
      prevEvents.map(event => 
        event._id === publishedEvent._id ? {...event, status: 'Published'} : event
      )
    );
  };
  
  const filteredEvents = events.filter(event => 
    event.eventname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-900 min-h-screen">
      {Array.isArray(filteredEvents) && filteredEvents.length > 0 ? (
        filteredEvents.map((event, index) => (
          <TicketItem 
            key={index} 
            event={event} 
            number={index + 1} 
            onDelete={handleDeleteItem} 
            onPublish={handlePublishItem} 
          />
        ))
      ) : (
        <p className='text-background'>No events available</p>
      )}
    </div>
  );
};

export default function Viewtickets() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <div className='flex justify-between pr-5'>
        <div className='text-boxf pl-4 text-4xl pb-3 font-bold'>All your work is here...</div>
        <div className="relative">
          <HiOutlineSearch fontSize={20} className="text-boxf absolute top-1/2 left-3 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search Event tickets..."
            className="text-sm focus:outline-none active:outline-none border border-boxf w-[24rem] h-10 pl-11 pr-4 rounded-lg shadow-xl"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className='scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb scrollbar-track h-[35rem] overflow-y-scroll'>
        <div className='bg-accent rounded-xl'>
          <TicketList searchTerm={searchTerm} />
        </div>
      </div>
      <Ticketphistory />
    </div>
  );
}
