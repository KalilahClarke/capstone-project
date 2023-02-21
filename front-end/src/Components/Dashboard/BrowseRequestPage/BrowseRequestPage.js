//Dependencies
import React, { useState, useEffect } from "react";
import axios from "axios";

//Component Import
import SidebarNav from "../SideBarNav/SidebarNav";
import RequestCard from "../RequestCard/RequestCard";

//CSS Imports
import "./BrowseRequestPage.css";

const API = process.env.REACT_APP_BACKEND_API_KEY;

const BrowseRequestPage = ({
  date,
  setDate,
  setLocation,
  setPagination,
  pagination,
  applicationUser,
  openRequests,
  setRequestSearch,
  requestSearch,
 
}) => {
  
  useEffect(() => {
    
    setPagination({
      ...pagination,
      browseRequests: browseId,
    });
    
  }, [requestSearch]);

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


  let browseId = []
  const openRequestFilter = openRequests?.filter((request)=> selectedCalendarDate === currentDate && request.title.toLowerCase().includes(search) ? request.req_date >= currentDate : selectedCalendarDate === request.req_date ).map((request)=> {
    if(!request.assigned){
      browseId?.push(request.id)
      return <RequestCard key={request.id} request={request} applicationUser={applicationUser}/>
    }  
  })
  // console.log(browseId)
  // setPagination({...pagination, 'browseRequest': browseId})
  // console.log(pagination)
  return (
    <div className="user-dashboard">
      <div className='sidebar-nav'>
      <SidebarNav setDate={setDate} date = {date} applicationUser={applicationUser} setRequestSearch = {setRequestSearch}
                    requestSearch = {requestSearch}/>
      </div>
      <div className="openRequestPage__main-page" onClick = {()=> setLocation('browseRequests')}>

        {/* review logic */}
        {(openRequestFilter.length !== 0 && requestSearch !== 0)  && <h3 className='openRequestPage__title top'>Open Request</h3>}
        { openRequestFilter.length !== 0 && <div className= "openRequestPage__filter" >
          {openRequestFilter}
        </div>}
      </div>
    </div>
  );
};

export default BrowseRequestPage;

