import React from "react";
import Layout from "../Components/SecondaryMarket/shared/Layout";
import Dashboard from "../Components/SecondaryMarket/Dashboard";
import MyBids from "../Components/SecondaryMarket/MyBids";
import MyAuctionListings from "../Components/SecondaryMarket/MyAuctionListings";
import TransactionHistory from "../Components/SecondaryMarket/TransactionHistory";

const secondaryMarketRoutes = [
  {
    path: "/secondary-market",
    element: <Layout />,
    children: [
      {
        path: "/secondary-market",
        element: <Dashboard />,
      },
      {
        path: "/secondary-market/my-bids",
        element: <MyBids />,
      },
      {
        path: "/secondary-market/my-auction-listings",
        element: <MyAuctionListings />,
      },
      {
        path: "/secondary-market/transaction-history",
        element: <TransactionHistory />,
      },
    ],
  },
];

export default secondaryMarketRoutes;
