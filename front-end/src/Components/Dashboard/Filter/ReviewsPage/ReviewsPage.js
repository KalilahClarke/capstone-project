//DEPENDENCIES
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

//COMPONENTS
import DynamicStar from "../StarRating/DynamicStar";
import ReviewCard from "../ReviewCard/ReviewCard";
import ZeroRequests from "../ZeroResults/ZeroRequests";
//CSS
import "./ReviewsPage.css";

//API
const API = process.env.REACT_APP_BACKEND_API_KEY;

const ReviewsPage = ({ applicationUser, dashboardFilter }) => {
  const [reviews, setReviews] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [reviewCount, setReviewCount] = useState(0);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API}/reviews`)
    .then(res => {
      const reviews = res.data;
      const userReviews = reviews.filter(review => review.reviewed_id === applicationUser.uuid);
      if(userReviews){
        setReviews(userReviews);
        setReviewCount(userReviews.length);
      }
    })
  }, []);
  // const user = useContext(UserContext);
  // const [rating, setRating] = useState(0);
  //placeholder
  // const [rate, setRate] = useState({});

  //presort based on review updated
  //create a filter pulling the reviews associated with the the users account.
  //map through the reviews using the date and the requestSearch in the conditional
  // let accumulator = 0;
  // rate.map((score)=> accumulator += score)

  return (
    <div className="ReviewPage">
      <div className="ReviewPage__personalInfo">
        <img
          className="ReviewPage__img"
          src={applicationUser?.profilephoto}
        />
        <br />
        <div className="ReviewPage__stars">Star Rating:</div>
        <DynamicStar ratings={ratings} setReviewCount={setReviewCount} />
        <div className="ReviewPage__count">Review Count: <span className= 'reviewCount_span'>{reviewCount === 0 ? 'No Reviews' : reviewCount}{!!reviewCount && (reviewCount > 1 ? ' reviews': ' review')}</span></div>
      </div>
      <div className="ReviewPage__reviews-list">
      {reviews.length === 0 ? <ZeroRequests dashboardFilter={dashboardFilter}/> : reviews.map(review => <ReviewCard key={review.id} review={review} />)}
      </div>
    </div>
  );
};

export default ReviewsPage;