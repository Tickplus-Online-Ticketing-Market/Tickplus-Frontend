import React, { useState } from "react";
import image1 from "../../Assets/TicketLaunching/image1.jpg";
import image2 from "../../Assets/TicketLaunching/image2.jpg";
import image3 from "../../Assets/TicketLaunching/image3.jpg";
import Ticketfoam from "./Ticketfoam";

export default function Createtickets2() {
  const [showTickefoam, setshowTicketfoam] = useState(false);
  const handleOnClose = () => setshowTicketfoam(false);

  return (
    <div>
      <div className="text-primary pl-4 text-3xl pb-4 font-bold">
        {" "}
        Create using system template
      </div>
      <div className="font-bold pl-4 text-text pb-6 text-2xl">
        Choose a design
      </div>
      <div className="grid grid-cols-3 gap-4">
        <button
          onClick={() => setshowTicketfoam(true)}
          class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-2xl duration-300 "
        >
          <div className=" bg-accent h-96 border border-primary rounded-lg shadow-2xl">
            <img
              class="mt-16 h-1/2 w-screen rounded-lg"
              src={image1}
              alt="description"
            />
            <div className="font-bold text-3xl pt-10 text-background">
              Default
            </div>
          </div>
        </button>

        <button
          onClick={() => setshowTicketfoam(true)}
          class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-2xl duration-300 "
        >
          <div className=" bg-accent h-96 border border-primary rounded-lg shadow-2xl">
            <img
              class="mt-16 h-1/2 w-screen rounded-lg"
              src={image2}
              alt="description"
            />
            <div className="font-bold text-3xl pt-10 text-background">
              Template 02
            </div>
          </div>
        </button>

        <button
          onClick={() => setshowTicketfoam(true)}
          class="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:shadow-2xl duration-300 "
        >
          <div className=" bg-accent h-96 border border-primary rounded-lg shadow-2xl">
            <img
              class="mt-16 h-1/2 w-screen rounded-lg"
              src={image3}
              alt="description"
            />
            <div className="font-bold text-3xl pt-10 text-background">
              Template 03
            </div>
          </div>
        </button>
      </div>
      <Ticketfoam onClose={handleOnClose} visible={showTickefoam} />
    </div>
  );
}