import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import moment from "moment/moment";

const UserProfile = () => {
  const cookieVal = Cookies.get("email");

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetchUserProfile();
  }, [cookieVal]);

  const fetchUserProfile = async () => {
    try {
      const form = {
        email: cookieVal,
      };
      const response = await axios.post(
        "https://tickplus-backend.onrender.com/users/get-profile",
        form
      );

      setUserData(response.data.user);

      console.log(form);
    } catch (error) {
      toast.error("Something went wrong!");
    }
  };

  const logOut = () => {
    Cookies.remove("email");
  };

  const handleDelete = async () => {
    try {
      const form = {
        email: cookieVal,
      };
      // Correctly send the data in the DELETE request using `data` key
      await axios.delete(
        "https://tickplus-backend.onrender.com/users/delete-profile",
        {
          data: form,
        }
      );
      toast.success("Account deleted successfully");
      logOut();
      setTimeout(() => {
        window.location.href = "/";
      }, 3000);
    } catch (error) {
      // Log error for debugging
      console.error("Error deleting account:", error);
      toast.error("Failed to delete account");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-secondary">
      <section className="w-full max-w-4xl bg-primary shadow-lg rounded-lg p-8 my-10">
        <h1 className="text-4xl font-bold mb-6 text-center text-gray-800">
          Hello {userData?.username}, Welcome to TICK+
        </h1>

        <div className="bg-secondary p-4 rounded mb-6">
          <p className="text-lg font-semibold text-accent">
            Email: {cookieVal}
          </p>
        </div>

        <div className="grid gap-6 mb-6">
          <p className="text-lg font-medium text-text">
            Name: {userData?.username}
          </p>
          <p className="text-lg font-medium text-text">
            Address: {userData?.address}
          </p>
          <p className="text-lg font-medium text-text">
            Contact Number: {userData?.contactnumber}
          </p>
          <p className="text-lg font-medium text-text">
            Date of Birth:{" "}
            {moment(userData?.dateOfBirth).format("MMMM Do YYYY")}
          </p>
          <p className="text-lg font-medium text-text">
            User Category: {userData?.role}
          </p>
        </div>

        <div className="flex justify-center space-x-4 mb-6">
          <Link to="/user/edit-profile">
            <button className="w-40 py-2 bg-accent text-background rounded-lg shadow hover:bg-text transition">
              Edit Details
            </button>
          </Link>

          {/* <Link to="/user/forgot-password">
            <button className="w-40 py-2 bg-accent text-background rounded-lg shadow hover:bg-text transition">
              Change Password
            </button>
          </Link> */}

          <button
            className="w-40 py-2 bg-accent text-white rounded-lg shadow hover:bg-text transition"
            onClick={handleDelete}
          >
            Delete Account
          </button>
        </div>

        <div className="flex justify-center">
          <button
            onClick={logOut}
            className="w-40 py-2 bg-secondary text-text rounded-lg shadow hover:bg-accent transition"
          >
            <Link to="/user/login">Logout</Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default UserProfile;
