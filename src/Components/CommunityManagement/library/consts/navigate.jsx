import { HiOutlineQuestionMarkCircle, HiOutlineCog } from "react-icons/hi";
import { FaPager } from "react-icons/fa";
import { BsCheckSquareFill } from "react-icons/bs";

export const SIDEBAR_LINKS = [
  {
    key: "Community",
    label: "Community Page",
    path: "/community-page",
    icon: <FaPager />,
  },
  {
    key: "Myposts",
    label: "My posts",
    path: "/community-page/my-posts",
    icon: <BsCheckSquareFill />,
  },
];

export const SIDEBAR_BOTTOM_LINKS = [
  {
    key: "support",
    label: "Support",
    path: "/support",
    icon: <HiOutlineQuestionMarkCircle />,
  },
  {
    key: "settings",
    label: "Settings",
    path: "/settings",
    icon: <HiOutlineCog />,
  },
];