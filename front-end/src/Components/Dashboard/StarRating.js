import React, {useMemo} from 'react'
import { FaStar } from 'react-icons/fa'

const StarRating = () => {
   
return(
    <div className='star'>
      {[...Array(5)].map((star)=>{
          return  <FaStar size = {40}/>
      })}

    </div>
)

}


export default StarRating