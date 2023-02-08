import React, {useState} from "react";

import './ReviewCard.css'

const ReviewCard = (reviews) => {
    const [showMore, setShowMore] = useState(false)
    const [reviewBody, setReviewBody] = useState(`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Dictum
    fusce ut placerat orci nulla pellentesque dignissim. Ultrices gravida
    dictum fusce ut placerat orci nulla pellentesque dignissim. Aliquet
    nibh praesent tristique magna sit amet. Ipsum consequat nisl vel
    pretium lectus. A diam maecenas sed enim ut sem viverra aliquet eget.
    Ac placerat vestibulum lectus mauris ultrices eros in. Sit amet justo
    donec enim diam vulputate ut. A scelerisque purus semper eget duis at
    tellus. At consectetur lorem donec massa. Venenatis tellus in metus
    vulputate eu. In hac habitasse platea dictumst vestibulum rhoncus est
    pellentesque elit. Porta nibh venenatis cras sed felis eget velit
    aliquet sagittis. Orci phasellus egestas tellus rutrum tellus
    pellentesque. Quisque non tellus orci ac auctor augue mauris augue
    neque.`)

    const truncateReviewText = () =>{
      if(reviewBody.length > 350){
        let review = reviewBody.slice(0,350)+ '...'

        return (
          <div className = 'ellipsis'>
            <p>{showMore ? reviewBody : review }</p>
            <button onClick = {()=>{setShowMore(!showMore)}}>{showMore ? 'Show Less': 'Read More'}</button>
          </div>
        )
        //slice text and add ellipsis
      }else{
        return (
          <div className = 'ellipsis'>
            <p>{reviewBody}</p>
          </div>
        )
      }
    }
    const processText = truncateReviewText()
    const starRating = (num) => {
        switch (num) {
          case 1:
            return "⭐️";
          case 2:
            return "⭐️ ⭐️";
          case 3:
            return "⭐️ ⭐️ ⭐️";
          case 4:
            return "⭐️ ⭐️ ⭐️ ⭐️";
          case 5:
            return "⭐️ ⭐️ ⭐️ ⭐️ ⭐️";
          default:
            return null;
        }
      };
      
  return (
    <div className = 'Reviews'>
      <div className="Reviews__reviewer-info">
        <div className="reviewer__img">
          <img className="Reviewer__profile"
            src={
              reviews.reviewerImg ||
              "data:image/jpeg;base64,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"
            }
          />
        </div>
        <h6>{reviews.reviewerName || "Reviewer Name"}</h6>
      </div>
      <div className="Reviews__review">
        <div>
          {reviews.rating_img || (
            <img className="Reviews__img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7uXIpYlYAPiUlPddsz0lbl_qW-7PXzEKJFA&usqp=CAU" />
          )}{" "}
          Date: {reviews.date || "02/04/2023"}
        </div>
            {truncateReviewText()}

      </div>
    </div>
  );
};

export default ReviewCard;
