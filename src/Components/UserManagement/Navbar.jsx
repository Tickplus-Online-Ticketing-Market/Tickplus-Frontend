import React, { useState } from "react";
import { Link } from "react-router-dom";
// useState
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const toggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      <header className="bg-accent md:flex md:justify-between md:items-center md:px-4 md:py-4">
        <div className="flex items-center justify-between px-4 py-1 md:p-0">
          <div className="w-20 ">
            {/* when click the logo navigate to the home page */}
            <Link to={"/"}>
              <img
                src={require("./images/logo.png")}
                alt="Logo"
                className=" w-full cursor-pointer md:mt-1 md:mb-1 rounded hover:bg-secondary"
              />
            </Link>
          </div>

          {/* <div className="md:hidden">
            <button onClick={toggle} className="text-primary">
              <i className="cursor-pointer ml-3 mr-2 fa-solid fa-bars scale-150"></i>
              button
            </button>
          </div> */}
        </div>

        <nav
          className={` px-3 pt-1 pb-1 md:flex ${showMenu ? "block" : "hidden"}`}
        >
          <form id="search-form" >
            <div className="relative flex mx-auto text-background ">

              {/* <div className=" relative md:w-64 w-50 md:mr-4 mr-2 ">
                <input
                  type="text"
                  placeholder="Search"
                  id="footer-field"
                  name="footer-field"
                  className="h-8 w-full bg-gray-100  rounded border border-gray-300 focus:ring-2  focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-0 pl-2 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>  */}

              {/* <button
                type="submit"
                className=" text-background bg-primary  px-4 focus:outline-none hover:bg-indigo-600  cursor-pointer  border-gray-200  border-solid rounded-lg ml-0"> */}
                {/* <i className=" text-text fa-solid fa-microphone text-xl ml-3 cursor-pointer"></i> */}
                {/* btn
              </button> */}
            </div>
          </form>

          <Link
            className="block w-fit px-2 py-1 text-background font-semibold rounded hover:bg-secondary md:ml-4"
            to={"/login"}
          >
            Account/Login
          </Link>
          {/* <a
            className="cursor-pointer block w-fit px-2 py-1 text-background font-semibold rounded hover:bg-accent md:ml-4"
          >
            Orders
          </a>
          <a
            className="cursor-pointer block w-fit px-2 py-1 text-background font-semibold rounded hover:bg-accent  md:ml-4"
          >
            <i className="fa-solid fa-cart-shopping "></i>
          </a> */}
        </nav>

      </header>
    </div>
  );
}