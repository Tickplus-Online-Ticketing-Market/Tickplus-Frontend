import React, { useEffect, useState } from "react";
import "./UserProfile.css"; // Import your CSS file for styling
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
import {
  HiOutlineCollection,
  HiOutlineTicket,
  //HiOutlineViewList,
} from "react-icons/hi";
import axios from "axios";
import { toast } from "react-toastify";

const UserProfile = () => {
  //get cokkie value
  const cookieVal = Cookies.get("email");

  const [username, setName] = useState("");

  const [address, setAddress] = useState("");

  const [contactnumber, setPnumber] = useState("");

  const [dateofbirth, setBirth] = useState("");

  const [role, setRole] = useState("");

  const logOut = () => {
    Cookies.remove("email");
  };

  useEffect(
    () => {
      handleSubmit();
    }
    //[cookieVal]
  );

  //   const handleSubmit = async (e) => {

  //     try {

  //         const response = await axios.post("http://localhost:8000/userprofile",
  //             cookieVal
  //         )
  //         .then(response => {
  //             setName(response.data)

  //         })
  //         .catch(e => {
  //             toast.error("Something went wrong!")
  //         })

  //     } catch (error) {
  //       console.error("Login error:", error);
  //       toast.error("Something went wrong.");
  //     }
  //   };

  const handleSubmit = async () => {
    try {
      const response = await axios.get("http://localhost:3030/users", {
        cookieVal: cookieVal,
      });

      // Assuming response.data contains the username
      //   setName(response.data);

      // Assuming response.data contains user object with username, address, and phoneNumber
      const { username, address, contactnumber, dateofbirth, role } =
        response.data;
      setName(username);
      setAddress(address);
      setPnumber(contactnumber);
      setBirth(dateofbirth);
      setRole(role);
    } catch (error) {
      //console.error("Request error:", error);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div>
      <section className="text-accent grid place-items-center my-6">
        <h1 className="sm:text-5xl text-4xl mb-4 font-heading font-base text-background">
          Hello {username}, Welcome to the TICK+{" "}
        </h1>

        <p className="mb-8 text-2xl px-4 bg-secondary rounded font-bold">
          {" "}
          {/* {username}  */}
          This is your Email ID : {cookieVal}{" "}
        </p>

        <p className="sm:text-2xl text-xl mb-4 font-body text-background">
          {" "}
          Address : {address}{" "}
        </p>

        <p className="sm:text-2xl text-xl mb-4 font-body text-background">
          {" "}
          Contact Number : {contactnumber}{" "}
        </p>

        <p className="sm:text-2xl text-xl mb-4 font-body text-background">
          {" "}
          Date Of Birth : {dateofbirth}{" "}
        </p>

        <p className="sm:text-2xl text-xl mb-4 font-body text-background">
          {" "}
          User Category : {role}{" "}
        </p>

        <div className="p-4 w-full flex flex-wrap justify-center ">
          <Link
            to="/myevents"
            className="cursor-pointer  w-fit m-4 hover:shadow-lg border-2 item-center bg-background border-accent  hover:bg-secondary px-4 py-2 lg:py-6 lg:px-10 rounded-lg"
          >
            {/* <i className="fa-solid fa-box text-3xl lg:text-5xl"></i> */}

            <HiOutlineCollection className="item-center text-3xl lg:text-5xl" />

            <h2 className="title-font font-medium text-lg lg:text-2xl mt-4 text-accent">
              My Events
            </h2>
          </Link>

          <Link
            to="/mytickets"
            className="cursor-pointer  w-fit m-4 hover:shadow-lg border-2 item-center bg-background border-accent  hover:bg-secondary px-4 py-2 lg:py-6 lg:px-10 rounded-lg"
          >
            {/* <i className="fa-solid fa-box text-3xl lg:text-5xl"></i> */}

            <HiOutlineTicket className="item-center text-3xl lg:text-5xl" />

            <h2 className="title-font font-medium text-lg lg:text-2xl mt-4 text-accent">
              My Tickets
            </h2>
          </Link>

          {/* <Link
            to="/dashboarduser"
            className="cursor-pointer  w-fit m-4 hover:shadow-lg border-2 item-center bg-background border-accent  hover:bg-secondary px-4 py-2 lg:py-6 lg:px-10 rounded-lg"
          > */}
          {/* <i className="fa-solid fa-box text-3xl lg:text-5xl"></i> */}

          {/* <HiOutlineViewList className="item-center text-3xl lg:text-5xl" />

            <h2 className="title-font font-medium text-lg lg:text-2xl mt-4 text-accent">
              User Menu
            </h2>
          </Link> */}
        </div>

        <div className="flex justify-center space-x-10 w-full">
          <button className="text-accent bg-primary border-0 mt-6 py-2 px-6 focus:outline-none hover:bg-secondary rounded text-lg">
            Edit details
          </button>

          <Link to="/forgotpassword">
            <button className="text-accent bg-primary border-0 mt-6 py-2 px-6 focus:outline-none hover:bg-secondary rounded text-lg">
              Change Password
            </button>
          </Link>

          <button className="text-accent bg-primary border-0 mt-6 py-2 px-6 focus:outline-none hover:bg-secondary rounded text-lg">
            Delete Account
          </button>
        </div>

        {/* logout button */}
        <button
          onClick={logOut}
          className="text-accent bg-primary border-0 mt-6 mb-3 py-3 px-6 focus:outline-none hover:bg-secondary rounded justify-center text-lg"
        >
          {" "}
          Logout
        </button>
      </section>
    </div>
  );
};

export default UserProfile;
