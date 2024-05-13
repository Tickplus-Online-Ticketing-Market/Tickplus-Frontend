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
  const submit = async (e) => {
    e.preventDefault();
    try {
      if (form.password.length < 6) {
        toast.error("Password should be more than 6 char");
      } else if (form.password !== form.cpassword) {
        toast.error("Password do not match");
      } else if (!captchaVal) {
        toast.error("Fill the captcha");
      } else {
        await axios.post("http://localhost:8000/signup", form).then((res) => {
          if (res.data === "exist") {
            toast.error("Email already exists");
          } else if (res.data === "notexist") {
            //make a cookie for email. it expires after 2 years
            Cookies.set("email", form.email, { expires: 730 });
            toast.success("Successfully registered");
          }
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="mb-6 bg-primary bg-opacity-100 w-2/3 rounded-2xl p-8 h-3/4">
      <h1 class="text-accent text-center text-4xl mb-1 font-bold title-font">
        Registration
      </h1>
      <form action="POST" method="/login" onSubmit={submit}>
        <div class="grid grid-cols-6 gap-4 p-8 w-full">
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
              type="contact-number"
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
          <div class="col-span-3">
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
              type="address"
              id="address"
              name="address"
              class="w-full bg-background rounded text-xl outline-none text-accent py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div class="">
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
          <div class="col-span-4 ...">01</div>
          <div class="col-start-2 col-span-4 ...">01</div>
          <div class="col-start-2 col-span-4 ...">01</div>
        </div>

        <section class="text-text body-font rounded-lg relative grid place-items-center ml-20 mr-20 mt-10 ">
          <div class="lg:w-1/3 md:w-1/2 bg-primary rounded-lg p-8 flex flex-col  mt-10 md:mt-0 relative z-10 shadow-md">
            <div class="relative mb-4"></div>

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

            {/* npm i react-google-recaptcha */}
            <ReCAPTCHA
              className="mb-5 ml-4"
              sitekey="6LeSS8IpAAAAAMHnocgqeqzVLiS5J6w5koF_1h48"
              onChange={(value) => {
                setCaptchaVal(value);
              }}
            />

            <input
              class="text-background cursor-pointer bg-accent border-0 ml-10 mr-10 py-2 px-6 focus:outline-none
             hover:bg-secondary rounded text-lg"
              type="submit"
              value="Submit"
            />

            <p className="text-xl text-background mt-3">
              {" "}
              Already have an account?{" "}
            </p>

            {/* redirect user to the signup page */}
            <p className="text-xl mt-3 font-bold hover:underline text-accent">
              {" "}
              <Link to={"/user/login"}> Login </Link>{" "}
            </p>
          </div>
        </section>
      </form>
    </div>
  );
}
