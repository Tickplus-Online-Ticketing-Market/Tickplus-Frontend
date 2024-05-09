import React from "react";
import Layout from "../Components/CommunityManagement/shared/Layout";
import Community from "../Components/CommunityManagement/Community";
import Myposts from "../Components/CommunityManagement/Myposts";
import Createpost from "../Components/CommunityManagement/Createpost";

const CommunityPageRoutes = [
  {
    path: "/community-page",
    element: <Layout />,
    children: [
      {
        path: "/community-page",
        element: <Community />,
      },
      {
        path: "/community-page/my-posts",
        element: <Myposts />,
      },
      {
        path: "/community-page/my-posts/create-post",
        element: <Createpost />,
      }
    ],
  },
];

export default CommunityPageRoutes;
