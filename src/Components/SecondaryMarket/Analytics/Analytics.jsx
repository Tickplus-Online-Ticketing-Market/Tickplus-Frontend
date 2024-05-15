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
            Our Secondary Market Auction Gave More Value to Our Customers
          </div>
          <div className="h-[22rem] bg-accent rounded-2xl max-w-[52rem]">
            <div className="py-6 px-10 font-semibold text-primary text-[1.25rem]">
              <p
                style={{ whiteSpace: "normal" }}
                className=" text-center w-full"
              >
                Introducing Tick+ – revolutionizing event ticket resales! Tick+
                offers a seamless way to buy and sell pre-purchased tickets on a
                vibrant secondary market. Sellers can analyze ticket prices, set
                profitable resale prices, and easily manage their listings.
                Buyers find specific event tickets effortlessly. Best of all,
                artists earn a commission on each resale, ensuring they get the
                recognition and compensation they deserve. Tick+ keeps ticket
                sales within our platform, enhancing event quality and
                benefiting everyone involved. Experience the future of ticket
                resales with Tick+ – where everyone wins!
              </p>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
