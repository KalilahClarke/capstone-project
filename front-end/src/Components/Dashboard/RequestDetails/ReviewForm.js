//DEPENDENCIES

import axios from "axios";
import React,{ useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

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
  const [review, setReview] = useState([]);
  
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
  //Variable Declared and new Date passed in to format for backend
  let currentDate = dateConverter(new Date());

  const reviewed = applicationUser.verification_type === 'Volunteer' ? request.elder_id : request.volunteer_id

  const [newReview, setNewReview] = useState({
    reviewer_id: applicationUser.uuid,
    //Added Element that need to be in Back-end
    reviewed_id: reviewed,
    reviewer_photo: applicationUser.profilephoto,
    description: "",
    post_date: currentDate,
    request_id: id,
  });
    //console.log(newReview)

  const [user, setUser] = useState({})

  //Need Explanation ?
  useEffect(() => {
    axios
      .get(`${API}/reviews/${id}`)
      .then((res) => setReview(res.data))

      if(applicationUser.user_type === 'Volunteer'){
    axios
      .get(`${API}/users/${request.elder_id}`)
      .then((res)=>setUser(res.data.payload))
      }else{
    axios
      .get(`${API}/users/${request.volunteer_id}`)
      .then((res)=>setUser(res.data.payload))
      }
  }, []);



//   let filter =  review.find( specifiedReview => specifiedReview.reviewer_id === applicationUser.uuid)
  const handleSubmit = (e) => {
    e.preventDefault();
    if(review.description){
      axios.put(`${API}/reviews`, newReview)
    }else{
      axios.post(`${API}/reviews`, newReview);

    }
  }
  const handleTextReview = (e) => {
    setNewReview({ ...newReview, description: e.target.value });
  };
  const handleEdit = (e) =>{

  }
  
  const find = review.find((user)=> {
    if(user.reviewer_id === applicationUser){

    }
  
  })
  console.log(find)

  console.log(review)
  console.log(newReview)
  return (
    <div className='cards'>
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
                    {review.description && !edit ? <div>{review.description}</div>:<textarea value= {review.find((user) => user.reviewer_id === applicationUser.uuid && <p>{user.reviewer_id}</p> || '')} rows={4} cols= {56} onChange={handleTextReview}></textarea>}
                </div>
                </div>

            </div>
        </div>
        <div className="buttons">
        <div>
            
              <Button className="back"onClick={()=>{navigate(`/requests/${request.id}`)}}>BACK</Button>
              
              {review.description && !edit ? 
              <Button className="back" onClick={handleEdit}>EDIT</Button>
             : <Button className="back" onClick={handleSubmit}>SUBMIT</Button>
}
            </div>
        </div> 
    </div>
  )
}

export default RequestReviewForm