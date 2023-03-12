///Dependencies
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";


import axios from "axios";

//CSS
import "./RequestDetails.css";

//Bootstrap
import Button from "react-bootstrap/Button";

//Components

import ReviewForm from "./ReviewForm";
import RequestDetails from "./RequestDetails";


const RequestPage = ({
  applicationUser,
  setDashboardFilter,
  dashboardFilter,
  requestSearch,
  setRequestSearch,
  iteration,
  location,
  render, 
  setRender
 
 
}) => {
  
  const [request, setRequest] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [reviewFormRevealed, setReviewFormRevealed] = useState(false);
  let { id } = useParams();
  let navigate = useNavigate();

  const API = process.env.REACT_APP_BACKEND_API_KEY;
  // GET A USER DETAILS VOLUNTEER OR ELDER REQUEST
  useEffect(() => {
    axios.get(`${API}/requests/help_req/${id}`).then((response) => {
      setRequest(response.data);
    });
    axios.get(`${API}/reviews/${id}`).then((res) => setReviews(res.data));
  }, [id, navigate, API]);

  const missionAccepted = () => {
    axios
      .put(`${API}/requests/accept_request`, {
        volunteer: applicationUser.uuid,
        volunteer_img: applicationUser.profilephoto,
        req_id: id,
      })
      .then(navigate("/dashboard"));
  };
  const missionFailed = () => {
    axios
      .put(`${API}/requests/reject_request`, {
        volunteer: "",
        volunteer_img: "",
        req_id: id,
      })
      .then(navigate("/dashboard"));
  };

  const dateConverter = (specifiedDate = "") => {
    const fullYear = specifiedDate.getFullYear();
    const month = specifiedDate.getMonth() + 1;
    const paddedMonth = month.toString().padStart(2, "0");
    const currentDate = specifiedDate.getDate();
    const paddedDate = currentDate.toString().padStart(2, "0");

    const formattedDate = `${fullYear}-${paddedMonth}-${paddedDate}`;

    return formattedDate;
  };
  let currentDate = dateConverter(new Date());
  
  return (
    <div className="details">

      {!reviewFormRevealed ?<RequestDetails
      applicationUser={applicationUser}
      setDashboardFilter = {setDashboardFilter}
      dashboardFilter ={dashboardFilter}
      setReviewFormRevealed={setReviewFormRevealed}
      requestSearch={requestSearch}
      setRequestSearch={setRequestSearch}
      iteration={iteration}
      location = {location}
      render={render}
      setRender={setRender}
      
    
      request={request}
      />
      : <ReviewForm 
      request={request}
      reviews={reviews}
      setReviews={setReviews}
      currentDate={currentDate}
      applicationUser={applicationUser}
      />}
     
    </div>
  );
};

export default RequestPage;

     