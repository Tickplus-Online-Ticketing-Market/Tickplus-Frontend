import React from "react";
import { Link } from "react-router-dom";
import DashboardTicketCarousel from "./DashboardTicketCarousel";
import { MdAddCircle } from "react-icons/md";
import { HiSearch } from "react-icons/hi";

import TableDraw from "../shared/TableDraw";

export default function Dashboard() {
  return (
    <div className=" overflow-y-visible">
      <div className="flex flex-row justify-between bg-gray-200 border-none mx-6 my-5 max-h-12">
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
        >
          <span className=" text-2xl me-4">{<MdAddCircle />}</span>
          Add New Auction Listing
        </button>
      </div>

      <div className="h-1/3 bg-accent">
        <DashboardTicketCarousel />
      </div>

      <div className="flex flex-row justify-between bg-gray-200 border-none m-2 overflow-auto">
        <button
          type="button"
          class="text-white bg-primary hover:bg-background hover:text-primary border-primary border-[2.4px] focus:outline-none font-medium rounded-full px-10 py-2 text-center inline-flex items-center"
        >
          <span className=" text-2xl me-4">{<MdAddCircle />}</span>
          Add New Auction Listing
        </button>
      </div>
    </div>
  );
}
