import { toast } from "react-toastify";
import axios from "axios";

export async function TicketCount() {
  try {
    const res = await axios.get(
      "https://tickplus-backend.onrender.com/ticket-launching/analytics/ticket-counts-by-eventname"
    );
    return res.data.ticketCounts;
  } catch (error) {
    toast.error("Cannot Connect to Database");
    return [];
  }
}
