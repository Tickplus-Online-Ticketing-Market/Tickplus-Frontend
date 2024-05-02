import React, { useEffect, useState } from "react";
import axios from "axios";
import { HiSearch } from "react-icons/hi";
import { MdAttachMoney, MdDateRange } from "react-icons/md";
import { FaTicket } from "react-icons/fa6";
import { toast } from "react-toastify";
import ticketDesign from "../../../Assets/SecondaryMarket/img/Ticket Design Size Example.png";
import { RetriveBidById } from "./RetriveMyBidsById";

export function UpdateBidModal({ visible, onClose, auctionID }) {
  if (!visible) return null;

  const [inputs, setInputs] = useState({});

  useEffect(() => {
    const fetchHandler = async () => {
      //fetch exissting data from
      try {
        // form allows users to input or update name, status, and code, as
        const res = await axios.get(
          `http://localhost:3030/secondary-market/my-auction-listings/${auctionID}`
        );
        setInputs(res.data.auctionListing);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchHandler();
  }, [auctionID]);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  // my code

  const handleOnClose = (e) => {
    if (e.target.id === "container" || e.target.id === "cancel-btn") onClose();
  };

  const updateAuctionListing = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.put(
        `http://localhost:3030/secondary-market/my-auction-listings/${auctionID}`,
        updateForm
      );

      toast.success("Auction Listing Updated");

      onClose();
    } catch (error) {
      toast.error("Auction Listing Not Updated");
    }
  };

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-text bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="bg-white p-0 rounded-2xl flex flex-row max-w-[70%] h-[80%] overflow-hidden">
        <div className="flex-[0.9] flex-col gap-4 bg-accent p-6 rounded-2xl">
          <div className="relative overflow-hidden bg-cover bg-no-repeat aspect-video">
            <img className="rounded-lg" src={ticketDesign} alt="" />
          </div>
          <div className="my-6 flex-col items-center justify-center">
            <h3 className="mb-2 text-lg font-bold leading-tight text-white text-center">
              Extreme Music event
            </h3>
            <p className="mb-2 text-base text-neutral-600 dark:text-neutral-200 text-justify text-secondary">
              Some quick example text.
            </p>
          </div>
        </div>
        <div className="w-fit flex-1 p-10">
          <div className="bg-background px-4 flex flex-row justify-start items-center border-[2.4px] border-primary rounded-full gap-2 text-primary">
            <span className="text-xl">
              <HiSearch />
            </span>
            <input
              type="text"
              placeholder="Search tickets by Ticket Number ..."
              className="text-start bg-background focus:outline-none active:outline-none h-8 w-96 text-text placeholder-primary border-none bg-none pb-0.5 italic"
            />
          </div>
          <form
            onSubmit={updateAuctionListing}
            className="items-center align-middle w-fit"
          >
            <input
              type="hidden"
              name="spectatorId"
              value={inputs.spectatorId}
            />
            <input
              type="hidden"
              name="auctionStatus"
              value={inputs.auctionStatus}
            />
            <input type="hidden" name="startDate" value={inputs.startDate} />

            <div className="grid grid-cols-3 gap-y-10 my-20 justify-around">
              <div>
                <h5 className="font-medium leading-tight text-text py-4">
                  Ticket Number
                </h5>
              </div>
              <div className="col-span-2 bg-background px-4 flex flex-row justify-start items-center border-[2.4px] border-primary rounded-full gap-2 text-primary">
                <span className="text-xl">
                  <FaTicket />
                </span>
                <input
                  name="ticketId"
                  type="text"
                  required
                  placeholder="Ticket Number"
                  className="text-start bg-background focus:outline-none active:outline-none h-8 w-96 text-text placeholder-primary border-none bg-none pb-0.5"
                  value={inputs.ticketId}
                  onChange={handleChange}
                />
              </div>

              <div>
                <h5 className="font-medium leading-tight text-text py-4">
                  Starting Price
                </h5>
              </div>
              <div className="col-span-2 bg-background px-4 flex flex-row justify-start items-center border-[2.4px] border-primary rounded-full gap-2 text-primary">
                <span className="text-xl">
                  <MdAttachMoney />
                </span>
                <input
                  name="startingPrice"
                  type="text"
                  required
                  placeholder="Starting Price"
                  className="text-start bg-background focus:outline-none active:outline-none h-8 w-96 text-text placeholder-primary border-none bg-none pb-0.5"
                  value={inputs.startingPrice}
                  onChange={handleChange}
                />
              </div>

              <div>
                <h5 className="font-medium leading-tight text-text py-4">
                  Auction Duration
                </h5>
              </div>
              <div className="col-span-2 bg-background px-4 flex flex-row justify-start items-center border-[2.4px] border-primary rounded-full gap-2 text-primary">
                <span className="text-xl">
                  <MdDateRange />
                </span>
                <select
                  name="auctionDays"
                  type="select"
                  required
                  className="text-start bg-background focus:outline-none active:outline-none h-8 w-96 text-text placeholder-primary border-none bg-none pb-0.5"
                  value={inputs.auctionDays}
                  onChange={handleChange}
                >
                  <option value={2}>2 days</option>
                  <option value={3}>3 days</option>
                  <option value={7}>7 days</option>
                  <option value={14}>14 days</option>
                  <option value={21}>21 days</option>
                  <option value={30}>30 days</option>
                </select>
              </div>

              <div className="col-span-2 max-h-6">
                <button
                  type="submit"
                  className="text-white bg-primary hover:bg-background hover:text-primary border-primary border-[2.4px] focus:outline-none font-medium rounded-full px-10 py-2 text-center inline-flex items-center"
                >
                  Update Listing
                </button>
              </div>
              <div className="max-h-6">
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
          </form>
        </div>
      </div>
    </div>
  );
}