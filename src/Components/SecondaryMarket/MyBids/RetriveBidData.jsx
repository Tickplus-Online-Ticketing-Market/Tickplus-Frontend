import { toast } from "react-toastify";
import axios from "axios";

export default async function RetriveMyBidsData(spectatorId) {
  try {
    const res = await axios.get(
      `http://localhost:3030/secondary-market/my-bids/my/${spectatorId}`
    );
    return res.data.bids;
  } catch (error) {
    toast.error("Cannot Connect to Database");
    return [];
  }
}
