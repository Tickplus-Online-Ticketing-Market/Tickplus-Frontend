import React, { useEffect, useState } from "react";
import DashboardTicketCarousel from "./DashboardTicketCarousel";
import { ToastContainer } from "react-toastify";
import CompletedAuctionListings from "./CompletedAuctionListings";

export default function Dashboard() {
  return (
    <div className=" overflow-y-visible">
      <div className="h-1/3 bg-accent">
        <DashboardTicketCarousel />
      </div>

      <div className="flex flex-row justify-between bg-gray-200 border-none m-2 overflow-auto">
        <CompletedAuctionListings />
      </div>
      <ToastContainer />
    </div>
  );
}
