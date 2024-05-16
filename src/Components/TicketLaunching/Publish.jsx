import { toast } from "react-toastify";
import axios from "axios";

export default function Publish({ visible, onClose, onConfirm, event }) {
  const handlePublish = async () => {
    const { eventid } = event; // Destructuring _id from event object

    try {
      const res = await axios.put(
        `https://tickplus-backend.onrender.com/ticket-launching/ticketfoam/publish/${eventid}`
      );

      toast.success("Event published successfully");
      onConfirm(event);
      onClose();
    } catch (error) {
      console.error("Error publishing event:", error);
      toast.error("Failed to publish event");
    }
  };
}
