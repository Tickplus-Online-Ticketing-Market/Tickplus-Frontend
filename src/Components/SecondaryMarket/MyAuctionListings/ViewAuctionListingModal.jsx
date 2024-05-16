import React from "react";
import moment from "moment";
import { FaRupeeSign, FaClock, FaTicket } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import ticketDesign from "../../../Assets/SecondaryMarket/img/Ticket Design Size Example.png";
import { RetriveAuctionListingsDataById } from "./RetriveAuctionListingDataById";
import ExampleQRcode from "../../../Assets/SecondaryMarket/img/Example-QR-code.jpg";

export function ViewAuctionModal({ visible, onClose, auctionID }) {
  const data = RetriveAuctionListingsDataById(auctionID);

  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
    if (e.target.id === "cancel-btn") onClose();
  };

  if (!visible) return null;

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
              Taylor Swift: The Eras Tour
            </h3>
            <p className="mb-2 text-base text-neutral-600 dark:text-neutral-200 text-justify text-secondary">
              Tickets On Sale Available Now - Eras Tour | Tickets 2024. Taylor
              Swift performs hit songs in a once-in-a-lifetime concert
              experience.
            </p>

            <div className="flex col-span-2">
              <div className="p-4">
                <img
                  className="rounded-lg"
                  src={ExampleQRcode}
                  alt="ExampleQRcode"
                  width={150}
                />
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="w-fit flex-1 p-10">
          <form className="items-center align-middle w-fit">
            <input type="hidden" name="spectatorId" value={data.spectatorId} />

            <div className="grid grid-cols-3 gap-y-10 justify-around">
              <div>
                <h5 className="font-medium leading-tight text-text py-4 disabled">
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
                  value={data.ticketId}
                />
              </div>

              <div>
                <h5 className="font-medium leading-tight text-text py-4">
                  Starting Price
                </h5>
              </div>
              <div className="col-span-2 bg-background px-4 flex flex-row justify-start items-center border-[2.4px] border-primary rounded-full gap-2 text-primary">
                <span className="text-xl">
                  <FaRupeeSign />
                </span>
                <input
                  name="startingPrice"
                  type="text"
                  required
                  placeholder="Starting Price"
                  className="text-start bg-background focus:outline-none active:outline-none h-8 w-96 text-text placeholder-primary border-none bg-none pb-0.5"
                  value={data.startingPrice}
                />
              </div>

              <div>
                <h5 className="font-medium leading-tight text-text py-4">
                  Auction Duration
                </h5>
              </div>
              <div className="col-span-2 bg-background px-4 flex flex-row justify-start items-center border-[2.4px] border-primary rounded-full gap-2 text-primary">
                <span className="text-xl">
                  <FaClock />
                </span>
                <input
                  name="auctionDays"
                  type="text"
                  required
                  className="text-start bg-background focus:outline-none active:outline-none h-8 w-96 text-text placeholder-primary border-none bg-none pb-0.5"
                  value={data.auctionDays + " days"}
                />
              </div>

              <div>
                <h5 className="font-medium leading-tight text-text py-4">
                  Start Date
                </h5>
              </div>
              <div className="col-span-2 bg-background px-4 flex flex-row justify-start items-center border-[2.4px] border-primary rounded-full gap-2 text-primary">
                <span className="text-xl">
                  <MdDateRange />
                </span>
                <input
                  name="startDate"
                  type="text"
                  required
                  placeholder="Start Date"
                  className="text-start bg-background focus:outline-none active:outline-none h-8 w-96 text-text placeholder-primary border-none bg-none pb-0.5"
                  value={moment(data.startDate).format("MMMM Do YYYY")}
                />
              </div>

              <div>
                <h5 className="font-medium leading-tight text-text py-4">
                  Auction Status
                </h5>
              </div>
              <div className="col-span-2 bg-background px-4 flex flex-row justify-start items-center border-[2.4px] border-primary rounded-full gap-2 text-primary">
                <span className="text-xl">
                  <FaCheck />
                </span>
                <input
                  name="auctionStatus"
                  type="text"
                  required
                  placeholder="Auction Status"
                  className="text-start bg-background focus:outline-none active:outline-none h-8 w-96 text-text placeholder-primary border-none bg-none pb-0.5"
                  value={data.auctionStatus}
                />
              </div>

              <div className="col-start-2 max-h-6 ">
                <button
                  type="button"
                  id="cancel-btn"
                  onClick={handleOnClose}
                  className="text-white bg-primary hover:bg-background hover:text-primary border-primary border-[2.4px] focus:outline-none font-medium rounded-full px-10 py-2 text-center inline-flex items-center"
                >
                  Close
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
