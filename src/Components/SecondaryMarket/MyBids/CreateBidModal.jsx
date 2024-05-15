import React, { useState } from "react";
import axios from "axios";
import { FaRupeeSign, FaClock, FaTicket, FaCrown } from "react-icons/fa6";
import { toast } from "react-toastify";
import currentLoggedinUser from "../lib/helpers/getCurrentLoggedinUser";
import ticketDesign from "../../../Assets/SecondaryMarket/img/Ticket Design Size Example.png";

export default function CreateBidModal({ visible, onClose, biddingAuction }) {
  if (!visible) return null;

  const handleOnClose = (e) => {
    if (e.target.id === "container") onClose();
    if (e.target.id === "cancel-btn") onClose();
  };

  let minimumBid = 0;
  if (biddingAuction.winningBid === "No Bids Placed") {
    minimumBid = biddingAuction.startingPrice;
  } else {
    minimumBid = parseFloat(biddingAuction.winningBid);
  }
  minimumBid += 100;

  const [createForm, setCreateForm] = useState({
    auctionId: biddingAuction._id,
    ticketId: biddingAuction.ticketId,
    spectatorId: currentLoggedinUser.currentUserRoleId,
    bidValue: minimumBid,
    bidDate: new Date().toISOString(),
    bidStatus: "Winning",
  });

  const updateCreateFormField = (e) => {
    const { name, value } = e.target;

    setCreateForm({
      ...createForm,
      [name]: value,
    });
  };

  const createbid = async (e) => {
    e.preventDefault();
    console.log(createForm);

    try {
      const res = await axios.post(
        "https://tickplus-backend.onrender.com/secondary-market/my-bids",
        createForm
      );

      setCreateForm({
        auctionId: biddingAuction._id,
        spectatorId: currentLoggedinUser.currentUserRoleId,
        ticketId: biddingAuction.ticketId,
        bidValue: minimumBid,
        bidDate: new Date().toISOString(),
        bidStatus: "Winning",
      });

      toast.success("Bid Placed");

      onClose();
    } catch (error) {
      toast.error("Bid Not Placed");
    }
  };

  return (
    <div
      id="container"
      onClick={handleOnClose}
      className="fixed inset-0 bg-text bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-[1500]"
    >
      <div className="bg-white p-0 rounded-2xl flex flex-row max-w-[70%] h-[80%] overflow-hidden">
        <div className="flex-[0.9] flex-col gap-4 bg-accent p-6 rounded-2xl">
          <div className="relative overflow-hidden bg-cover bg-no-repeat aspect-video">
            <img className="rounded-lg" src={ticketDesign} alt="ticketDesign" />
          </div>
          <div className="my-6 flex-col items-center justify-center">
            <h2 className="mb-4 text-xl font-bold leading-tight text-white text-center">
              Ticket ID : {biddingAuction.ticketId}
            </h2>

            <div className="flex flex-wrap text-secondary font-semibold">
              <div className="flex items-center m-4">
                Starting Price : Rs.&nbsp;
                {biddingAuction.startingPrice.toFixed(2)}
              </div>

              <div className="flex items-center m-4">
                Winning Bid :&nbsp;
                {biddingAuction.winningBid === "No Bids Placed"
                  ? biddingAuction.winningBid
                  : `Rs. ${parseFloat(biddingAuction.winningBid).toFixed(2)}`}
              </div>

              <div className="flex items-center m-4">
                Remaining Days :&nbsp;
                {biddingAuction.remainingDays} days
              </div>
            </div>
          </div>
        </div>
        <div className="w-fit flex-1 p-10 pt-20">
          <form
            onSubmit={createbid}
            className="items-center align-middle w-fit"
          >
            <input type="hidden" name="ticketId" value={createForm.ticketId} />
            <input
              type="hidden"
              name="spectatorId"
              value={createForm.spectatorId}
            />
            <input
              type="hidden"
              name="bidStatus"
              value={createForm.bidStatus}
            />
            <input type="hidden" name="bidDate" value={createForm.bidDate} />

            <div className="grid grid-cols-3 gap-y-10 my-20 justify-around">
              <div>
                <h5 className="font-medium leading-tight text-text py-4">
                  Auction ID
                </h5>
              </div>
              <div className="col-span-2 bg-background px-4 flex flex-row justify-start items-center border-[2.4px] border-primary rounded-full gap-2 text-primary">
                <input
                  name="auctionId"
                  type="text"
                  required
                  readOnly
                  placeholder="Auction ID"
                  className="text-start font-semibold bg-background focus:outline-none active:outline-none h-8 w-96 text-primary placeholder-primary border-none bg-none pb-0.5"
                  value={createForm.auctionId}
                />
              </div>

              <div>
                <h5 className="font-medium leading-tight text-text py-4">
                  Bid Value
                </h5>
              </div>
              <div className="col-span-2 bg-background px-4 flex flex-row justify-start items-center border-[2.4px] border-primary rounded-full gap-2 text-primary">
                <span className="text-xl">
                  <FaRupeeSign />
                </span>
                <input
                  name="bidValue"
                  type="text"
                  required
                  placeholder="Bid Value"
                  className="text-start bg-background focus:outline-none active:outline-none h-8 w-96 text-text placeholder-primary border-none bg-none pb-0.5"
                  value={createForm.bidValue}
                  onChange={updateCreateFormField}
                />
              </div>

              <div className="col-span-2 max-h-6">
                <button
                  type="submit"
                  className="text-white bg-primary hover:bg-background hover:text-primary border-primary border-[2.4px] focus:outline-none font-medium rounded-full px-10 py-2 text-center inline-flex items-center"
                >
                  Place Bid
                </button>
              </div>
              <div className="max-h-6">
                <button
                  type="button"
                  id="cancel-btn"
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
