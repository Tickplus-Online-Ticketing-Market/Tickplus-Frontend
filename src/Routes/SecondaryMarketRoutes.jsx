import React from "react";
import Layout from "../Components/SecondaryMarket/shared/Layout";
import Dashboard from "../Components/SecondaryMarket/Dashboard/Dashboard";
import MyBids from "../Components/SecondaryMarket/MyBids/MyBids";
import MyAuctionListings from "../Components/SecondaryMarket/MyAuctionListings/MyAuctionListings";
import TransactionHistory from "../Components/SecondaryMarket/TransactionHistory";
import Analytics from "../Components/SecondaryMarket/Analytics/Analytics";

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
      {
        path: "/secondary-market/analytics",
        element: <Analytics />,
      },
    ],
  },
];

export default secondaryMarketRoutes;
