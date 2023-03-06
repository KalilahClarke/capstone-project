//Dependencies
import { Link } from "react-router-dom";

//CSS Imports
import "./RequestCard.css";

const RequestCard = ({ request, applicationUser }) => {
  
  const formatTime = () => {
    if (request.time.length <= 5) {
      let timeArray = request.time.split(":");
      if (Number(timeArray[0]) > 12) {
        return Number(timeArray[0]) - 12 + ":" + timeArray[1] + "PM";
      } else {
        return timeArray[0] + ":" + timeArray[1] + "AM";
      }
    } else {
      return request.time;
    }
  };
  let imgString = applicationUser.user_type === 'Volunteer' ? request.elder_id : request.volunteer_id
  console.log(imgString)
  return (
    
    <div className="req-card-details">
      {imgString && <Link to = {applicationUser?.user_type === 'Volunteer' ? `/reviews/${request.elder_id}`:`/reviews/${request.volunteer_id}` }>
         <img className="req-card-img" src={applicationUser?.user_type === 'Volunteer' ?  request.elder_img  : request?.volunteer_img}/>
      </Link> }
        <div className="req-card">
      <Link className="link" to={`/requests/${request.id}`}>
          <img
            className="reqImg"
            alt="vol"
            src={
              request.image
              ? request.image
              : "https://www.nbmchealth.com/wp-content/uploads/2018/04/default-placeholder.png"
            }
            />

          <div className="req-info">
            <h6 className="req-title">{request.title}</h6>
            <span className="reqdate">{request.req_date}</span>
            <span className="assignment">
              {request.assigned ? "Assigned" : "Pending"}
            </span>
            <br />
            <span className="reqtime">
              <i className="fa-regular fa-clock clock"></i> {formatTime()}
            </span>
          </div>
          <div className="our-badge">
            <span>GoldenSolutions</span>
          </div>
      </Link>
        </div>
    </div>

  );
};
export default RequestCard;
