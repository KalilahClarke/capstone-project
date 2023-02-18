import React, { useState } from "react";
import { FaStar } from 'react-icons/fa'
import "./StarRating.css";
// import { Rating } from "@mui/material";

const StarRating = () => {
  const [rating, setRating] = useState(null);
  // const [value, setValue] = useState(0)

  return (
    <div className="star">
      {/* <Rating
        name="simple-controlled"
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      /> */}
      {[...Array(5)].map((star, index)=>{
          const ratingValue = index + 1;

          return  <label key={index}>
            <input type= 'radio' name='rating' value ={ratingValue}  onClick={()=>{setRating(ratingValue)}}/>
            <FaStar className = 'star' color={ratingValue <= rating ? '#ffc107':'#e4e5e9'}size = {25} />
            </label>
      })}
    </div>
  );
};

export default StarRating;
