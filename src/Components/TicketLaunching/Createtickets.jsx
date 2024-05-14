import React, { useState } from "react";
import ticket from "../../Assets/TicketLaunching/ticket.png";
import promo from "../../Assets/TicketLaunching/promo.png";
import { useNavigate } from "react-router-dom"; //Import use navigate
import Customfoam from "../TicketLaunching/Customfoam";

export default function Createtickets() {
  const [showCustomfoam, setshowCustomfoam] = useState(false);
  const handleOnClose = () => setshowCustomfoam(false);

  const navigate = useNavigate(); // Initialize the navigate function

  //Function to handle button click
  const handleSystemTemplateclick = () => {
    navigate("/ticket-launching/create-tickets/create-tickets2");
  };
  return (
    <div>
      <div className="text-primary pl-4 text-3xl pb-9 font-bold">
        {" "}
        Choose your preferred template
      </div>
      <div className="grid grid-cols-2 gap-4 ">
        <button
          class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-2xl duration-300 "
          onClick={handleSystemTemplateclick}
        >
          <div className=" bg-secondary h-96 border border-primary rounded-lg shadow-2xl">
            <div className="flex justify-center font-bold text-text1 text-2xl py-4">
              System Template
            </div>
            <div className="bg-accent shadow-xl rounded-md gap-4 pl-20 h-36">
              <img
                class="h-full w-full pr-20 py-4"
                src={ticket}
                alt="description"
              />
            </div>
            <div className="flex justify-center text-primary text-lg font-bold pt-4 pr-20">
              {" "}
              # Free Access
            </div>
            <div className="flex justify-center text-primary text-lg pr-4 font-bold">
              {" "}
              # Limited editing tools
            </div>
            <div className="flex justify-center text-text1 text-2xl pr-4 pt-6 font-bold">
              Subscription{" "}
              <p className="text-primary font-bold text-3xl">FREE</p>
            </div>
          </div>
        </button>

        <button
          onClick={() => setshowCustomfoam(true)}
          class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-2xl duration-300 "
        >
          <div className=" bg-secondary h-96 border border-primary rounded-lg shadow-2xl">
            <div className="flex justify-center font-bold text-text1 text-2xl py-4">
              Custom Template
            </div>
            <div className="bg-accent shadow-lg rounded-md gap-4 pl-20 h-36">
              <img
                class="h-full rounded-lg py-4 pl-24"
                src={promo}
                alt="description"
              />
            </div>
            <div className="flex justify-center text-primary text-lg font-bold pt-4 pl-10">
              {" "}
              # Add your own style of ticket
            </div>
            <div className="flex justify-center text-primary text-lg font-bold pl-4">
              {" "}
              # 24/7 consultation service
            </div>
            <div className="flex justify-center text-primary text-lg font-bold">
              {" "}
              # Unlimited editing tools
            </div>
            <div className="flex justify-center text-text1 text-2xl pr-4 pt-4 font-bold">
              Subscription{" "}
              <p className="text-primary font-bold text-3xl">Rs 5000/=</p>
            </div>
          </div>
        </button>
      </div>
      <Customfoam onClose={handleOnClose} visible={showCustomfoam} />
    </div>
  );
}
