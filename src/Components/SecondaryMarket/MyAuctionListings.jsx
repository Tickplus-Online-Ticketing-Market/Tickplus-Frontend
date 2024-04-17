import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";

import { HiSearch } from "react-icons/hi";
import { MdAddCircle, MdAttachMoney, MdDateRange } from "react-icons/md";
import { FaEye, FaTrashAlt } from "react-icons/fa";
import { MdEditSquare } from "react-icons/md";
import { FaTicket } from "react-icons/fa6";

import currentLoggedinUser from "./lib/helpers/getCurrentLoggedinUser";
import ticketDesign from "../../Assets/SecondaryMarket/img/Ticket Design Size Example.png";

export default function MyAuctionListings() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div className=" overflow-auto">
      <div className=" overflow-auto flex flex-row justify-between bg-gray-200 border-none mx-6 my-5">
        <div className=" bg-background px-4 flex flex-row justify-between items-center border-[2.4px] border-primary rounded-full gap-2 text-primary">
          <span className="text-xl">{<HiSearch />}</span>
          <input
            type="text"
            placeholder="Search tickets, artists, events and more..."
            className=" bg-background focus:outline-none active:outline-none h-8 w-96 text-text placeholder-primary place-items-start border-none bg-none pb-0.5 italic"
          />
        </div>

        <button
          type="button"
          class="text-white bg-primary hover:bg-background hover:text-primary border-primary border-[2.4px] focus:outline-none font-medium rounded-full px-10 py-2 text-center inline-flex items-center"
          onClick={() => setShowModal(true)}
        >
          <span className=" text-2xl me-4">{<MdAddCircle />}</span>
          Add New Auction Listing
        </button>
      </div>
      <DataValidation data={RetriveMyAuctionListingsData()} />
      <CreateModal onClose={() => setShowModal(false)} visible={showModal} />
    </div>
  );
}

function DataValidation({ data }) {
  if (data === null) {
    return <div className="flex justify-center p-10">No data received!</div>;
  } else {
    const filteredData = data.filter(
      (item) => item.spectatorId == currentLoggedinUser.currentUserRoleId
    );
    return <TableDraw tableData={filteredData} />;
  }
}

function RetriveMyAuctionListingsData() {
  const [auctionListings, setAuctionListings] = useState(null);

  useEffect(() => {
    fetchAuctionListings();
  }, []);

  const fetchAuctionListings = async () => {
    try {
      const res = await axios.get(
        "http://localhost:3030/secondary-market/my-auction-listings"
      );
      setAuctionListings(res.data.auctionListings);
    } catch (error) {
      console.error("Error fetching Auction Listings:", error);
      setAuctionListings([]);
    }
  };

  return auctionListings || []; // Return an empty array if data is not yet fetched
}

