import React from "react";
import Login from '../Components/UserManagement/Login';
import Signup from '../Components/UserManagement/Signup';
import UserProfile from "../Components/UserManagement/UserProfile";
import ForgotPassword from "../Components/UserManagement/ForgotPassword";
import AdminPage from "../Components/UserManagement/AdminPage";

const UserManagementRoutes = [
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
    path: "/user/admin-page",
    element: <AdminPage />,
  },
  {
    path: "/user/forgot-password",
    element: <ForgotPassword />,
  },
];

export default UserManagementRoutes;
