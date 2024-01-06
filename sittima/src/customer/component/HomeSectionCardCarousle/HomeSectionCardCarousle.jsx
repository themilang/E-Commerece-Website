import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button } from "@mui/material";

const HomeSectionCardCarousle = ({ data }) => {

 const [activeIndex,setactiveIndex]=useState(0);
  
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
  };


  const slideNext=()=>{
    setactiveIndex(activeIndex+6)
    console.log('clicked Next')
  
  }
  const slidePrev=()=>{
    setactiveIndex(activeIndex-1)
    console.log('clicked')
  
  }

  const scanactiveIndex=({item})=>{setactiveIndex(item)
    console.log('Slide changed to index:', item);}


 
  const items = data.map((item) => {
    return ( <HomeSectionCard product={item} />)

  });





  return (
    <>
      <div className="relative px-4 lg:px-8">
        <div className="relative p-5">
          <AliceCarousel
            mouseTracking
            items={items}
            controlsStrategy="alternate"
            // autoPlay
            // autoPlayInterval={1000}
            disableDotsControls
            disableButtonsControls
            infinite
            responsive={responsive}
            onSlideChanged={scanactiveIndex}
            activeIndex={activeIndex}
          
          />
          <Button
            variant=""
            className="z-40 bg-white"
            onClick={slideNext}
            sx={{
              position: "absolute",
              top: "8rem",
              right: "1rem",
              transform: "translatex(50%) rotate(90deg)",
              ":hover": { color: "green" },
              color: "#ffff",
            }}
          >
            <ArrowForwardIcon sx={{ transform: "rotate(-90deg)" }} />
          </Button>
          <Button
            variant=""
            classname="z-40 bg-white"
            onClick={slidePrev}
            sx={{
              position: "absolute",
              top: "8rem",
              left: "-3rem",
              transform: "translatex(50%) rotate(90deg)",
              ":hover": { color: "green" },
              color: "#ffff",
            }}
          >
            <ArrowForwardIcon sx={{ transform: "rotate(90deg)" }} />
          </Button>
        </div>
      </div>
    </>
  );
};

export default HomeSectionCardCarousle;
