import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import homePageRoutes from "./Routes/HomePageRoutes";
import secondaryMarketRoutes from "./Routes/SecondaryMarketRoutes";
import ticketPurchaseRoutes from "./Routes/TicketPurchaseRoutes";

const allRoutes = [...homePageRoutes, ...secondaryMarketRoutes, ...ticketPurchaseRoutes];
const router = createBrowserRouter(allRoutes);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
