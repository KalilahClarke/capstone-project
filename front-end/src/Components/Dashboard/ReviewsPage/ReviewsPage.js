import React, { useState, useEffect, useContext } from "react";
import { UserContext } from '../../../Providers/UserProviders';
import { Link, useNavigate } from "react-router-dom";
import DynamicStar from "../StarRating/DynamicStar";
import SidebarNav from "../SideBarNav/SidebarNav";
import Reviews from "../ReviewCard/ReviewCard";
import "./ReviewsPage.css";



const ReviewsPage = ({ date, setDate, applicationUser, setRequestSearch, requestSearch }) => {
  const user = useContext(UserContext);
 
  const [rating, setRating] = useState(0)
  //placeholder
  const [reviews, setReviews] = useState({})
  const [rate, setRate] = useState({})
  const [ratings, setRatings] = useState ([5,2,3,4,5,3.5,4,4,5])

  const [reviewCount, setReviewCount] = useState(0)
  let navigate = useNavigate();
  //presort based on review updated
  //create a filter pulling the reviews associated with the the users account. 
  //map through the reviews using the date and the requestSearch in the conditional
  let accumulator = 0
  // rate.map((score)=> accumulator += score)
  
 
  return (
    <div className="user-dashboard">
      <div className="sidebar-nav">
        <SidebarNav
          date={date}
          setDate={setDate}
          applicationUser={applicationUser}
          setRequestSearch = {setRequestSearch}
          requestSearch = {requestSearch}
        />
      </div>

        

      <div className="main-page ReviewPage">
        <div className= 'ReviewPage__personalInfo'>
        <img  className='ReviewPage__img'src={applicationUser.profilephoto || user.photoURL} />
        <br/>
        <div className= 'ReviewPage__stars'>Star Rating:</div>
        <DynamicStar ratings = {ratings} setReviewCount={setReviewCount}/>
        <div className= 'ReviewPage__count'>Review Count: </div>   
        <div className='count__result'>{ratings.length > 1 ? (`${ratings.length} reviews`): `${ratings.length} review` || 'No Current Reviews'}</div>
        </div>
        <div className='ReviewPage__reviews-list'>
          <Reviews reviews= {reviews}/>
        </div>


        
      </div>
    </div>
  );
};

export default ReviewsPage;
