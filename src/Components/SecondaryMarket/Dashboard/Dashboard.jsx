import React, { useEffect, useState } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import DashboardTicketCarousel from "./DashboardTicketCarousel";
import { ToastContainer } from "react-toastify";
import CompletedAuctionListings from "./CompletedAuctionListings";

import Piecharts from "../Analytics/Chart02";
import { RetriveAuctionListingsByStatus } from "../Analytics/RetriveAuctionListingsByStatus";

export default function Dashboard() {
  const [auctionStatuses, setAuctionStatuses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    RetriveAuctionListingsByStatus()
      .then((data) => {
        setAuctionStatuses(data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div className=" overflow-y-visible">
      <div
        id="loading-bg"
        className={`fixed inset-0 bg-white bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-[5000] ${
          !loading && "hidden"
        }`}
      >
        <PulseLoader color="#ff7637" loading={loading} />
      </div>
      <div className="h-1/3 bg-accent">
        <DashboardTicketCarousel />
      </div>

      {auctionStatuses !== null && (
        <div className="flex flex-row justify-evenly bg-gray-200 border-none m-2 overflow-auto">
          <CompletedAuctionListings />
          <Piecharts data={auctionStatuses} />
        </div>
      )}
      <ToastContainer />
    </div>
  );
}
