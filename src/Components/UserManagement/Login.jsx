import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { toast } from "react-toastify";
import axios from "axios";
import Cookies from "js-cookie";

export default function Login() {
  const [captchaVal, setCaptchaVal] = useState(null);

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    console.log("Removing email cookie on mount");
    Cookies.remove("email");
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`Input change: ${name} = ${value}`);
    setForm({ ...form, [name]: value });
  };

  const handleCaptchaChange = (value) => {
    console.log("Captcha value:", value);
    setCaptchaVal(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted:", form);

    try {
      if (!captchaVal) {
        console.error("Captcha not filled");
        toast.error("Please fill the captcha.");
        return;
      }

      console.log("Sending login request");
      const response = await axios.post("http://localhost:3030/users/login", form);

      console.log("Login response:", response.data);

      if (response.data === "loginPass") {
        Cookies.set("email", form.email, { expires: 730 });
        toast.success("Login successful");
        navigate("/user/profile");
      } else if (response.data === "nouser") {
        toast.error("Email not registered.");
      } else if (response.data === "loginFail") {
        toast.error("Invalid credentials.");
      } else {
        toast.error("Unexpected response from server.");
      }

    } catch (error) {
      console.error("Login error:", error.response ? error.response.data : error.message);
      toast.error("Server error: " + (error.response ? error.response.data : error.message));
    }
  };

  return (
    <div className="mb-6 bg-primary bg-opacity-100 w-1/3 rounded-2xl p-8">
      <h1 className="text-accent text-center text-4xl mb-1 font-bold title-font">
        Login
      </h1>
      <form onSubmit={handleSubmit}>
        <section className="text-text body-font relative grid place-items-center mt-5">
          <div className="relative m4-4">
            <label htmlFor="email" className="leading-7 text-xl text-background w-9/12">
              Email
            </label>
            <input
              value={form.email}
              onChange={handleInputChange}
              type="email"
              id="email"
              name="email"
              className="w-full bg-background rounded text-xl text-text py-1 px-3 
              leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="relative m-4">
            <label htmlFor="password" className="leading-7 text-xl text-background w-9/12">
              Password
            </label>
            <input
              value={form.password}
              onChange={handleInputChange}
              type="password"
              id="password"
              name="password"
              className="w-full bg-background rounded text-xl text-text py-1 px-3 
              leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <ReCAPTCHA
            className="relative m-4"
            sitekey="6LeSS8IpAAAAAMHnocgqeqzVLiS5J6w5koF_1h48"
            onChange={handleCaptchaChange}
          />

          <input
            className="text-background bg-accent border-0 ml-10 mr-10 py-2 px-6 
            focus:outline-none hover:bg-secondary rounded text-lg"
            type="submit"
            value="Login"
          />

          {/* <p className="text-xl text-accent mt-3 font-bold hover:underline">
            <Link to={"/user/forgot-password"}> Forgot Password </Link>
          </p> */}

          <p className="text-xl text-background mt-3">
            Don't have an account?
          </p>

          <div className="text-xl text-accent mt-3 font-bold hover:underline">
            <Link to={"/user/signup"}> Create an account </Link>
          </div>

        </section>
      </form>
    </div>
  );
}
