import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Button } from "@mui/material";

const HomeSectionCardCarousle = ({ data }) => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
  };

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
          />
          <Button
            variant=""
            classname="z-40 bg-white"
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
