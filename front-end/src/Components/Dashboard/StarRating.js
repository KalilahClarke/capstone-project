import React, { useState }from 'react'
import { FaStar } from 'react-icons/fa'
import './StarRating.css'

const StarRating = () => {
  const [rating, setRating] = useState(null);
   
return(
    <div className='star'>
      {[...Array(5)].map((star, index)=>{
          const ratingValue = index + 1;

          return  <label>
            <input type= 'radio' name='rating' value ={ratingValue} onClick={()=>{setRating(ratingValue)}}/>
            <FaStar className = 'star' color={ratingValue <= rating ? '#ffc107':'#e4e5e9'}size = {40} />
            </label>
      })}

    </div>
)

}


export default StarRating