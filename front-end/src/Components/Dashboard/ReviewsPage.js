import React, { useState, useEffect, useContext } from "react";
import { UserContext } from '../../Providers/UserProviders';
import { Link, useNavigate } from "react-router-dom";

import SidebarNav from "./SidebarNav";
import StarRating from './StarRating'
import Reviews from "./ReviewCard";
import "./ReviewsPage.css";



const ReviewsPage = ({ date, setDate, applicationUser, setRequestSearch, requestSearch }) => {
  const user = useContext(UserContext);
 
  const [rating, setRating] = useState(0)
  //placeholder
  const [reviews, setReviews] = useState({})
  let navigate = useNavigate();
  //presort based on review updated
  //create a filter pulling the reviews associated with the the users account. 
  //map through the reviews using the date and the requestSearch in the conditional
 
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
        <h5 className= 'ReviewPage__stars'>Star Rating:</h5>
        <StarRating  />
        <h5>Review Count: </h5>
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
