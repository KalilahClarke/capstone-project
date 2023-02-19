//Dependencies
import React, { useState, useEffect } from "react";
import axios from "axios";

//Component Import
import SidebarNav from "../SideBarNav/SidebarNav";
import RequestCard from "../RequestCard/RequestCard";

//CSS Imports
import "./OpenRequestPage.css";

const API = process.env.REACT_APP_BACKEND_API_KEY;

const OpenRequestPage = ({
  date,
  setDate,
  applicationUser,
  openRequests,
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


  // Location Needs to be changed per UseState of UsersProfile location
  const neighborhood = openRequests.map((request) =>
    !request.assigned && request.req_date >= selectedCalendarDate && request.title.toLowerCase().includes(search) ? (
      <RequestCard key={request.id} request={request} />
    ) : null
  );

  const currentNeighborhood = openRequests.map((request) =>
    !request.assigned && request.req_date === selectedCalendarDate && request.title.toLowerCase().includes(search) ? (
      <RequestCard key={request.id} request={request} />
    ) : null
  );
      console.log(currentNeighborhood.length, neighborhood.length)
  return (
    <div className="user-dashboard">
      <div className='sidebar-nav'>
      <SidebarNav setDate={setDate} date = {date} applicationUser={applicationUser} setRequestSearch = {setRequestSearch}
                    requestSearch = {requestSearch}/>
      </div>
      <div className="openRequestPage__main-page">
        <h3 className='openRequestPage__title top'>Open Request</h3>
        {(neighborhood || currentNeighborhood) && <div className= "openRequestPage__filter" >
          {currentDate === selectedCalendarDate ? neighborhood : currentNeighborhood}
        </div>}
      </div>
    </div>
  );
};

export default OpenRequestPage;

