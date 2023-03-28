///Dependencies
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";


import axios from "axios";

//CSS
import "./RequestDetails.css";

//Components

import ReviewForm from "./ReviewForm";
import RequestDetails from "./RequestDetails";
import EditRequest from "../EditRequest/EditRequest";


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
  const [editRequestRevealed, setEditRequestRevealed] = useState(false);

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
  
  
  const renderContent = () => {
    if(reviewFormRevealed){
      return <ReviewForm 
      request={request}
      reviews={reviews}
      setReviews={setReviews}
      currentDate={currentDate}
      applicationUser={applicationUser}
      setReviewFormRevealed={setReviewFormRevealed}
      />
    }else if(editRequestRevealed){
      return <EditRequest
      applicationUser={applicationUser}
      editRequestRevealed={editRequestRevealed}
      setEditRequestRevealed={setEditRequestRevealed}
    />
    }

    return <RequestDetails
    applicationUser={applicationUser}
    setDashboardFilter = {setDashboardFilter}
    dashboardFilter ={dashboardFilter}
    setReviewFormRevealed={setReviewFormRevealed}
    setEditRequestRevealed={setEditRequestRevealed}
    requestSearch={requestSearch}
    setRequestSearch={setRequestSearch}
    iteration={iteration}
    location = {location}
    render={render}
    setRender={setRender}
    request={request}
    />
  }
  
  return (
    <div className="details">
      {renderContent()}
    </div>
  );
};

export default RequestPage;

     