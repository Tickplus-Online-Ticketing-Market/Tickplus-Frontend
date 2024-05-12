import React, { useState, useEffect } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import Barcharts from "./Chart01";
import Piecharts from "./Chart02";
import Piecharts2 from "./Chart03";
import { ToastContainer } from "react-toastify";

import { RetriveAuctionListingsByProfit } from "./RetriveAuctionListingsByProfit";
import { RetriveAuctionListingsByStatus } from "./RetriveAuctionListingsByStatus";
import { RetriveBidsByStatus } from "./RetriveBidsByStatus";

export default function Analytics() {
  const [loading, setLoading] = useState(true);
  const [auctionProfits, setAuctionProfits] = useState([]);
  const [auctionStatuses, setAuctionStatuses] = useState([]);
  const [bidStatuses, setBidStatuses] = useState([]);

  useEffect(() => {
    setLoading(true);
    RetriveAuctionListingsByProfit()
      .then((data) => {
        setAuctionProfits(data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

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

  useEffect(() => {
    setLoading(true);
    RetriveBidsByStatus()
      .then((data) => {
        setBidStatuses(data);
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
      <div className="flex flex-row justify-evenly border-none m-2 overflow-auto">
        <Barcharts data={auctionProfits} />
        <Piecharts data={auctionStatuses} />
      </div>
      <div className="flex flex-row justify-evenly border-none m-2 overflow-auto">
        <Piecharts2 data={bidStatuses} />
        <div className=" overflow-hidden">
          <div className="text-gray-700 m-4 font-bold w-[800px]">
            Impressive Performance Analytics of Tick+ Secondary Auction Market
          </div>
          <div className="h-[22rem] bg-[#eeeeee] rounded-2xl flex flex-col">
            <div className="w-full flex-1 text-xs p-4">
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-secondary p-4 rounded-2xl font-bold text-primary h-full">
                  01
                </div>
                <div className="bg-secondary p-4 rounded-2xl font-bold text-primary  h-full">
                  02
                </div>
                <div className="bg-secondary p-4 rounded-2xl font-bold text-primary  h-full">
                  03
                </div>
                <div className="col-span-2 bg-secondary p-4 rounded-2xl font-bold text-primary h-full">
                  04
                </div>
                <div className="bg-secondary p-4 rounded-2xl font-bold text-primary h-full">
                  05
                </div>
                <div className="bg-secondary p-4 rounded-2xl font-bold text-primary h-full">
                  06
                </div>
                <div className="col-span-2 bg-secondary p-4 rounded-2xl font-bold text-primary h-full">
                  07
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
