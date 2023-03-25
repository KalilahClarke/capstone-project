//DEPENDENCIES
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

//COMPONENTS
import PublicReviewCard from "./PublicReviewCard";
import DynamicStar from "../../Filter/StarRating/DynamicStar";

//CSS
import "../../Filter/ReviewsPage/ReviewsPage.css";

//API
const API = process.env.REACT_APP_BACKEND_API_KEY;

const PublicReviews = () => {
    let { id } = useParams();

  const [reviews, setReviews] = useState([]);
  const [users, setUsers] = useState([]);
  const [ratings, setRatings] = useState([]);
  const [reviewCount, setReviewCount] = useState(0);
  console.log(reviews)

  useEffect(() => {
    axios.get(`${API}/reviews`).then((res) => {
        setReviews(res.data)
    });

    axios.get(`${API}/users`)
    .then(res => setUsers(res.data))
  }, []);

  const foundUser = users.find(user => user.uuid === id);
  const foundReviews = reviews.filter(review => review.reviewed_id === id);

  return (
    <div>
      <div className="ReviewPage">
        <div className="ReviewPage__personalInfo">
          <img
            className="ReviewPage__img"
            src={foundUser?.profilephoto}
          />
          <br />
          <div className="ReviewPage__stars">Star Rating:</div>
          <DynamicStar ratings={ratings} setReviewCount={setReviewCount} />
          <div className="ReviewPage__count">Review Count: {foundReviews?.length}</div>
          <div className="count__result">
            {!ratings
              ? ratings.length > 1
                ? `${ratings.length} reviews`
                : `${ratings.length} review`
              : "No Current Reviews"}
          </div>
        </div>
        <div className="ReviewPage__reviews-list">
          {foundReviews.map((review) => (
            <PublicReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PublicReviews;