//DEPENDENCIES
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

//COMPONENTS
import PublicReviewCard from "./PublicReviewCard";
import ZeroRequests from "../../Filter/ZeroResults/ZeroRequests";
import DynamicStar from "../../Filter/StarRating/DynamicStar";

//CSS
import "../../Filter/ReviewsPage/ReviewsPage.css";
import SidebarNav from "../../SideBarNav/SidebarNav";
import '../../../Dashboard/Dashboard.css'

//API
const API = process.env.REACT_APP_BACKEND_API_KEY;

const PublicReviews = ({
  applicationUser,
  setRequestSearch,
  requestSearch,
  setDashboardFilter,
  dashboardFilter,
}) => {
  let { id } = useParams();
  const [date, setDate] = useState(new Date());
  const [reviews, setReviews] = useState([]);
  const [users, setUsers] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [reviewCount, setReviewCount] = useState(0);
  console.log(reviews);

  useEffect(() => {
    axios.get(`${API}/reviews`).then((res) => {
      setReviews(res.data);
    });

    axios.get(`${API}/users`).then((res) => setUsers(res.data));
  }, []);

  const foundUser = users.find((user) => user.uuid === id);
  const foundReviews = reviews.filter((review) => review.reviewed_id === id);

  return (
    <div className="dashboard">
      <SidebarNav
        setDate={setDate}
        date={date}
        applicationUser={applicationUser}
        requestSearch={requestSearch}
        setRequestSearch={setRequestSearch}
        setDashboardFilter={setDashboardFilter}
        dashboardFilter={dashboardFilter}
      />
      <div className="ReviewPage">
        <div className="ReviewPage__personalInfo">
          <img className="ReviewPage__img" src={foundUser?.profilephoto} />
          <br />
        <div className="ReviewPage__stars">Star Rating:</div>
        <DynamicStar ratings={ratings} setReviewCount={setReviewCount} />
        <div className="ReviewPage__count">Review Count: <span className= 'reviewCount_span'>{reviewCount === 0 ? 'No Reviews' : reviewCount}{!!reviewCount && (reviewCount > 1 ? ' reviews': ' review')}</span></div>
          </div>
        <div className="ReviewPage__reviews-list">
          {foundReviews.length === 0 ? (
            <ZeroRequests />
          ) : (
            foundReviews.map((review) => (
              <PublicReviewCard key={review.id} review={review} />
            ))
          )}
      
      </div>
      </div>
    </div>
  );
};

export default PublicReviews;
