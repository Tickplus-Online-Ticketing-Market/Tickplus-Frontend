import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layouts from "./Components/TicketLaunching/Layouts";
import Dashboard from "./Components/TicketLaunching/Dashboard";
import Createtickets from "./Components/TicketLaunching/Createtickets"
import Viewtickets from "./Components/TicketLaunching/Viewtickets";
import Ticketphistory from "./Components/TicketLaunching/Ticketphistory";
import Createtickets2 from "./Components/TicketLaunching/Createtickets2";
import Ticketfoam from "./Components/TicketLaunching/Ticketfoam";


function App() { 
  
  return (
    <Router>
      <ToastContainer />
    <Routes>
      <Route path="/" element={<Layouts />}>
        <Route index element={<Dashboard />} />
        <Route path="Createtickets" element={<Createtickets />} />
        <Route path="Viewtickets" element={<Viewtickets />} />
        <Route path="Ticketphistory" element={<Ticketphistory />} />
        <Route path="/ticket-launching/create-tickets/create-tickets2" element={<Createtickets2 />} />
        <Route path="/ticket-launching/create-tickets/create-tickets2/ticket-foam" element={<Ticketfoam />} />
      </Route>
    </Routes>
    </Router>
  );
}

export default App;
