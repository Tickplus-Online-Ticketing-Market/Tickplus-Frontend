import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import homePageRoutes from "./Routes/HomePageRoutes";
import DigitalCustomizationRoutes from "./Routes/DigitalCustomizationRoutes";
import SponsorshipManagementRoutes from "./Routes/SponsorshipManagementRoutes"
import ticketLaunchingRoutes from "./Routes/TicketLaunchingRoutes";
import CommunityPageRoutes from "./Routes/CommunityPageRoutes";

const allRoutes = [...homePageRoutes, ...DigitalCustomizationRoutes, ...ticketLaunchingRoutes,  ...CommunityPageRoutes];
const router = createBrowserRouter(allRoutes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
