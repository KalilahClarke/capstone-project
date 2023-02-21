//Dependencies
import React, { useState, useEffect } from "react";

//Components
import RequestCard from "../RequestCard/RequestCard.js";

//CSS
import "./MyRequests.css";

const MyRequests = ({
  requests,
  date,
  requestSearch,
  setLocation,
  setPagination, 
  pagination,
  location,
  applicationUser
}) => {
  
  useEffect(() => {
      setPagination({
        ...pagination, myRequests: requestIds
      });
  }, []);
  
  //why do this not render into the pagination object
  
  const dateConverter = (specifiedDate = "") => {
    const fullYear = specifiedDate?.getFullYear();
    const month = specifiedDate?.getMonth() + 1;
    const paddedMonth = month.toString().padStart(2, "0");
    const currentDate = specifiedDate?.getDate();
    const paddedDate = currentDate.toString().padStart(2, "0");
    
    const formattedDate = `${fullYear}-${paddedMonth}-${paddedDate}`;
    
    return formattedDate;
  };
  
  requests.sort((a, b) => b.req_date - a.req_date);
  
  let requestIds = [];
  const currentDate = dateConverter(new Date()); 
  const selectedCalendarDate = dateConverter(date);
  const search = requestSearch.toLowerCase() || '';

  
  const requestFilter = requests.filter((request)=> selectedCalendarDate === currentDate && request.title.toLowerCase().includes(search) ? request.req_date >= currentDate && request.title.toLowerCase().includes(search)  : selectedCalendarDate === request.req_date && request.title.toLowerCase().includes(search)).map((request, index)=> {
    if(index < 4){
      requestIds.push(request.id)
    return <RequestCard key={request.id} request={request} applicationUser={applicationUser}/>
  } 
})


  return (
    <>
      <div className="myRequest__title top">
        <h3>My Requests</h3>
      </div>
      <div
        className={requestFilter.length > 0 ? "myRequest__filter" : "noFilter"}
        onClick={() => setLocation("myRequests")}
      >
        {requestFilter.length > 0 ? 
          requestFilter
         : 
          <div>No Accepted Request</div>
        }
      </div>
    </>
  );
};

export default MyRequests;
