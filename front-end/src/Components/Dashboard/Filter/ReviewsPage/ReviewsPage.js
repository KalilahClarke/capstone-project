import React, { useState, useEffect, useContext } from "react";
import axios from 'axios'
import { UserContext } from '../../../../Providers/UserProviders'
import { Link, useNavigate } from "react-router-dom";
import DynamicStar from "../StarRating/DynamicStar";
import Reviews from '../ReviewCard/ReviewCard'
import "./ReviewsPage.css";


//API
const API = process.env.REACT_APP_BACKEND_API_KEY;

const ReviewsPage = ({ applicationUser, dashboardFilter }) => {
  const user = useContext(UserContext);
 
  const [rating, setRating] = useState(0)
  //placeholder
  const [reviews, setReviews] = useState({})
  const [rate, setRate] = useState({})
  const [ratings, setRatings] = useState ([])
  const [reviewCount, setReviewCount] = useState(0)

  let navigate = useNavigate();
  //presort based on review updated
  //create a filter pulling the reviews associated with the the users account. 
  //map through the reviews using the date and the requestSearch in the conditional

  useEffect(()=>{
    axios.get(`${API}/reviews`).then((res) => setReviews(res.data));
    // reviews?.sort((a,b)=> b.post_date - a.post_date )
  },[dashboardFilter === "reviews"])


  // const filteredReviews = (reviews?.filter((review)=> review?.reviewed_id === applicationUser?.uuid)) 

  let accumulator = 0
  // rate?.map((score)=> accumulator += score)
  
  return (
        
      <div className="ReviewPage">
        <div className= 'ReviewPage__personalInfo'>
           <img  className='ReviewPage__img'src={applicationUser.profilephoto || user.photoURL} />
          
        <br/>
       
        <div className= 'ReviewPage__stars'>Star Rating:</div>
        <DynamicStar ratings = {ratings} setReviewCount={setReviewCount}/>
        <div className= 'ReviewPage__count'>Review Count: </div>   
        <div className='count__result'>{( !ratings  ? ratings.length > 1 ? (`${ratings.length} reviews`) : `${ratings.length} review`: 'No Current Reviews') }</div>
        </div>
        <div className='ReviewPage__reviews-list'>
              <Reviews reviews= {reviews}/>
        </div> 
      </div>

  );
};

export default ReviewsPage;
