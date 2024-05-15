import { HiOutlineQuestionMarkCircle, HiOutlineCog } from "react-icons/hi";
import {
  FaHome,
  FaCrown,
  FaMoneyCheckAlt,
  FaMoneyBill,
  FaChartLine,
} from "react-icons/fa";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "secondary_market",
    label: "Secondary Market",
    path: "/secondary-market",
    icon: <FaHome />,
  },
  {
    key: "my_bids",
    label: "My Bids",
    path: "/secondary-market/my-bids",
    icon: <FaCrown />,
  },
  {
    key: "my_auction_listings",
    label: "My Auction Listings",
    path: "/secondary-market/my-auction-listings",
    icon: <FaMoneyCheckAlt />,
  },
  // {
  //   key: "transaction_history",
  //   label: "Transaction History",
  //   path: "/secondary-market/transaction-history",
  //   icon: <FaMoneyBill />,
  // },
  {
    key: "analytics",
    label: "Analytics",
    path: "/secondary-market/analytics",
    icon: <FaChartLine />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "settings",
    label: "Settings",
    path: "/settings",
    icon: <HiOutlineCog />,
  },
  {
    key: "support",
    label: "Help & Support",
    path: "/support",
    icon: <HiOutlineQuestionMarkCircle />,
  },
];
