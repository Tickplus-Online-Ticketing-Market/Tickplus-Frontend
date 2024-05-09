import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cookies from "js-cookie";

const ResetPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/resetPassword', {
        email,
        newPassword
      });
      Cookies.remove("email");
      // Display success message using toast
      toast.success(response.data.message);
    } catch (error) {
      console.error('Password reset error:', error);
      toast.error('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <form onSubmit={handleResetPassword}>
        <section className="text-text body-font relative grid place-items-center mt-10">
          <div className="lg:w-1/3 md:w-1/2 bg-primary rounded-lg p-8 flex flex-col mt-10 md:mt-0 relative z-10 shadow-md mb-6">
            <h2 className="text-accent text-2xl mb-1 font-bold title-font">Reset Password</h2>

            <label htmlFor="email" className="leading-7 text-base text-background">
              Email:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-secondary rounded border border-accent focus:border-background focus:ring-1 focus:ring-background text-base outline-none text-text py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />

            <label htmlFor="password" className="leading-7 text-base text-background">
              New Password:
            </label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              className="w-full bg-secondary rounded border border-accent focus:border-background focus:ring-1 focus:ring-background text-base outline-none text-text py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />

            <button
              type="submit"
              className="text-background bg-accent border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded text-lg mt-6"
            > Reset Password
            </button>

            <p className="text-base text-accent mt-3 font-bold hover:underline">
              {' '}
              <Link to="/user/login"> 
              Login </Link>{' '}
            </p>
          </div>
        </section>
      </form>
    </div>
  );
};

export default ResetPassword;
