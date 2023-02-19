import React, {useState} from 'react'
import { Rating } from '@mui/material'

import './DynamicStar.css'

const DynamicStar = ({setReviewCount}) => {
    const [starValue, setStarValue] = useState(0.0)

    const [ratings, setRatings] = useState ([5,2,3,4,5,3.5,4,4,5])

    const ratingLength = ratings.length
    setReviewCount(ratingLength)
    let accumulator = ratings.reduce((accumulator,rating)=> (accumulator += rating))
    
    
  return (
    <div className='DynamicStar'>
     <Rating name="half-rating-read" defaultValue={Number(accumulator/ratingLength).toPrecision(2)} precision={0.1} readOnly />
     <div> { (accumulator/ratingLength).toFixed(1) }</div>
    </div>
  )
}

export default DynamicStar