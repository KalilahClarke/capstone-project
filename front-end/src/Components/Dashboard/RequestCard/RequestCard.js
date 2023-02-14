//Dependencies
import { Link } from "react-router-dom";

//CSS Imports
import "./RequestCard.css";

const RequestCard = ({ request }) => {
  const time = () => {
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

  return (
    <div className="req-card-details">
      <Link className="link" to={`/requests/${request.id}`}>
        <div className="req-card">
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
              <i className="fa-regular fa-clock clock"></i> {time()}
            </span>
          </div>
          <div className="our-badge">
            <span>GoldenSolutions</span>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default RequestCard;
