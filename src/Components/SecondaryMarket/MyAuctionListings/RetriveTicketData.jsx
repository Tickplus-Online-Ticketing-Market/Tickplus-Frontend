import { toast } from "react-toastify";
import axios from "axios";

export default async function RetriveTicketData() {
  try {
    const res = await axios.get(
      "https://tickplus-backend.onrender.com/secondary-market/my-auction-listings/get-tickets"
    );
    return res.data.ticketfoam;
  } catch (error) {
    toast.error("Cannot Connect to Database");
    return [];
  }
}
