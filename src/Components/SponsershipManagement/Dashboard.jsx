import React, { useState, useEffect } from "react";
import { HiSearch } from "react-icons/hi";
import MyModal2 from "./MyModal2";
import axios from "axios";
import { toast } from 'react-toastify';

export default function Dashboard() {
  const [events, setEvents] = useState([]);
  const [showMyModal, setShowMyModal] = useState(false);
  const [selectedRequest, setSelectedRequest] = useState(null); // State to store the selected event details
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch data from backend when component mounts
    getAllEvents();
  }, []);

  const getAllEvents = async () => {
    try {
      const res = await axios.get('https://tickplus-backend.onrender.com/sponsership-management/event');
      setEvents(res.data.events);
      console.log(res);
    } catch (error) {
      toast.error("Cannot Connect to Database");
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleOnClose = () => setShowMyModal(false);

  // Filter events based on search term
  const filteredEvents = events.filter((event) =>
    event.name && event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Function to handle when "Make A Request" button is clicked
  const handleMakeRequest = (event) => {
    setSelectedRequest(event); // Set the selected event details
    setShowMyModal(true); // Open the modal
  };

  return (
    <div className="overflow-y-visible">
      {/* Search bar and title */}
      <div className="flex flex-row justify-between bg-gray-200 border-none mx-6 my-5 max-h-12">
        <div className="bg-background px-4 flex flex-row justify-between items-center border-[2.4px] border-primary rounded-full gap-2 text-primary">
          <span className="text-xl">{<HiSearch />}</span>
          <input
            type="text"
            placeholder="Search events"
            className="bg-background focus:outline-none active:outline-none h-8 w-96 text-text placeholder-primary place-items-start border-none bg-none pb-0.5 italic"
            value={searchTerm}
            onChange={handleInputChange}
          />
        </div>
        <div className="text-primary text-3xl font-bold">
          <h1>Trending Events</h1>
        </div>
      </div>

      {/* Grid layout for event cards */}
      <div className="grid grid-cols-3 gap-4 p-6">
        {filteredEvents.map((event) => (
          <div key={event._id} className="bg-accent rounded-lg shadow-lg">
            <div className="overflow-hidden bg-cover bg-no-repeat aspect-video">
              <img className="rounded-t-lg w-full aspect-video" src={event.image} alt="" />
            </div>
            <div className="p-4 aspect-video">
              <button
                onClick={() => handleMakeRequest(event)}
                type="button"
                className="m-3 rounded-lg px-3 py-1 font-bold bg-primary text-background hover:bg-background hover:text-primary transform hover:scale-110 transition duration-300"
              >
                Make A Request
              </button>
              <h5 className="mb-2 text-2xl font-bold leading-tight text-primary">
                {event.name}
              </h5>
              <div className="flex justify-between items-center">
                <div className="text-primary">
                  <div className="mb-2 text-base">
                    Event ID: {event._id}
                  </div>
                  <div className="mb-2 text-base">
                    Date: {event.date}
                  </div>
                </div>
                <div className="text-primary">
                  <div className="mb-2 text-base">
                    Venue: {event.venue}
                  </div>
                  <div className="mb-2 text-base ">
                    Time: {event.time}
                  </div>
                </div>
              </div>
              <p className="text-primary">Artists: {event.artist}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      <MyModal2 onClose={handleOnClose} visible={showMyModal} event={selectedRequest} />
    </div>
  );
}
