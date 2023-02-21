///Dependencies
import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {  IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'
import { SlArrowUp, SlArrowDown } from 'react-icons/sl'

import axios from "axios";

//CSS
import "./RequestDetails.css"
//Bootstrap
import Button from "react-bootstrap/Button";

//Components
import SidebarNav from "../SideBarNav/SidebarNav";
import ReviewForm from "./ReviewForm";


const RequestDetails = ({
  applicationUser,
  setDate,
  date,
  setReviewFormRevealed,
  requestSearch,
  setRequestSearch,
  location,
  pagination,
  request
}) => {
  const [showMore, setShowMore] = useState(false)
  let { id } = useParams();
  let navigate = useNavigate();
  const index = pagination[location].indexOf(Number(id))
  const API = process.env.REACT_APP_BACKEND_API_KEY;
  //  <h5 className='card-text'>
  // <strong>Job Description:</strong>
  // {description}
  // </h5>

  const truncateDescriptionText = () =>{
    if(request.description?.length > 100){
      let description = request.description.slice(0,100)
      return ( <div className="ellipsis"> 
         {!showMore ?  <p className='expand'>{description}<button  className= 'showDetails'onClick = {()=> {setShowMore(!showMore)}}><SlArrowDown/></button></p> : <p>{request.description}<button className= 'showDetails' onClick = {()=>{setShowMore(!showMore)}}><SlArrowUp/></button></p> }
      </div>
      )
    }else{
      return (
        <div className = 'ellipsis'>
          <p>{request.description}</p>
        </div>
      )
    }
  }
  let description = truncateDescriptionText()
  // GET A USER DETAILS VOLUNTEER OR ELDER REQUEST
  // useEffect(() => {
  //   axios.get(`${API}/requests/help_req/${id}`).then((response) => {
  //     setRequest(response.data);
  //   });
  //   axios.get(`${API}/reviews/${id}`).then((res) => setReviews(res.data));
  // }, [id, navigate, API]);

  const missionAccepted = () => {
    axios
      .put(`${API}/requests/accept_request`, {
        volunteer: applicationUser.uuid,
        volunteer_img: applicationUser.profilephoto,
        req_id: id,
      })
      .then(navigate("/user-dashboard"));
  };
  const missionFailed = () => {
    axios
      .put(`${API}/requests/reject_request`, {
        volunteer: "",
        volunteer_img: "",
        req_id: id,
      })
      .then(navigate("/user-dashboard"));
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
  console.log(typeof id)
  console.log(index)
  console.log(pagination[location][index-1])
  
  return (
  
 
      <div className="cards">
    {index !== 0 ? <div className="left">
       <IoIosArrowBack  className ='center' size={ 40 } onClick={()=>{navigate(`/requests/${pagination[location][index-1]}`)}}/>
      </div> : <div></div>}
      <div>
        <h3>Request Details</h3>
        <div className='card-holder'>
          <div className="card-wrap">
            <div className="card-items-forward">
              <figure className='card-fig' data-category='GoldenSolutions'>
                <img className= 'cardImg'
                alt='vol'
                src={request.image || "https://www.nbmchealth.com/wp-content/uploads/2018/04/default-placeholder.png"
              }
              />
              </figure>
            <div className='card-info'>
              <h5 className='card-text'>
                <strong>Job Description:</strong>
                {description}
              </h5>
              <h4 className="card-text">
                <strong>Location: </strong>
                {request.location}
              </h4>
              <p className="warning">
                <span className='red'>*</span> 
                Cancellations within 24 hours
                or missing your appointment will result in a negative review
                & rating.
              </p>
            </div>
            </div>

          </div>

        </div>
        <div className="buttons">
          
          <div>
            <Link to="/user-dashboard">
              <Button className="back">BACK</Button>
            </Link>
          </div>
          <div>
            {applicationUser.user_type === "Volunteer" ? (
              request.volunteer_id !== applicationUser.uuid ? (
                <Button className="accept" onClick={missionAccepted}>
                  ACCEPT
                </Button>
              ) : request.complete && request.req_date < currentDate ? (
                <Button
                className="reject"
                onClick={() => {
                  setReviewFormRevealed(true);
                }}
                >
                  REVIEW
                </Button>
              ) : (
                <Button className="reject" onClick={missionFailed}>
                  REJECT
                </Button>
              
              )
            ) : (
              <Link to={`/edit/${id}`}>
                <Button className="edit">EDIT</Button>
              </Link>
            )}
          </div>
        </div>
      </div>
      {pagination[location].length-1 !== index &&<div className="right">
        <IoIosArrowForward  className='center' size={ 40 } onClick={()=>{navigate(`/requests/${pagination[location][index+1]}`)}}/>
      </div>}
      </div>
   
  );
};

export default RequestDetails;
