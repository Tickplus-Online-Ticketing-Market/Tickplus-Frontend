import React, { useState } from "react";
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import Eventcover from "./../../Assets/SponsershipManagement/eventcover.jpg";


import { HiSearch } from "react-icons/hi";
import MyModal2 from "./MyModal2";


export default function Dashboard() {

const[showMyModal, setShowMyModal] = useState(false);

const handleOnClose  = () => setShowMyModal(false);

const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 4,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 464,
        min: 0,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 464,
      },
      items: 3,
      partialVisibilityGutter: 30,
    },
  }
 
  
  return (
    <div className=" overflow-y-visible">
      <div className="flex flex-row justify-between bg-gray-200 border-none mx-6 my-5 max-h-12">
        <div className=" bg-background px-4 flex flex-row justify-between items-center border-[2.4px] border-primary rounded-full gap-2 text-primary">
          <span className="text-xl">{<HiSearch />}</span>
          <input
            type="text"
            placeholder="Search tickets, artists, events and more..."
            className=" bg-background focus:outline-none active:outline-none h-8 w-96 text-text placeholder-primary place-items-start border-none bg-none pb-0.5 italic"
          />
        </div>
        <div className="text-primary text-3xl font-bold">
          <h1>Trending Events</h1>
        </div>

      </div>


      {/*DashboardEventcarousel */}
      <div className="h-1/3 bg-accent">
      

    <div className=" z-[1] ">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={responsive}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
        
      >
        {/* EVENT CARD*/}
        <div>
          <div className=" z-10 mx-2 my-5 bg-background block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
           <div class="overflow-hidden bg-cover bg-no-repeat aspect-video">
           <img class="rounded-t-lg" src={Eventcover} alt="" />
           </div>

         <div className="p-4 aspect-video">
          <button onClick={() => setShowMyModal(true)}
          type="button"
          class="absolute top-[9.7rem] right-4 rounded-lg px-3 py-1 font-bold bg-primary text-white">
             Make A Request</button>
          <h5 className="mb-2 text-2xl font-bold leading-tight text-text">
          Synthesis  </h5>
          <div className="flex justify-between items-center">
            <div><div className="mb-2 text-base text-text">Event ID: E001</div> 
          <div className="mb-2 text-base text-text">Date: 01/01/2024</div></div>
          <div>
          <div className="mb-2 text-base text-text">Venue: Ave Maria Auditorium</div>
          <div className="mb-2 text-base text-text">Attendees:1000</div>  
          </div> 
          </div>
          <p>Artists: Umariya,Wasthi,Jayasri</p>
         </div>
        </div>
      </div>




        {/* EVENT CARD*/}
        <div>
          <div className=" z-10 mx-2 my-5 bg-background block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
           <div class="overflow-hidden bg-cover bg-no-repeat aspect-video">
           <img class="rounded-t-lg" src={Eventcover} alt="" />
           </div>

         <div className="p-4 aspect-video">
          <button onClick={() => setShowMyModal(true)}
          type="button"
          class="absolute top-[9.7rem] right-4 rounded-lg px-3 py-1 font-bold bg-primary text-white">
             Make A Request</button>
          <h5 className="mb-2 text-2xl font-bold leading-tight text-text">
          Synthesis  </h5>
          <div className="flex justify-between items-center">
            <div><div className="mb-2 text-base text-text">Event ID: E001</div> 
          <div className="mb-2 text-base text-text">Date: 01/01/2024</div></div>
          <div>
          <div className="mb-2 text-base text-text">Venue: Ave Maria Auditorium</div>
          <div className="mb-2 text-base text-text">Attendees:1000</div>  
          </div> 
          </div>
          <p>Artists: Umariya,Wasthi,Jayasri</p>
         </div>
        </div>
      </div>



        {/* EVENT CARD*/}
        <div>
          <div className=" z-10 mx-2 my-5 bg-background block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
           <div class="overflow-hidden bg-cover bg-no-repeat aspect-video">
           <img class="rounded-t-lg" src={Eventcover} alt="" />
           </div>

         <div className="p-4 aspect-video">
          <button onClick={() => setShowMyModal(true)}
          type="button"
          class="absolute top-[9.7rem] right-4 rounded-lg px-3 py-1 font-bold bg-primary text-white">
             Make A Request</button>
          <h5 className="mb-2 text-2xl font-bold leading-tight text-text">
          Synthesis  </h5>
          <div className="flex justify-between items-center">
            <div><div className="mb-2 text-base text-text">Event ID: E001</div> 
          <div className="mb-2 text-base text-text">Date: 01/01/2024</div></div>
          <div>
          <div className="mb-2 text-base text-text">Venue: Ave Maria Auditorium</div>
          <div className="mb-2 text-base text-text">Attendees:1000</div>  
          </div> 
          </div>
          <p>Artists: Umariya,Wasthi,Jayasri</p>
         </div>
        </div>
      </div>


        {/* EVENT CARD*/}
        <div>
          <div className=" z-10 mx-2 my-5 bg-background block rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
           <div class="overflow-hidden bg-cover bg-no-repeat aspect-video">
           <img class="rounded-t-lg" src={Eventcover} alt="" />
           </div>

         <div className="p-4 aspect-video">
          <button onClick={() => setShowMyModal(true)}
          type="button"
          class="absolute top-[9.7rem] right-4 rounded-lg px-3 py-1 font-bold bg-primary text-white">
             Make A Request</button>
          <h5 className="mb-2 text-2xl font-bold leading-tight text-text">
          Synthesis  </h5>
          <div className="flex justify-between items-center">
            <div><div className="mb-2 text-base text-text">Event ID: E001</div> 
          <div className="mb-2 text-base text-text">Date: 01/01/2024</div></div>
          <div>
          <div className="mb-2 text-base text-text">Venue: Ave Maria Auditorium</div>
          <div className="mb-2 text-base text-text">Attendees:1000</div>  
          </div> 
          </div>
          <p>Artists: Umariya,Wasthi,Jayasri</p>
         </div>
        </div>
      </div>
  


      </Carousel>
    </div>
      </div>



     <div className="bg-secondary bg-opacity-80 rounded">
      <div className="flex justify-between items-center m-2 overflow-auto form-group">

          <div className=" p-5">
            <div className="p-5 bg-accent bg-opacity-70 rounded-tl-3xl rounded-br-3xl">
              <lable htmlFor="" className="form-lable pr-5 font-bold text-background text-2xl">Event Name :</lable>
              <input className="form-control px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200" name="EventName"></input>
            </div>
            <div className="p-5 mt-5 bg-accent bg-opacity-70 rounded-tl-3xl rounded-br-3xl">
              <lable htmlFor="" className="form-lable pr-5 font-bold text-background text-2xl">Artists :</lable>
              <input className="form-control px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200" name="ArtistNames"></input>
            </div>
            <div className="form-group p-5 mt-5 rounded-tl-3xl rounded-br-3xl bg-accent bg-opacity-70 font-bold text-background text-2xl">
               <label htmlFor="priceInput" className="form-lable">Budget :</label>
               <div>
                 <div>
                    <input type="radio" name="budget" value="Rs.0 - Rs.200,000" />
                    <lable htmlFor="Rs.0 - Rs.200,000">Rs.0 - Rs.200,000</lable>
                 </div>
                 <div>
                    <input type="radio" name="budget" value="Rs.200,000 - Rs.500,000" />
                    <lable htmlFor="Rs.200,000 - Rs.500,000">Rs.200,000 - Rs.500,000</lable>
                 </div>
                 <div>
                    <input type="radio" name="budget" value="Rs.500,000 - Rs.1,000,000" />
                    <lable htmlFor="Rs.500,000 - Rs.1,000,000">Rs.500,000 - Rs.1,000,000</lable>
                 </div>
                 <div>
                    <input type="radio" name="budget" value="Rs.1,000,000 +" />
                    <lable htmlFor="Rs.1,000,000 +">Rs.1,000,000 +</lable>
                 </div>
               </div>
            </div>
           </div>
            
           <div className="p-5">
            <div className="p-5 bg-accent bg-opacity-70 rounded-tl-3xl rounded-br-3xl">
            <lable htmlFor="" className="form-lable pr-5 font-bold text-background text-2xl">Venue :</lable>
            <input className="form-control px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200" name="Venue"></input>
            </div>
            <div className="p-5 mt-5 bg-accent bg-opacity-70 rounded-tl-3xl rounded-br-3xl">
            <label htmlFor="datePicker" className="form-lable pr-5 font-bold text-background text-2xl">Date :</label>
            
            <input className="form-control px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
              type="date" 
              id="datePicker" 
              name="datePicker" 
              />
            </div>
            <div className="form-group p-5 mt-5 rounded-tl-3xl rounded-br-3xl bg-accent bg-opacity-70 font-bold text-background text-2xl">
               <label htmlFor="CountInput" className="form-lable">Attendees :</label>
               <div>
                 <div >
                    <input type="radio" name="attendees" value="0-500" />
                    <lable htmlFor="0-500">0-500</lable>
                 </div>
                 <div>
                    <input type="radio" name="attendees" value="500-1000" />
                    <lable htmlFor="500-1000">500-1000</lable>
                 </div>
                 <div>
                    <input type="radio" name="attendees" value="1000-2000" />
                    <lable htmlFor="1000-2000">1000-2000</lable>
                 </div>
                 <div>
                    <input type="radio" name="attendees" value="2000 +" />
                    <lable htmlFor="2000 +">2000 +</lable>
                 </div>
               </div>
            </div>
           </div>
        
      </div>
      <div className="p-10 flex justify-center">
      <button
          type="button"
          class="text-white text-2xl font-bold bg-primary hover:bg-background hover:text-primary border-primary border-[2.4px] focus:outline-none font-medium rounded-full px-10 py-2 text-center inline-flex items-center"
        >
          <span className=" text-2xl me-4">{<HiSearch />}</span>
          Search
        </button>
        </div>
    
     </div>
     <MyModal2 
    
     onClose={handleOnClose} visible={showMyModal}/>
    </div>
  );
}