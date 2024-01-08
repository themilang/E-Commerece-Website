import React from "react";
import { Avatar, Box, Rating } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import SendIcon from '@mui/icons-material/Send';
import { Button } from "@mui/material";

const data = [
  {
    ProfileInitial: "M",
  },
];
const ProductReviewCard = () => {
  return (
    <>
    <div>
      <div className=" flex flex-row gap-5">
        <div>
          <Box className="flex items-center text-center gap-5">
            <Avatar className="text-white mt-4 ">
              {data[0].ProfileInitial}
            </Avatar>
          </Box>
        </div>
        <div>
          <p className="text-white mt-2 ">
            {" "}
            <span className="font-bold">Milan Ghimire</span> <br />{" "}
            <span className="text-gray-500">24th jan 2024</span>
          </p>
          <div className="mt-2">
            <Rating
              name="half-rating-read"
              defaultValue={3.5}
              precision={0.5}
              emptyIcon={<StarBorderIcon style={{ color: "white" }} />}
              readOnly
            />
          </div>

          <p className="text-white">
            This product is so awesome iam ordering for my family too
          </p>
        </div>
      </div>
    </div>
      
      </>
  );
};

export default ProductReviewCard;
