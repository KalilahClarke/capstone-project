import React, { useState, useEffect, useContext } from "react";
import { UserContext } from '../../Providers/UserProviders';
import { Link, useNavigate } from "react-router-dom";

import SidebarNav from "./SidebarNav";
import Rate from './Rate'
import Reviews from "./ReviewCard";
import "./ReviewsPage.css";


const ReviewsPage = ({ date, setDate, applicationUser, setRequestSearch, requestSearch }) => {
  const user = useContext(UserContext);
 
  const [rating, setRating] = useState(0)
  //placeholder
  const [reviews, setReviews] = useState({})
  let navigate = useNavigate();
 
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
        <h4 className= 'ReviewPage__stars'>Star Rating:</h4>
        <Rate rating={rating} OnRating={rate=> setRating(rate)} />
        <h4>Review Count: </h4>
        <p>{reviews.length || 'Review Count'}</p>
        </div>
        <div className='ReviewPage__reviews-list'>
          <Reviews reviews= {reviews}/>
        </div>


        
      </div>
    </div>
  );
};

export default ReviewsPage;
