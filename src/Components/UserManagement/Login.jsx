import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";
import axios from "axios";
import Cookies from "js-cookie"

export default function Login() {
  const [captchaVal, setCaptchaVal] = useState(null);

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(()=>{
    Cookies.remove("email");
  },[])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleCaptchaChange = (value) => {
    setCaptchaVal(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!captchaVal) {
        toast.error("Please fill the captcha.");
        return;
      }

      
      const response = await axios.post("http://localhost:8000/login", form);

      if (response.data === "loginPass") {
        //make a cookie for email. it expires after 2 years
        Cookies.set("email", form.email,{expires:730})                       
        toast.success("Login successful");
        
        // Redirect or perform other actions after successful login
      } else if (response.data === "nouser") {
        toast.error("Email not registered.");
      } else if (response.data === "loginFail") {
        toast.error("Invalid credentials.");
      } else {
        toast.error("Something went wrong.");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <div className="mb-6">
      <form action="/login" method="POST" onSubmit={handleSubmit}>
        <section class="text-text body-font relative grid place-items-center mt-10">
          {/* <div class="container px-5 py-24 mx-auto flex"> */}
          <div class="lg:w-1/3 md:w-1/2 bg-primary rounded-lg p-8 flex flex-col  mt-10 md:mt-0 relative z-10 shadow-md">
            <h1 class="text-accent text-center text-4xl mb-1 font-bold title-font">
              Login
            </h1>

            <div class="relative mb-4">
              <label for="email" class="leading-7 text-xl text-background">
                Email
              </label>
              <input
                value={form.email} // Bind input value to state
                onChange={handleInputChange} // Update state on input change
                type="email"
                id="email"
                name="email"
                class="w-full bg-background rounded  text-xl text-text py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <div class="relative mb-4">
              <label for="password" class="leading-7 text-xl text-background">
                Password
              </label>
              <input
                value={form.password} // Bind input value to state
                onChange={handleInputChange} // Update state on input change
                type="password"
                id="password"
                name="password"
                class="w-full bg-background rounded text-xl text-text py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>

            <ReCAPTCHA
              className="mb-5 ml-11 "
              sitekey="6LeSS8IpAAAAAMHnocgqeqzVLiS5J6w5koF_1h48"
              onChange={handleCaptchaChange} // Update captchaVal on change
            />

            <input
              class="text-background bg-accent border-0 ml-12 mr-12 py-2 px-6 focus:outline-none hover:bg-secondary rounded text-lg"
              type="submit"
              value="Submit"
            />
           

           <p className="text-base text-accent mt-3 font-bold">
              {" "}
              <Link to={"/user/forgot-password"}> Forgot Password </Link>{" "}
            </p>


            <p className="text-base text-background mt-3">
              {" "}
              Don't have an account?{" "}
            </p>

            {/* redirect user to the signup page */}
            <div className="text-base text-accent mt-3 font-bold">
              
              <Link to={"/user/signup"}> Create an account </Link>
            </div>

            {/* </div> */}
          </div>
        </section>
      </form>

    </div>
  );
}
