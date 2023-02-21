//DEPENDENCIES

import axios from "axios";
import React,{ useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {  IoIosArrowForward, IoIosArrowBack } from 'react-icons/io'

//CSS
import './RequestDetails.css'
import StarRating from '../StarRating/StarRating';

//Bootstrap
import Button from "react-bootstrap/Button";


//API
const API = process.env.REACT_APP_BACKEND_API_KEY;

const RequestReviewForm = ({ applicationUser, request }) => {
  let navigate = useNavigate()

  const { id } = useParams();
  const [edit, setEdit] = useState(false)
  // const [reviews, setReviews] = useState([]); disgard
  const [newReview, setNewReview] = useState({
    reviewer_id: applicationUser.uuid,
    reviewed_id:  applicationUser.user_type === 'Volunteer' ? request.elder_id : request.volunteer_id,
    reviewer_photo: applicationUser.profilephoto,
    description: "",
    post_date: "",
    request_id: id,
  });
  
  //Date Converter
  const dateConverter = (specifiedDate) => {
    
    const fullYear = specifiedDate?.getFullYear();
    const month = specifiedDate?.getMonth() + 1;
    const paddedMonth = month.toString().padStart(2,'0');
    const currentDate = specifiedDate?.getDate()
    const paddedDate = currentDate.toString().padStart(2,'0')
    
    const formattedDate = `${fullYear}-${paddedMonth}-${paddedDate}`
    
    return formattedDate
  };
  let currentDate = dateConverter(new Date());
  //Variable Declared and new Date passed in to format for backend


  const [user, setUser] = useState({})

  //Need Explanation ?
  useEffect(() => {
    axios
      .get(`${API}/reviews/${id}`)
      .then((res) => {
        const reviews = res.data
        //find review with id and userId 
        const currentReview = reviews.find(review => review.request_id ===  Number(id) && review.reviewer_id === applicationUser.uuid)
        //if it exist 
        // console.log(currentReview)
        if(currentReview){
          setNewReview(currentReview)
          console.log(newReview)
        }
      })

    //   if(applicationUser.user_type === 'Volunteer'){
    // axios
    //   .get(`${API}/users/${request.elder_id}`)
    //   .then((res)=>setUser(res.data.payload))
    //   }else{
    // axios
    //   .get(`${API}/users/${request.volunteer_id}`)
    //   .then((res)=>setUser(res.data.payload))

    //   }
  }, []);

//   let filter =  review.find( specifiedReview => specifiedReview.reviewer_id === applicationUser.uuid)
  const handleSubmit = (e) => {
    e.preventDefault();
    setNewReview({...newReview, post_date: currentDate})
    
    if(newReview.description){
      console.log(newReview)
      axios.put((`${API}/reviews/${id}`), newReview)
    }else{
      axios.post((`${API}/reviews/${id}`), newReview);
    }
    
  }

  const handleTextReview = (e) => {
    setNewReview({ ...newReview, description: e.target.value });
  };

  return (
    <div className='cards'>
      <div className="left">
       <IoIosArrowBack  className ='center' size={ 40 }/>
      </div>
      <div>
        <h3>Request Review</h3>
        <div className='card-holder'>
            <div className='card-wrap'>
                <div className='card-items-forward'>
                <figure className="card-fig" data-category="GoldenSolutions">
                  <img
                    className="cardImg"
                    alt="vol"
                    src={
                      request.image || "https://www.nbmchealth.com/wp-content/uploads/2018/04/default-placeholder.png"
                    }
                  />
                </figure>
                <div className='card-info'>
                    <h5 className='card-text'> Review Rating</h5>
                    <StarRating/>
                    <textarea rows={4} cols= {48} value = {newReview.description} onChange = {handleTextReview}/>
                </div>
                </div>

            </div>
        </div>
        <div className="buttons">
        <div>
            
              <Button className="back" onClick={()=>{navigate(`/requests/${request.id}`)}}>BACK</Button>
              
              {/* {reviews.description && !edit ?  */}
              {/* <Button className="back" onClick={handleEdit}>EDIT</Button> */}
              <Button className="back" onClick={handleSubmit}>SUBMIT</Button>

            </div>
        </div> 
      </div>
      <div className="right">
        <IoIosArrowForward  className='center' size={ 40 }/>
      </div>
    </div>
  )
}

export default RequestReviewForm

// && !edit ? <div>{reviews}</div>:<textarea value= {reviews.find((user) => user.reviewer_id === applicationUser.uuid && <p>{user.reviewer_id}</p> || '')} rows={4} cols= {56} onChange={handleTextReview}></textarea>}