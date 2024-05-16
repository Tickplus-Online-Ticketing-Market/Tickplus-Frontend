import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function Signup() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
    address: "",
    contactnumber: "",
    dateOfBirth: "",
    role: "",
  });

  // Function to handle form submission
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      console.log("Form data:", form); // Debug line: Print form data
      if (form.password.length < 6) {
        toast.error("Password should be at least 6 characters");
        
      } else if (form.password !== form.cpassword) {
        toast.error("Passwords do not match");

      } else if (form.dateOfBirth < new Date()) {
        toast.error("Date of birth cannot be in the past");
      } else {
        const res = await axios.post(
          "https://tickplus-backend.onrender.com/users/create",
          form
        );
        console.log("API response:", res.data); // Debug line: Print API response
        if (res.data.error === "exist") {
          toast.error("Email already exists");
        } else {
          toast.success("Successfully registered");
          navigate("/user/login");
        }
      }
    } catch (e) {
      console.error(e);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="mb-6 bg-primary bg-opacity-100 w-2/3 rounded-2xl p-8 h-3/4">
      <h1 className="text-accent text-center text-3xl font-bold title-font">
        Registration
      </h1>
      <form onSubmit={handleRegister}>
        <div className="grid grid-cols-6 gap-4 px-8 py-4 w-full">
          <div className="col-span-3">
            <label
              htmlFor="username"
              className="leading-7 text-xl font-bold text-accent"
            >
              User Name
            </label>
            <input
              required
              value={form.username}
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
              type="text"
              id="username"
              name="username"
              className="w-full bg-background rounded text-xl outline-none text-accent py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="col-span-3">
            <label
              htmlFor="contactNumber"
              className="leading-7 text-xl font-bold text-accent"
            >
              Contact Number
            </label>
            <input
              required
              value={form.contactNumber}
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
              type="tel"
              id="contactnumber"
              name="contactnumber"
              maxLength={10}
              className="w-full bg-background rounded text-xl outline-none text-accent py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="email"
              className="leading-7 text-xl font-bold text-accent"
            >
              Email
            </label>
            <input
              required
              value={form.email}
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
              type="email"
              id="email"
              name="email"
              className="w-full bg-background rounded text-xl outline-none text-accent py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="password"
              className="leading-7 text-xl font-bold text-accent"
            >
              Password
            </label>
            <input
              required
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
              type="password"
              id="password"
              name="password"
              className="w-full bg-background rounded text-xl outline-none text-accent py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="cpassword"
              className="leading-7 text-xl font-bold text-accent"
            >
              Confirm Password
            </label>
            <input
              required
              value={form.cpassword}
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
              type="password"
              id="cpassword"
              name="cpassword"
              className="w-full bg-background rounded text-xl outline-none text-accent py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="address"
              className="leading-7 text-xl font-bold text-accent"
            >
              Address
            </label>
            <input
              required
              value={form.address}
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
              type="text"
              id="address"
              name="address"
              className="w-full bg-background rounded text-xl outline-none text-accent py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="dateOfBirth"
              className="leading-7 text-xl font-bold text-accent"
            >
              Date of Birth
            </label>
            <input
              required
              value={form.dateOfBirth}
              onChange={(e) =>
                setForm({ ...form, [e.target.name]: e.target.value })
              }
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              className="w-full bg-background rounded text-xl outline-none text-accent py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="col-span-2">
            <div className="relative mb-4">
              <label
                htmlFor="role"
                className="leading-7 text-xl font-bold text-accent"
              >
                User Category
              </label>
              <select
                required
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                className="w-full bg-background rounded text-xl outline-none text-accent py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                id="role"
                name="role"
              >
                <option value="">Select User Category</option>
                <option value="artist">Artist</option>
                <option value="organizer">Organizer</option>
                <option value="spectator">Spectator</option>
                <option value="sponsorship-agent">Sponsorship Agent</option>
                <option value="consultant">Consultant</option>
              </select>
            </div>
          </div>
        </div>

        <div className="col-span-6 flex justify-center">
          <input
            className="text-background cursor-pointer bg-accent border-0 py-3 px-16 
            focus:outline-none hover:bg-secondary rounded text-lg mt-3"
            type="submit"
            value="Create Account"
          />
        </div>
        <div className="col-span-6 flex justify-center mt-5">
          <div className="text-xl">Already have an account?</div>
          <Link
            className="text-xl font-bold hover:underline text-accent ml-2"
            to={"/user/login"}
          >
            Click here to Login
          </Link>
        </div>
      </form>
    </div>
  );
}
