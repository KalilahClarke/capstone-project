import React, {useEffect, useState} from 'react'
import { Rating } from '@mui/material'

import './DynamicStar.css'

const DynamicStar = ({ratings}) => {

    const ratingLength = ratings.length
    
    let accumulator = ratings.reduce((accumulator,rating)=> (accumulator += rating))
    
  return (
    <div className='DynamicStar'>
     <Rating name="half-rating-read" defaultValue={Number((accumulator/ratingLength).toPrecision(2))} precision={0.1} readOnly />
     <div> { (accumulator/ratingLength).toFixed(1) }</div>
    </div>
  )
}

export default DynamicStar