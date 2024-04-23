import { useState, useEffect } from "react";
import axios from "axios";

export function RetriveMyAuctionListingsData(spectatorId) {
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
      console.error("Error fetching Auction Listings:", error);
      setAuctionListings([]);
    }
  };

  return auctionListings || []; // Return an empty array if data is not yet fetched
}
