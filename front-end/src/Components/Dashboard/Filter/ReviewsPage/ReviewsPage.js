//DEPENDENCIES
import { useState, useEffect, useContext } from "react";
import axios from "axios";
// import { UserContext } from "../../../../Providers/UserProviders";
import { Link, useNavigate } from "react-router-dom";

//COMPONENTS
import DynamicStar from "../StarRating/DynamicStar";
import ReviewCard from "../ReviewCard/ReviewCard";

//CSS
import "./ReviewsPage.css";

//API
const API = process.env.REACT_APP_BACKEND_API_KEY;

const ReviewsPage = ({ applicationUser, requests }) => {
  const [reviews, setReviews] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [reviewCount, setReviewCount] = useState(0);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get(`${API}/reviews`)
    .then(res => {
      setReviews(res.data);
      setReviewCount(res.data.length);
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
        <div className="ReviewPage__count">Review Count: {reviewCount}</div>
        {/* <div className="count__result">
          {!ratings
            ? ratings.length > 1
              ? `${ratings.length} reviews`
              : `${ratings.length} review`
            : "No Current Reviews"}
        </div> */}
      </div>
      <div className="ReviewPage__reviews-list">
        {reviews.map(review => <ReviewCard key={review.id} review={review} requests={requests} />)}
      </div>
    </div>
  );
};

export default ReviewsPage;