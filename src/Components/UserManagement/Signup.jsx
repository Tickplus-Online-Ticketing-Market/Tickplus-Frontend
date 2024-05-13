import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import ReCAPTCHA from "react-google-recaptcha";
import Cookies from "js-cookie";

//for backend
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

// useState

export default function Signup() {
  const [captchaVal, setCaptchaVal] = useState(null);

  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
    address: "",
    contactnumber: "",
    dateofbirth: "",
    role: "",
  });

  //function to submit data
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      if (form.password.length < 6) {
        toast.error("Password should be more than 6 char");
      } else if (form.password !== form.cpassword) {
        toast.error("Password do not match");
      } else if (!captchaVal) {
        toast.error("Fill the captcha");
      } else {
        await axios
          .post("http://localhost:3030/user/new-user", form)
          .then((res) => {
            toast.success("Successfully registered");
            if (res.data === "exist") {
              toast.error("Email already exists");
            } else if (res.data === "notexist") {
              //make a cookie for email. it expires after 2 years
              Cookies.set("email", form.email, { expires: 730 });
            }
            navigate("/user");
          });
      }
    } catch (e) {
      toast.error("Something went wrong!");
      console.log(e);
    }
  };

  return (
    <div className="mb-6 bg-primary bg-opacity-100 w-2/3 rounded-2xl p-8 h-3/4">
      <h1 class="text-accent text-center text-3xl font-bold title-font">
        Registration
      </h1>
      <form action="POST" method="/login" onSubmit={handleRegister}>
        <div class="grid grid-cols-6 gap-4 px-8 py-4 w-full">
          <div class="col-span-3">
            <label
              for="username"
              class="leading-7 text-xl font-bold text-accent"
            >
              User Name
            </label>
            <input
              required
              value={form.username}
              onChange={(e) => {
                setForm({ ...form, [e.target.name]: e.target.value });
              }}
              type="text"
              id="username"
              name="username"
              class="w-full bg-background rounded text-xl outline-none text-accent py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="col-span-3">
            <label
              for="contactnumber"
              class="leading-7 text-xl font-bold text-accent"
            >
              Contact Number
            </label>
            <input
              required
              value={form.contactnumber}
              onChange={(e) => {
                setForm({ ...form, [e.target.name]: e.target.value });
              }}
              type="tel"
              id="contactnumber"
              name="contactnumber"
              maxLength={10}
              class="w-full bg-background rounded text-xl outline-none text-accent py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="col-span-2">
            <label for="email" class="leading-7 text-xl font-bold text-accent">
              Email
            </label>
            <input
              required
              value={form.email}
              onChange={(e) => {
                setForm({ ...form, [e.target.name]: e.target.value });
              }}
              type="email"
              id="email"
              name="email"
              class="w-full bg-background rounded text-xl outline-none text-accent py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="col-span-2">
            <label
              for="password"
              class="leading-7 text-xl font-bold text-accent"
            >
              Password
            </label>
            <input
              required
              value={form.password}
              onChange={(e) => {
                setForm({ ...form, [e.target.name]: e.target.value });
              }}
              type="password"
              id="password"
              name="password"
              class="w-full bg-background rounded text-xl outline-none text-accent py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="col-span-2">
            <label
              for="confirmpassword"
              class="leading-7 text-xl font-bold text-accent"
            >
              Confirm Password
            </label>
            <input
              required
              value={form.cpassword}
              onChange={(e) => {
                setForm({ ...form, [e.target.name]: e.target.value });
              }}
              type="password"
              id="cpassword"
              name="cpassword"
              class="w-full bg-background rounded text-xl outline-none text-accent py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="col-span-2">
            <label
              for="address"
              class="leading-7 text-xl font-bold text-accent"
            >
              Address
            </label>
            <input
              required
              value={form.address}
              onChange={(e) => {
                setForm({ ...form, [e.target.name]: e.target.value });
              }}
              type="text"
              id="address"
              name="address"
              class="w-full bg-background rounded text-xl outline-none text-accent py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="col-span-2">
            <label
              for="dateofbirth"
              class="leading-7 text-xl font-bold text-accent"
            >
              Date of Birth
            </label>
            <input
              required
              value={form.dateofbirth}
              onChange={(e) => {
                setForm({ ...form, [e.target.name]: e.target.value });
              }}
              type="date"
              id="dateofbirth"
              name="dateofbirth"
              class="w-full bg-background rounded text-xl outline-none text-accent py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="col-span-2">
            <div class="relative mb-4">
              <label for="role" class="leading-7 text-xl font-bold text-accent">
                User Category
              </label>
              <select
                required
                value={form.role}
                onChange={(e) => setForm({ ...form, role: e.target.value })}
                class="w-full bg-background rounded text-xl outline-none text-accent py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
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
          <div class="col-span-6 flex justify-center">
            <ReCAPTCHA
              className=" scale-75 font-bold rounded-2xl"
              sitekey="6LeSS8IpAAAAAMHnocgqeqzVLiS5J6w5koF_1h48"
              onChange={(value) => {
                setCaptchaVal(value);
              }}
            />
          </div>
          <div class="col-span-6 flex justify-center">
            <input
              class="text-background cursor-pointer bg-accent border-0 py-3 px-16 focus:outline-none hover:bg-secondary rounded text-lg"
              type="submit"
              value="Create Account"
            />
          </div>
          <div class="col-span-6 flex justify-center">
            <div className="text-xl">Already have an account?</div>
            <Link
              className="text-xl font-bold hover:underline text-accent ml-2"
              to={"/user/login"}
            >
              Click here to Login
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
