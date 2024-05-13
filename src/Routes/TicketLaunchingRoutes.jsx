import React from "react";
import Layout from "../Components/TicketLaunching/Layouts";
import Dashboard from "../Components/TicketLaunching/Dashboard";
import CreateTickets from "../Components/TicketLaunching/Createtickets";
import Viewtickets from "../Components/TicketLaunching/Viewtickets";
import Ticketphistory from "../Components/TicketLaunching/Ticketphistory";

const ticketLaunchingRoutes = [
  {
    path: "/ticket-launching",
    element: <Layout />,
    children: [
      {
        path: "/ticket-launching",
        element: <Dashboard />,
      },
      {
        path: "/ticket-launching/create-tickets",
        element: <CreateTickets />,
      },
      {
        path: "/ticket-launching/view-tickets",
        element: <Viewtickets />,
      },
      {
        path: "/ticket-launching/Ticket-history",
        element: <Ticketphistory />,
      },
    ],
  },
];

export default ticketLaunchingRoutes;