function TableDraw({ tableData }) {
  return (
    <div className="overflow-hidden rounded-2xl border-none shadow-md m-5">
      <table className="w-full border-collapse bg-white text-left text-gray-500">
        <thead className="bg-accent">
          <tr>
            <th scope="col" className="px-6 py-4 font-bold text-primary">
              Ticket ID
            </th>
            <th
              scope="col"
              className="px-6 py-4 font-bold text-primary text-center"
            >
              Start Date
            </th>
            <th
              scope="col"
              className="px-6 py-4 font-bold text-primary text-center"
            >
              Auction Days
            </th>
            <th
              scope="col"
              className="px-6 py-4 font-bold text-primary text-center"
            >
              Starting Price
            </th>
            <th
              scope="col"
              className="px-6 py-4 font-bold text-primary text-center"
            >
              Winning Bid
            </th>
            <th
              scope="col"
              className="px-6 py-4 font-bold text-primary text-center"
            >
              Status
            </th>
            <th scope="col" className="px-6 py-4 font-bold text-primary"></th>
          </tr>
        </thead>
        <tbody className="divide-white divide-y-4 border-t-4 border-t-white">
          {tableData.map((item) => (
            <TableRowDraw key={item.id} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TableRowDraw({ item }) {
  const [showModal, setShowModal] = useState(false);
  const rowDataStyles =
    "inline-flex items-center gap-1 text-xs font-semibold text-text text-center";
  return (
    <tr className=" bg-secondary hover:bg-gray-50">
      <td className="px-6 py-4">
        <span className={rowDataStyles}>{item.ticketId}</span>
      </td>
      <td className="px-6 py-4 text-center">
        <span className={rowDataStyles}>
          {moment(item.startDate).format("MMMM Do YYYY")}
        </span>
      </td>
      <td className="px-6 py-4 text-center">
        <span className={rowDataStyles}>{item.auctionDays}</span>
      </td>
      <td className="px-6 py-4 text-center">
        <span className={rowDataStyles}>{item.startingPrice}</span>
      </td>
      <td className="px-6 py-4 text-center">
        <span className={rowDataStyles}>{item.winningBid}</span>
      </td>
      <td className="px-6 py-4 text-center">
        <span className={rowDataStyles}>{item.auctionStatus}</span>
      </td>
      <td className="px-6 py-4">
        <div className="flex justify-end gap-4 text-primary content-baseline">
          <button className="text-[1.55rem]" x-data="{ tooltip: 'View' }">
            {<FaEye />}
          </button>
          <button className="text-2xl" x-data="{ tooltip: 'Edit' }">
            {<MdEditSquare />}
          </button>
          <button className="text-[1.25rem]" x-data="{ tooltip: 'Delete' }">
            {<FaTrashAlt />}
          </button>
        </div>
      </td>
    </tr>
  );
}

const CreateModal = ({ visible, onClose }) => {
  if (!visible) return null;

  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
  };

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-text bg-opacity-30 backdrop-blur-sm flex justify-center items-center"
    >
      <div className="bg-white p-0 rounded-2xl flex flex-row max-w-[70%] h-[80%] overflow-hidden">
        <div class=" flex-[0.9] flex-col gap-4 bg-accent p-6 rounded-2xl">
          <div class="relative overflow-hidden bg-cover bg-no-repeat aspect-video">
            <img class="rounded-lg" src={ticketDesign} alt="" />
          </div>
          <div className=" my-6 flex-col items-center justify-center">
            <h3 className="mb-2 text-lg font-bold leading-tight text-white text-center">
              Extreme Music event
            </h3>
            <p className="mb-2 text-base text-neutral-600 dark:text-neutral-200 text-justify text-secondary">
              Some quick example text.
            </p>
          </div>
        </div>
        <div class="w-fit flex-1 p-10">
          <form class=" items-center align-middle w-fit">
            <input
              type="hidden"
              id="spectatorId"
              name="spectatorId"
              value={currentLoggedinUser.currentUserRoleId}
            />
            <input
              type="hidden"
              id="auctionStatus"
              name="auctionStatus"
              value="Active"
            />
            <input
              type="hidden"
              id="startDate"
              name="startDate"
              value={new Date().toISOString()}
            />

            <div className=" bg-background px-4 flex flex-row justify-start items-center border-[2.4px] border-primary rounded-full gap-2 text-primary">
              <span className="text-xl">{<HiSearch />}</span>
              <input
                type="text"
                placeholder="Search tickets by Ticket Number ..."
                className=" text-start bg-background focus:outline-none active:outline-none h-8 w-96 text-text placeholder-primary border-none bg-none pb-0.5 italic"
              />
            </div>
            <div class="grid grid-cols-3 gap-y-10 my-20 justify-around">
              <div>
                <h5 className=" font-medium leading-tight text-text py-4">
                  Ticket Number
                </h5>
              </div>
              <div className="col-span-2 bg-background px-4 flex flex-row justify-start items-center border-[2.4px] border-primary rounded-full gap-2 text-primary">
                <span className="text-xl">{<FaTicket />}</span>
                <input
                  type="text"
                  required
                  placeholder="Ticket Number"
                  className=" text-start bg-background focus:outline-none active:outline-none h-8 w-96 text-text placeholder-primary border-none bg-none pb-0.5"
                />
              </div>

              <div>
                <h5 className=" font-medium leading-tight text-text py-4">
                  Starting Price
                </h5>
              </div>
              <div className="col-span-2 bg-background px-4 flex flex-row justify-start items-center border-[2.4px] border-primary rounded-full gap-2 text-primary">
                <span className="text-xl">{<MdAttachMoney />}</span>
                <input
                  type="text"
                  required
                  placeholder="Starting Price"
                  className=" text-start bg-background focus:outline-none active:outline-none h-8 w-96 text-text placeholder-primary border-none bg-none pb-0.5"
                />
              </div>

              <div>
                <h5 className=" font-medium leading-tight text-text py-4">
                  Auction Duration
                </h5>
              </div>
              <div className="col-span-2 bg-background px-4 flex flex-row justify-start items-center border-[2.4px] border-primary rounded-full gap-2 text-primary">
                <span className="text-xl">{<MdDateRange />}</span>
                <select
                  type="select"
                  required
                  placeholder="Auction Duration"
                  className=" text-start bg-background focus:outline-none active:outline-none h-8 w-96 text-text placeholder-primary border-none bg-none pb-0.5"
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
                  class="text-white bg-primary hover:bg-background hover:text-primary border-primary border-[2.4px] focus:outline-none font-medium rounded-full px-10 py-2 text-center inline-flex items-center"
                >
                  Publish Listing
                </button>
              </div>
              <div className="max-h-6">
                <button
                  type="button"
                  class="hover:text-white hover:bg-accent bg-background text-accent border-accent border-[2.4px] focus:outline-none font-medium rounded-full px-10 py-2 text-center inline-flex items-center"
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
};
