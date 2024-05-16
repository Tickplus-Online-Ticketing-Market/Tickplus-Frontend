import React, { useState } from "react";
import image1 from "../../Assets/TicketLaunching/image1.jpg";
import image2 from "../../Assets/TicketLaunching/image2.jpg";
import image3 from "../../Assets/TicketLaunching/image3.jpg";
import Ticketfoam from "./Ticketfoam";

export default function Createtickets2() {
  const [showTicketfoam, setshowTicketfoam] = useState(false);
  const handleOnClose = () => setshowTicketfoam(false);

  // Custom design images
  const customDesigns = [image2, image3];

  return (
    <div>
      <div className="scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar scrollbar-thumb scrollbar-track h-[33rem] overflow-y-scroll">
        <div className="text-primary pl-4 text-3xl pb-4 font-bold">
          Choose a design
        </div>
        <div className="font-bold pl-4 text-text pb-6 text-2xl">System designs</div>
        <div>
          <button
            onClick={() => setshowTicketfoam(true)}
            className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-108 hover:shadow-2xl duration-300"
          >
            <div className="bg-accent h-96 border border-primary rounded-lg shadow-2xl">
              <img
                className="mt-16 h-1/2 w-[70] rounded-lg"
                src={image1}
                alt="description"
              />
              <div className="font-bold text-3xl pt-10 text-background">Default</div>
            </div>
          </button>
        </div>
        <div className="pt-10">
          <div className="font-bold pl-4 text-text pb-6 text-2xl">Custom designs</div>
          <div className="grid grid-cols-3 gap-4">
            {customDesigns.map((image, index) => (
              <button
                key={index}
                onClick={() => setshowTicketfoam(true)}
                className="transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-108 hover:shadow-2xl duration-300"
              >
                <div className="bg-accent h-96 border border-primary rounded-lg shadow-2xl">
                  <img
                    className="mt-16 h-1/2 w-screen rounded-lg"
                    src={image}
                    alt={`Template ${index + 2}`}
                  />
                  <div className="font-bold text-3xl pt-10 text-background">
                    Template {index + 2}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
      <Ticketfoam onClose={handleOnClose} visible={showTicketfoam} />
    </div>
  );
}
