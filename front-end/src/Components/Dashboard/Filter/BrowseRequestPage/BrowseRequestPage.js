//Dependencies
import React, { useState, useEffect } from "react";
import axios from "axios";

//Component Import
import RequestCard from "../RequestCard/RequestCard";

//CSS Imports
import "./BrowseRequestPage.css";

const API = process.env.REACT_APP_BACKEND_API_KEY;

const BrowseRequestPage = ({
  date,
  applicationUser,
  openRequests,
  requestSearch,
  setLocation,
  iteration,
  setIteration,
  setDashboardFilter,
  dashboardFilter
}) => {
  const dateConverter = (specifiedDate) => {
    const fullYear = specifiedDate?.getFullYear();
    const month = specifiedDate?.getMonth() + 1;
    const paddedMonth = month.toString().padStart(2, "0");
    const currentDate = specifiedDate?.getDate();
    const paddedDate = currentDate.toString().padStart(2, "0");

    const formattedDate = `${fullYear}-${paddedMonth}-${paddedDate}`;

    return formattedDate;
  };
  const browseIds = []
  useEffect(() => {
      if (applicationUser.user_type === "Volunteer") {
        setIteration({ ...iteration, 'browseRequests': browseIds});
      }
    }, [requestSearch, dashboardFilter]);
  useEffect(()=>{
    
  },[])
  
  
  openRequests?.sort((a, b) => b.req_date - a.req_date);

  const currentDate = dateConverter(new Date());
  const selectedCalendarDate = dateConverter(date);
  const search = requestSearch.toLowerCase() || "";

  
  

  //filter by date
  let requestsByDate =
    selectedCalendarDate !== currentDate
      ? openRequests.filter((request) => selectedCalendarDate === request.req_date)
      : openRequests;

  // filter by search
  let requestsBySearch = search
    ? requestsByDate.filter((request) =>
        request.title.toLowerCase().includes(search)
      )
    : requestsByDate;

  const openRequestFilter = requestsBySearch.map((request) => {
    if (!request.assigned) {
        browseIds.push(request.id)
      return (
        <RequestCard
          key={request.id}
          request={request}
          applicationUser={applicationUser}
          setDashboardFilter={setDashboardFilter}
        />
      );
    }
  })


  return (
    <div className="openRequestPage__main-page">
      {openRequestFilter.length !== 0 && requestSearch !== 0 && (
        <h3 className="openRequestPage__title top">Open Request</h3>
      )}
      {openRequestFilter.length !== 0 && (
        <div className="openRequestPage__filter" onClick={()=>setLocation('browseRequests')}>{openRequestFilter}</div>
      )}
    </div>
  );
};

export default BrowseRequestPage;
