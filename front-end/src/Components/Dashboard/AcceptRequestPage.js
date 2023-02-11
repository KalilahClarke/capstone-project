//Dependencies
import React, { useState, useEffect } from "react";

//Import Components
import SidebarNav from "./SidebarNav";
import RequestCard from "./RequestCard";

//Import CSS
import "./AcceptRequestPage.css";

const AcceptRequestPage = ({
  date,
  setDate,
  applicationUser,
  requests,
  setRequestSearch,
  requestSearch
 
}) => {
  
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
  let selectedCalendarDate = dateConverter(date) 
  let search = requestSearch.toLowerCase()
     
  
  let acceptedRequestFilter = requests.filter((request)=> selectedCalendarDate === currentDate && request.title.toLowerCase().includes(search) && !request.complete ? request.req_date >= currentDate : selectedCalendarDate === request.req_date ).map((request)=> request.assigned  && <RequestCard key={request.id} request={request} />)


  let completedRequestFilter = requests.filter((request)=> selectedCalendarDate === currentDate && request.title.toLowerCase().includes(search) ? request.req_date <= currentDate : selectedCalendarDate === request.req_date ).map((request)=> request.complete  && <RequestCard key={request.id} request={request} />)

  let pendingRequestFilter = requests.filter((request)=> selectedCalendarDate === currentDate && request.title.toLowerCase().includes(search) ? request.req_date >= currentDate : selectedCalendarDate === request.req_date ).map((request)=> !request.assigned  && <RequestCard key={request.id} request={request} />)

  
  return (
    <div className="user-dashboard">
      
      <div className='sidebar-nav'>
      <SidebarNav setDate={setDate} date={date} applicationUser={applicationUser} setRequestSearch = {setRequestSearch} requestSearch = {requestSearch} />
      </div>
      
      <div className="acceptRequestPage__main-page">
        <h3 className="acceptRequestPage__title top">Accepted Requests</h3>
        <div className="acceptedRequestPage__filter">
          {acceptedRequestFilter}
        </div>
        {applicationUser.user_type === "Senior" && <h3 className="acceptRequestPage__title">Pending Requests</h3>}
        <div className="acceptedRequestPage__filter">
        {pendingRequestFilter}
        </div>
        <h3 className="acceptRequestPage__title">Completed Requests</h3>
        <div className="acceptedRequestPage__filter">
          {completedRequestFilter}
        </div>
      </div>
    </div>
  );
};

export default AcceptRequestPage;

