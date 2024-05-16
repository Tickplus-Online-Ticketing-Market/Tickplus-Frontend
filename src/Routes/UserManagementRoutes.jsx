import React from "react";
import LayoutUser from "../Components/UserManagement/shared/LayoutUser";
import Login from '../Components/UserManagement/Login';
import Signup from '../Components/UserManagement/Signup';
import UserProfile from "../Components/UserManagement/UserProfile";
import ForgotPassword from "../Components/UserManagement/ForgotPassword";
import UserEdit from "../Components/UserManagement/UserEdit";

const UserManagementRoutes = [
  {
    path: "/user",
    element: <LayoutUser />,
    children: [
      {
        path: "/user",
        element: <Login />,
      },
      {
        path: "/user/login",
        element: <Login />,
      },
      {
        path: "/user/signup",
        element: <Signup />,
      },
      {
        path: "/user/profile",
        element: <UserProfile />,
      },
      {
        path: "/user/edit-profile",
        element: <UserEdit />,
      },
      {
        path: "/user/forgot-password",
        element: <ForgotPassword />,
      },
    ],
    
  },
];


export default UserManagementRoutes;
