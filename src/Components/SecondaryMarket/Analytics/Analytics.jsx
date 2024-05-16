import React, { useState, useEffect } from "react";
import PulseLoader from "react-spinners/PulseLoader";
import Barcharts from "./Chart01";
import Piecharts from "./Chart02";
import Piecharts2 from "./Chart03";
import { ToastContainer } from "react-toastify";
import { RetriveAuctionListingsByProfit } from "./RetriveAuctionListingsByProfit";
import { RetriveAuctionListingsByStatus } from "./RetriveAuctionListingsByStatus";
import { RetriveBidsByStatus } from "./RetriveBidsByStatus";
import html2pdf from "html2pdf.js"; // Import html2pdf

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

  const downloadPDF = () => {
    const element = document.getElementById("SecondaryMarketReport");

    // Apply scale transform to the element
    element.style.transform = "scale(0.75)";
    element.style.transformOrigin = "top left";

    const opt = {
      margin: 1,
      filename: "SecondaryMarketReport.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: {
        scale: 2,
        useCORS: true,
        scrollX: 0,
        scrollY: -window.scrollY,
      },
      jsPDF: {
        unit: "cm",
        format: "a4",
        orientation: "landscape",
      },
    };

    html2pdf()
      .from(element)
      .set(opt)
      .save()
      .then(() => {
        // Remove the scale transform after PDF is generated
        element.style.transform = "scale(1)";
        element.style.transformOrigin = "initial";
      });
  };

  return (
    <div className="overflow-y-visible" id="SecondaryMarketReport">
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
        <div className="overflow-hidden">
          <div className="text-gray-700 m-4 font-bold w-[800px]">
            Our Secondary Market Auction Gave More Value to Our Customers
          </div>
          <div className="h-[22rem] bg-accent rounded-2xl max-w-[52rem]">
            <div className="py-6 px-10 font-semibold text-primary text-[1.2rem] items-center">
              <p
                style={{ whiteSpace: "normal" }}
                className="text-center w-full"
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
              <div className="flex justify-end">
                <button
                  className="bg-background p-2 rounded-2xl m-8 text-base"
                  onClick={downloadPDF} 
                >
                  Download Report
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
