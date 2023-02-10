//Dependencies
import { useEffect, useState } from "react";

//Components
import RequestCard from "./RequestCard";

//CSS
import "./OpenRequests.css";

const OpenRequests = ({ openRequests, date, requestSearch}) => {
  const search = requestSearch.toLowerCase()

  const dateConverter = (specifiedDate = '') => {

    const fullYear = specifiedDate?.getFullYear();
    const month = specifiedDate?.getMonth() + 1;
    const paddedMonth = month.toString().padStart(2,'0');
    const currentDate = specifiedDate?.getDate()
    const paddedDate = currentDate.toString().padStart(2,'0')

    const formattedDate = `${fullYear}-${paddedMonth}-${paddedDate}`
    
    return formattedDate
  };
 

  let currentDate = dateConverter(new Date());
  let selectedCalendarDate = dateConverter(date) 

  let requestFilter = openRequests.filter((request)=> selectedCalendarDate === currentDate && request.title.toLowerCase().includes(search) ? request.req_date >= currentDate : selectedCalendarDate === request.req_date).map((request, index)=> index < 4 && <RequestCard key={request.id} request={request} />)
 
 
  // const specifiedrequests = openRequests.map((openRequest, index) => {
  //   if (openRequest.req_date === value && index <= 4) {
  //     return <RequestCard key={openRequest.id} request={openRequest} />;
  //   }
  // });

  // const requests = openRequests.map((openRequest, index) => {
  //   if (openRequest.req_date >= value && index <= 4) {
  //     return <RequestCard key={openRequest.id} request={openRequest} />;
  //   }
  // });

  return (
    <>
    <h3 className="head">Open Requests</h3>
    <div className="open-requests">
      
      {/* <div className="open-list"> */}
      {requestFilter.length > 0 ? requestFilter : <div>No Accepted Request</div>}
      {/* </div> */}
    </div>
    </>
  );
};
export default OpenRequests;



