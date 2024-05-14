import { toast } from "react-toastify";
import axios from "axios";

export async function RetriveMyAuctionListingsData(spectatorId) {
  try {
    const res = await axios.get(
      `http://localhost:3030/secondary-market/my-auction-listings/my/${spectatorId}`
    );
    return res.data.auctionListings;
  } catch (error) {
    toast.error("Cannot Connect to Database");
    return [];
  }
}