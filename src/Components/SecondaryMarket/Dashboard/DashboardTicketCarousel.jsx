import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TicketCard from "./TicketCard";
import { RetriveActiveAuctionListingsData } from "./RetriveActiveuctionListingsData";

export default function DashboardTicketCarousel() {
  const [auctionData, setAuctionData] = useState([]);

  useEffect(() => {
    RetriveActiveAuctionListingsData()
      .then((data) => {
        setAuctionData(data);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 5,
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
  };

  if (auctionData === null || auctionData.length == 0) {
    return (
      <div className="flex justify-center p-10 text-white">
        No Auction Listings to Show!
      </div>
    );
  }

  return (
    <div className="">
      <Carousel
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={2000}
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
        {auctionData.map((item) => (
          <TicketCard key={item.id} item={item} />
        ))}
      </Carousel>
    </div>
  );
}
