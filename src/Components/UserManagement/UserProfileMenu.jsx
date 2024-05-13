import React, { useEffect, useState } from "react";
import "./UserProfile.css"; // Import your CSS file for styling
import Cookies from "js-cookie";
// import { Link } from "react-router-dom";
// import {HiOutlineCollection, HiOutlineTicket, HiOutlineUserGroup, HiOutlineUser, HiOutlineCash, HiOutlineAnnotation } from "react-icons/hi";
import axios from "axios";
import { toast } from "react-toastify";

const UserProfileMenu = () => {
  //get cokkie value
  const cookieVal = Cookies.get("email");

  const [username, setName] = useState("");

  const [address,  setAddress]=useState("");

  const [contactnumber, setPnumber]=useState("");

  const [ dateofbirth, setBirth]=useState("");

  const [ role, setRole]=useState("");

//   const logOut=()=>{
//     Cookies.remove("email")
//   }

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
      const response = await axios.post("http://localhost:8000/userprofile", {
        cookieVal: cookieVal
      });
  
      // Assuming response.data contains the username
    //   setName(response.data);

       // Assuming response.data contains user object with username, address, and phoneNumber
    const { username, address,  contactnumber,  dateofbirth,  role } = response.data;
    setName(username);
    setAddress(address);
    setPnumber( contactnumber);
    setBirth( dateofbirth);
    setRole( role);

    } catch (error) {
      console.error("Request error:", error);
      toast.error("Something went wrong!");
    }
  };
  
  useEffect(()=>{
    handleSubmit()
  },
  //[cookieVal]
)

  return (

     <div className="profile-container bg-primary">
      <section className="text-text grid place-items-center my-8">

      <h1 className="sm:text-5xl text-4xl mb-4 font-heading font-base text-accent">
        Hello {username}{" "}
      </h1>

      <p className="mb-8 text-2xl  bg-secondary font-bold"> Your Email ID : {cookieVal} </p>

      <p className="sm:text-2xl text-xl mb-4 font-body text-accent"> Address : {address} </p>

      <p className="sm:text-2xl text-xl mb-4 font-body text-accent"> Contact Number : {contactnumber} </p>

      <p className="sm:text-2xl text-xl mb-4 font-body text-accent"> Date Of Birth : { dateofbirth} </p>

      <p className="sm:text-2xl text-xl mb-4 font-body text-accent"> User Category : { role} </p>
     

      <div className="p-4 w-full flex flex-wrap justify-center ">

        {/* <Link
          to="/myevents"
          className="cursor-pointer  w-fit m-4 hover:shadow-lg border-2 item-center bg-primary border-accent px-4 py-2 lg:py-6 lg:px-10 rounded-lg"
        >
         

          <HiOutlineCollection className="item-center text-3xl lg:text-5xl" />

          <h2 className="title-font font-medium text-lg lg:text-2xl mt-4 text-background"> 
            My Events
          </h2>
        </Link> */}

        {/* <Link
          to="/mytickets"
          className="cursor-pointer  w-fit m-4 hover:shadow-lg border-2 item-center bg-primary border-accent px-4 py-2 lg:py-6 lg:px-10 rounded-lg"
        >
          
          <HiOutlineTicket className="item-center text-3xl lg:text-5xl" />

          <h2 className="title-font font-medium text-lg lg:text-2xl mt-4 text-background">
            My Tickets
          </h2>
        </Link>   */}

        {/* <Link
          to="/dashboarduser"
          className="cursor-pointer  w-fit m-4 hover:shadow-lg border-2 item-center bg-primary border-accent px-4 py-2 lg:py-6 lg:px-10 rounded-lg"
        >
         

          <HiOutlineUser className="item-center text-3xl lg:text-5xl" />

          <h2 className="title-font font-medium text-lg lg:text-2xl mt-4 text-background">
            user profile
          </h2>
        </Link>  */}

        {/* <Link
          to="/consultancyservice"
          className="cursor-pointer  w-fit m-4 hover:shadow-lg border-2 item-center bg-primary border-accent px-4 py-2 lg:py-6 lg:px-10 rounded-lg"
        >
        
          <HiOutlineUserGroup className="item-center text-3xl lg:text-5xl" />

          <h2 className="title-font font-medium text-lg lg:text-2xl mt-4 text-background">
            Consultancy
          </h2>
        </Link>  */}

        {/* <Link
          to="/transaction"
          className="cursor-pointer  w-fit m-4 hover:shadow-lg border-2 item-center bg-primary border-accent px-4 py-2 lg:py-6 lg:px-10 rounded-lg"
        >
          

          <HiOutlineCash className="item-center text-3xl lg:text-5xl" />

          <h2 className="title-font font-medium text-lg lg:text-2xl mt-4 text-background">
            Transaction
          </h2>
        </Link>  */}

        {/* <Link
          to="/communitypage"
          className="cursor-pointer  w-fit m-4 hover:shadow-lg border-2 item-center bg-primary border-accent px-4 py-2 lg:py-6 lg:px-10 rounded-lg"
        >
         
          <HiOutlineAnnotation className="item-center text-3xl lg:text-5xl" />

          <h2 className="title-font font-medium text-lg lg:text-2xl mt-4 text-background">
            Community Page
          </h2>
        </Link>  */}

      </div>

    {/* logout button */}
    {/* <button onClick={logOut} className="text-background bg-accent border-0 py-2 px-6 focus:outline-none hover:bg-secondary rounded text-lg"> Logout</button> */}

{/* "ml-4 text-background bg-primary border-0 py-2 px-6 hover:border-accent " */}
     
          {/* <button className="text-background bg-accent border-0 mt-6 py-2 px-6 focus:outline-none hover:bg-secondary rounded text-lg">Edit details</button>
          <button className="text-background bg-accent border-0 mt-6 py-2 px-6 focus:outline-none hover:bg-secondary rounded text-lg">Delete Account</button> */}
       
      {/* </div> */}
      </section>
    </div>
  );
};

export default UserProfileMenu;
