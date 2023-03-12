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

      // <div className="details">
      //   <div className="sidebar-Nav">
      //     <SidebarNav
      //       setDate={setDate}
      //       date={date}
      //       applicationUser={applicationUser}
      //       requestSearch={requestSearch}
      //       setRequestSearch={setRequestSearch}
      //     />
      //   </div>
      //  { !reviewFormRevealed ? <div className="cards">
      //     <h3>Request Details</h3>
      //       <div className="card-holder">
      //         <div className="card-wrap">
      //           <div className="card-items-forward">
      //             <figure className="card-fig" data-category="GoldenSolutions">
      //               <img
      //                 className="cardImg"
      //                 alt="vol"
      //                 src={
      //                   request.image
      //                   ? request.image
      //                   : "https://www.nbmchealth.com/wp-content/uploads/2018/04/default-placeholder.png"
      //                 }
      //               />
      //             </figure>
      //             <div className="card-info">
      //               <h5 className="card-text">
      //                 <strong>Job Description:</strong> {request.description}
      //               </h5>
      //               <h4 className="card-text">
      //                 <strong>Location:</strong> {request.location}
      //               </h4>
      //               <p className="warning">
      //                 <span className="red">*</span> Cancellations within 24 hours
      //                 or missing your appointment will result in a negative review
      //                 & rating.
      //               </p>
      //             </div>
      //           </div>
      //         </div>
      //       </div> 
      //     <div className="buttons">
            
      //       <div>
      //         <Link to="/user-dashboard">
      //           <Button className="back">BACK</Button>
      //         </Link>
      //       </div>
      //       <div>
      //         {applicationUser.user_type === "Volunteer" ? (
      //           request.volunteer_id !== applicationUser.uuid ? (
      //             <Button className="accept" onClick={missionAccepted}>
      //               ACCEPT
      //             </Button>
      //           ) : request.complete && request.req_date < currentDate ? (
      //             <Button
      //             className="reject"
      //             onClick={() => {
      //               setReviewFormRevealed(true);
      //             }}
      //             >
      //               REVIEW
      //             </Button>
      //           ) : (
      //             <Button className="reject" onClick={missionFailed}>
      //               REJECT
      //             </Button>
                
      //           )
      //         ) : (
      //           <Link to={`/edit/${id}`}>
      //             <Button className="edit">EDIT</Button>
      //           </Link>
      //         )}
      //       </div>
      //     </div>
      //   </div> 