import React, { useState } from "react";
import axios from "axios";
import { HiSearch } from "react-icons/hi";
import { MdAttachMoney, MdDateRange } from "react-icons/md";
import { FaTicket } from "react-icons/fa6";
import currentLoggedinUser from "./lib/helpers/getCurrentLoggedinUser";
import ticketDesign from "../../Assets/SecondaryMarket/img/Ticket Design Size Example.png";

export function CreateModal({ visible, onClose }) {
  if (!visible) return null;

  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  const [createForm, setCreateForm] = useState({
    ticketId: "",
    spectatorId: currentLoggedinUser.currentUserRoleId,
    startingPrice: "",
    startDate: new Date().toISOString(),
    auctionDays: 2,
    winningBid: "No Bids Placed",
    auctionStatus: "Active",
  });

  const updateCreateFormField = (e) => {
    const { name, value } = e.target;

    setCreateForm({
      ...createForm,
      [name]: value,
    });
  };

  const createAuctionListing = async (e) => {
    e.preventDefault();
    console.log(createForm);

    try {
      const res = await axios.post(
        "http://localhost:3030/secondary-market/my-auction-listings",
        createForm
      );

      setCreateForm({
        ticketId: "",
        spectatorId: currentLoggedinUser.currentUserRoleId,
        startingPrice: "",
        startDate: new Date().toISOString(),
        auctionDays: 2,
        winningBid: "No Bids Placed",
        auctionStatus: "Active",
      });

      onClose();
    } catch (error) {
      console.error("Error creating auction listing:", error);
      // Handle error, show error message to user
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
            onSubmit={createAuctionListing}
            className="items-center align-middle w-fit"
          >
            <input
              type="hidden"
              name="spectatorId"
              value={createForm.spectatorId}
            />
            <input
              type="hidden"
              name="auctionStatus"
              value={createForm.auctionStatus}
            />
            <input
              type="hidden"
              name="startDate"
              value={createForm.startDate}
            />

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
                  value={createForm.ticketId}
                  onChange={updateCreateFormField}
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
                  value={createForm.startingPrice}
                  onChange={updateCreateFormField}
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
                  placeholder="Auction Duration"
                  className="text-start bg-background focus:outline-none active:outline-none h-8 w-96 text-text placeholder-primary border-none bg-none pb-0.5"
                  value={createForm.auctionDays}
                  onChange={updateCreateFormField}
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
                  Publish Listing
                </button>
              </div>
              <div className="max-h-6">
                <button
                  type="button"
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
