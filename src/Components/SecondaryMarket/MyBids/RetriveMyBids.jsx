import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import axios from "axios";

export function RetriveMyBids(spectatorId) {
  const [auctionListings, setAuctionListings] = useState(null);

  useEffect(() => {
    fetchAuctionListings();
  }, []);

  const fetchAuctionListings = async () => {
    try {
      const res = await axios.get(
        `http://localhost:3030/secondary-market/my-auction-listings/my/${spectatorId}`
      );
      setAuctionListings(res.data.auctionListings);
    } catch (error) {
      toast.error("Cannot Connect to Database");
      setAuctionListings([]);
    }
  };

  return auctionListings || []; // Return an empty array if data is not yet fetched
}
