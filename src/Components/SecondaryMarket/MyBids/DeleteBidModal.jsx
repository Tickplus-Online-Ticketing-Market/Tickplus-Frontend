import React, { useState } from "react";
import axios from "axios";
import { FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function DeleteBidModal({ visible, onClose, bidID }) {
  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
    if (e.target.id === "cancel-btn") onClose();
  };

  const deleteBidListing = async (e) => {
    try {
      const res = await axios.delete(
        `https://tickplus-backend.onrender.com/secondary-market/my-bids/${bidID}`
      );

      toast.success("Bid Deleted");

      onClose();
    } catch (error) {
      toast.error("Bid Not Deleted");
    }
  };

  if (!visible) return null;

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-text bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="bg-white rounded-2xl relative px-4 py-8 w-full max-w-md h-full md:h-auto text-center">
        <div className=" flex text-primary text-4xl text-center justify-center p-4">
          <FaTrashAlt />
        </div>

        <p className=" mb-8 text-text font-semibold text-xl">
          Are you sure you want to delete this item?
        </p>

        <div className="flex justify-center p-4">
          <div className="mx-2">
            <button
              type="button"
              className="text-white bg-primary hover:bg-background hover:text-primary border-primary border-[2.4px] focus:outline-none font-medium rounded-full px-10 py-2 text-center inline-flex items-center"
              onClick={deleteBidListing}
            >
              Delete Listing
            </button>
          </div>
          <div className=" mx-2">
            <button
              type="button"
              id="cancel-btn"
              className="hover:text-white hover:bg-accent bg-background text-accent border-accent border-[2.4px] focus:outline-none font-medium rounded-full px-10 py-2 text-center inline-flex items-center"
              onClick={handleOnClose}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
