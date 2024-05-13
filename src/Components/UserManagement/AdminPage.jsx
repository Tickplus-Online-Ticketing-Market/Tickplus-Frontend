import React from 'react'
import Cookies from "js-cookie";

const logOut = () => {
  Cookies.remove("email");
};

export default function AdminPage() {
  return (
    <div>
        <h1> Admin Account</h1>

        <button
          onClick={logOut}
          className="text-accent bg-primary border-0 mt-6 mb-3 py-3 px-6 focus:outline-none
                       hover:bg-secondary rounded justify-center text-lg"
        >
          {" "}
          Logout
        </button>
    </div>
  )
}
