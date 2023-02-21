import React, {useEffect, useState} from 'react'
import { Rating } from '@mui/material'

import './DynamicStar.css'

const DynamicStar = ({ratings}) => {

    const ratingLength = ratings.length || 0

    let accumulator = ratings.length !== 0 ? ratings.reduce((accumulator,rating)=> (accumulator += rating)) : 0 

    const value = accumulator/ratingLength
    const valueWithDecimal = Number(value.toPrecision(2))

  return (
    <div className='DynamicStar'>
     <Rating name="half-rating-read" defaultValue={valueWithDecimal || 0.0} precision={0.1} readOnly />
     <div> { ((accumulator/ratingLength) || 0).toFixed(1) }</div>
    </div>
  )
}

export default DynamicStar