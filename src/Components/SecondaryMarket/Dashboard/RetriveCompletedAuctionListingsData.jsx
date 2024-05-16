import { toast } from "react-toastify";
import axios from "axios";

export async function RetriveCompletedAuctionListingsData() {
  try {
    const res = await axios.get(
      "http://localhost:3030/secondary-market/my-auction-listings/completed"
    );
    return res.data.auctionListings;
  } catch (error) {
    toast.error("Cannot Connect to Database");
    return [];
  }
}
