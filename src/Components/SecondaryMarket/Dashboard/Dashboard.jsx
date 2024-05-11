import React, { useEffect, useState } from "react";
import DashboardTicketCarousel from "./DashboardTicketCarousel";
import { ToastContainer } from "react-toastify";
import CompletedAuctionListings from "./CompletedAuctionListings";

import Piecharts from "../Analytics/Chart02";
import { RetriveAuctionListingsByStatus } from "../Analytics/RetriveAuctionListingsByStatus";

export default function Dashboard() {
  const [auctionStatuses, setAuctionStatuses] = useState([]);

  useEffect(() => {
    RetriveAuctionListingsByStatus()
      .then((data) => {
        setAuctionStatuses(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className=" overflow-y-visible">
      <div className="h-1/3 bg-accent">
        <DashboardTicketCarousel />
      </div>

      <div className="flex flex-row justify-evenly bg-gray-200 border-none m-2 overflow-auto">
        <CompletedAuctionListings />
        <Piecharts data={auctionStatuses} />
      </div>
      <ToastContainer />
    </div>
  );
}
