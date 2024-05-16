import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import image from "../../Assets/TicketLaunching/image.png";

const UpdateTicketModal = ({ event, onClose, visible, imageURL, buttonState }) => {
  const [updatedEvent, setUpdatedEvent] = useState({
    eventname: event.eventname,
    date: event.date,
    venue: event.venue,
    time: event.time,
    ticketMode: event.ticketMode,
    ticketQuantity: event.ticketQuantity,
    ticketPrice: event.ticketPrice,
    imageUrl: event.imageUrl,
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [previewURL, setPreviewURL] = useState(null);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    const newErrors = {};

    if (!updatedEvent.eventname) {
      newErrors.eventname = "Event name is required";
    }

    if (!updatedEvent.date) {
      newErrors.date = "Date is required";
    }

    if (!updatedEvent.venue) {
      newErrors.venue = "Venue is required";
    }

    if (!updatedEvent.time) {
      newErrors.time = "Time is required";
    }

    if (!updatedEvent.ticketQuantity || updatedEvent.ticketQuantity <= 0) {
      newErrors.ticketQuantity = "Ticket quantity must be greater than 0";
    }

    if (!updatedEvent.ticketPrice || updatedEvent.ticketPrice <= 0) {
      newErrors.ticketPrice = "Ticket price must be greater than 0";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        await axios.put(
          `http://localhost:3030/ticket-launching/ticketfoam/${event._id}`,
          updatedEvent
        );

        toast.success("Ticket updated successfully");
        onClose();
      } catch (error) {
        console.error("Error updating ticket:", error);
        toast.error("Failed to update ticket");
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedEvent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImagePreview = () => {
    setPreviewURL(updatedEvent.imageUrl);
  };

  if (!visible) return null;

  return (
    <>
      <div className="fixed inset-0 bg-accent bg-opacity-0 backdrop-blur-sm flex justify-center items-center shadow-2xl">
        <div className="bg-secondary shadow-2xl h-[36rem] w-[50rem] rounded-lg">
          <div className="flex">
            <div className="bg-accent h-[36rem] w-[25rem] rounded-lg">
              <div className="flex items-center gap-2 px-1 py-3">
                <img src={image} alt="description" />
              </div>
              <div className="pl-2 pt-3">
                <div className="bg-background aspect-video max-w-sm rounded-lg">
                  {previewURL && <img src={previewURL} alt="Preview" />}
                </div>
              </div>
              <div className="pl-2 pt-4">
                <label className="block text-background text-base font-semibold">
                  Image URL
                </label>
                <input
                  type="text"
                  name="imageUrl"
                  value={updatedEvent.imageUrl}
                  onChange={handleChange}
                  className="block w-96 p-2 border border-primary rounded-md shadow-lg text-base"
                  placeholder="Enter image URL"
                />
              </div>
              <div className="flex justify-center pt-3">
                <button
                  onClick={handleImagePreview}
                  className="bg-primary h-10 w-72 font-bold rounded-full py-2 text-background 
                    transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-2xl hover:bg-background hover:text-primary duration-300"
                >
                  Show Preview
                </button>
              </div>
            </div>
            <div className="bg-box3 shadow-2xl h-[36rem] w-[25rem] rounded-lg scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb scrollbar-track  overflow-y-scroll">
              <form onSubmit={handleUpdate} className="space-y-2 space-x-8">
                <div className="font-bold text-primary flex justify-center text-3xl pt-2 pl-4 ">
                  Ticket Details
                </div>

                <div>
                  <label className="block text-base font-semibold">
                    Event Name
                  </label>
                  <input
                    type="text"
                    name="eventname"
                    value={updatedEvent.eventname}
                    onChange={handleChange}
                    className="block w-full p-2 border border-primary rounded-md shadow-lg text-base"
                    placeholder="Enter event name"
                    required
                  />
                  {submitted && errors.eventname && (
                    <p className="text-red font-semibold text-base">
                      {errors.eventname}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-base font-semibold">
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={updatedEvent.date}
                    onChange={handleChange}
                    className="block w-full p-2 border border-primary rounded-md shadow-lg text-base"
                    required
                  />
                  {submitted && errors.date && (
                    <p className="text-red font-semibold text-base">
                      {errors.date}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-base font-semibold">
                    Venue
                  </label>
                  <input
                    type="text"
                    name="venue"
                    value={updatedEvent.venue}
                    onChange={handleChange}
                    className="w-full p-2 border border-primary rounded-md shadow-lg text-base"
                    placeholder="Enter venue"
                    required
                  />
                  {submitted && errors.venue && (
                    <p className="text-red font-semibold text-base">
                      {errors.venue}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-base font-semibold">
                    Time
                  </label>
                  <input
                    type="time"
                    name="time"
                    value={updatedEvent.time}
                    onChange={handleChange}
                    className="block w-full p-2 border border-primary rounded-md shadow-lg text-base"
                    required
                  />
                  {submitted && errors.time && (
                    <p className="text-red font-semibold text-base">
                      {errors.time}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-base font-semibold">
                    Ticket Quantity
                  </label>
                  <input
                    type="number"
                    name="ticketQuantity"
                    value={updatedEvent.ticketQuantity}
                    onChange={handleChange}
                    className="block w-full p-2 border border-primary rounded-md shadow-lg text-base"
                    placeholder="Enter ticket quantity"
                    min="0"
                    required
                  />
                  {submitted && errors.ticketQuantity && (
                    <p className="text-red font-semibold text-base">
                      {errors.ticketQuantity}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-base font-semibold">
                    Ticket Price
                  </label>
                  <input
                    type="number"
                    name="ticketPrice"
                    value={updatedEvent.ticketPrice}
                    onChange={handleChange}
                    className="block w-full p-2 border border-primary rounded-md shadow-lg text-base"
                    placeholder="Enter ticket price"
                    min="0"
                    required
                  />
                  {submitted && errors.ticketPrice && (
                    <p className="text-red font-semibold text-base">
                      {errors.ticketPrice}
                    </p>
                  )}
                </div>

                <div className="flex justify-center pt-4 pr-6 gap-3">
                  <button
                    type="submit"
                    disabled={buttonState === "published"} // Disable the button based on buttonState
                    className={`bg-${buttonState === "published" ? "accent" : "primary"} h-10 w-28 font-bold rounded-full py-2 text-background 
                      transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-2xl hover:bg-background hover:text-primary duration-300`}
                  >
                    Update
                  </button>
                  <button
                    onClick={onClose}
                    className="bg-accent h-10 w-28 font-bold rounded-full py-2 text-background 
                    transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-2xl hover:bg-background hover:text-accent duration-300"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateTicketModal;
