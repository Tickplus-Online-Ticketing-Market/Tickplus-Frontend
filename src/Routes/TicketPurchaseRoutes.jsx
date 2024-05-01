import React from "react";
import Layout from "../Components/TicketPurchase/shared/Layout";
import Wishlist from "../Components/TicketPurchase/Wishlist";
import MyTransactions from "../Components/TicketPurchase/MyTransactions";
import RefundRequest from "../Components/TicketPurchase/RefundRequests";
import Cancellations from "../Components/TicketPurchase/Cancellations";

const ticketPurchaseRoutes = [
  {
    path: "/ticket-purchase",
    element: <Layout />,
    children: [
      {
        path: "/ticket-purchase",
        element: <Wishlist />,
      },
      {
        path: "/ticket-purchase/my-transactions",
        element: <MyTransactions />,
      },
      {
        path: "/ticket-purchase/cancellations",
        element: <Cancellations />,
      },
      {
        path: "/ticket-purchase/refund-request",
        element: <RefundRequest />,
      },
    ],
  },
];

export default ticketPurchaseRoutes;