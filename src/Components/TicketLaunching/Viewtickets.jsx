import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import Delete from "./Delete";
import Publish from "./Publish";
import { HiOutlineSearch } from "react-icons/hi";
import Ticketphistory from "./Ticketphistory";
import UpdateTicketModal from "./UpdateTicketModal";

const TicketItem = ({ event, number, onDelete, onPublish }) => {
  const { _id, eventname } = event;


  const [showPublish, setShowPublish] = useState(false);

  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const handleUpdateFormOpen = () => {
    setShowUpdateForm(true);
  };

  const [showDelete, setShowDelete] = useState(false);
  const handleOnClose = () => setShowDelete(false);

  const handleDelete = async () => {
    try {
      // Delete the ticket
      await axios.delete(
        `http://localhost:3030/ticket-launching/ticketfoam/${_id}`
      );

      // Update the state in the parent component after successful deletion
      onDelete(_id);

      setShowDelete(false);
      toast.success("Delete successful");
    } catch (error) {
      console.error("Error deleting event:", error);
      toast.error("Failed to delete event");
    }
  };

  const handlePublish = async () => {
    console.log("Attempting to publish event:", _id);
    try {
      await axios.put(
        `http://localhost:3030/ticket-launching/ticketfoam/publish/${_id}`
      );
      toast.success("Event published successfully");
      onPublish(event);
      setShowPublish(true);
    } catch (error) {
      console.error("Error publishing event:", error);
      toast.error("Failed to publish event");
    }
  };

  return (
    <div className="bg-box4 p-4 rounded-lg flex items-center justify-between mb-3">
      <div className="flex items-center">
        <span className="text-background font-bold mr-3">{number}.</span>
        <img src={event.imageUrl} alt="ticket" className="w-36 h-16 mr-4" />
        <span className="text-background text-xl font-bold">{eventname}</span>
      </div>
      <div className="flex gap-4">
      {showPublish || event.ticketStatus === "Published" ? (
          <button
            disabled
            className="bg-accent text-background rounded-xl font-bold px-4 py-2 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 duration-300"
          >
            " "
          </button>
        ) : (
          <button
            onClick={handleUpdateFormOpen}
            className="bg-primary text-background rounded-xl font-bold px-4 py-2 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-2xl hover:bg-background hover:text-primary duration-300"
          >
            Update
          </button>
        )}
        <button
          onClick={() => setShowDelete(true)}
          className="bg-primary text-background rounded-xl font-bold px-4 py-2 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 
           hover:scale-110 hover:shadow-2xl hover:bg-background hover:text-primary  duration-300 mr-2"
        >
          Delete
        </button>
        {showPublish || event.ticketStatus === "Published" ? (
          <button
            disabled
            className="bg-[#33a033] text-background rounded-xl font-bold px-4 py-2 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 duration-300"
          >
            Published
          </button>
        ) : (
          <button
            onClick={handlePublish}
            className="bg-primary text-background rounded-xl font-bold px-4 py-2 shadow-xl transition ease-in-out delay-150 hover:-translate-y-1 
  hover:scale-110 hover:shadow-2xl hover:bg-background hover:text-primary  duration-300"
          >
            Publish
          </button>
        )}
      </div>
      <Publish visible={showPublish} onConfirm={handlePublish} event={event} />
      <Delete
        onDelete={handleDelete}
        onClose={handleOnClose}
        visible={showDelete}
        event={event}
      />
      <UpdateTicketModal
        event={event}
        onClose={() => setShowUpdateForm(false)}
        visible={showUpdateForm}
      />
    </div>
  );
};

const TicketList = ({ searchTerm }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:3030/ticket-launching/ticketfoam"
        );
        setEvents(res.data.ticketfoam.reverse());
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };

    fetchData();
  }, []);

  const handleDeleteItem = (deletedId) => {
    setEvents(events.filter((event) => event._id !== deletedId));
  };

  const handlePublishItem = async (publishedEvent) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event._id === publishedEvent._id
          ? { ...event, status: "Published" }
          : event
      )
    );
  };

  const filteredEvents = events.filter((event) =>
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
        <p className="text-background">No events available</p>
      )}
    </div>
  );
};

export default function Viewtickets({ handleCloseModal }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <div className="flex justify-between pr-5">
        <div className="text-primary pl-4 text-3xl pb-3 font-bold">
          All your work is here...
        </div>
        <div className="relative">
          <HiOutlineSearch
            fontSize={20}
            className="text-primary absolute top-1/3 left-3 -translate-y-1/2"
          />
          <input
            type="text"
            placeholder="Search Event tickets..."
            className="text-base focus:outline-none active:outline-none border border-primary w-[24rem] h-10 pl-11 pr-4 rounded-lg shadow-xl"
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb scrollbar-track h-[35rem] overflow-y-scroll">
        <div className="bg-accent rounded-xl">
          <TicketList searchTerm={searchTerm} />
        </div>
      </div>
      <Ticketphistory />
    </div>
  );
}
