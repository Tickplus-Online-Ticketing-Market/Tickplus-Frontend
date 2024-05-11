import { toast } from "react-toastify";
import axios from "axios";

export async function RetriveAuctionListingsByProfit() {
  try {
    const res = await axios.get(
      "http://localhost:3030/secondary-market/analytics/auctions-byprofit"
    );
    console.log(res);
    return res.data.auctionListings;
  } catch (error) {
    toast.error("Cannot Connect to Database");
    return [];
  }
}
