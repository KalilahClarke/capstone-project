//Dependencies
import React, { useState, useEffect } from "react";

//Components
import RequestCard from "../RequestCard/RequestCard.js";

//CSS
import '../BrowseRequestPage/BrowseRequestPage.css'

const MyRequests = ({
  requests,
  date,
  requestSearch,
  applicationUser,
  setLocation,
  setIteration,
  iteration,
}) => {


  const dateConverter = (specifiedDate = "") => {
    const fullYear = specifiedDate?.getFullYear();
    const month = specifiedDate?.getMonth() + 1;
    const paddedMonth = month.toString().padStart(2, "0");
    const currentDate = specifiedDate?.getDate();
    const paddedDate = currentDate.toString().padStart(2, "0");

    const formattedDate = `${fullYear}-${paddedMonth}-${paddedDate}`;

    return formattedDate;
  };

  //sort requests by date
  requests?.sort((a, b) => b.req_date - a.req_date);


  const currentDate = dateConverter(new Date());
  const selectedCalendarDate = dateConverter(date);
  const search = requestSearch.toLowerCase() || '';

  //filter by date
  let requestsByDate =
    selectedCalendarDate !== currentDate
      ? requests?.filter((request) => selectedCalendarDate === request.req_date)
      : requests?.filter((request) => selectedCalendarDate <= request?.req_date && !request?.complete);

  // filter by search
  let requestsBySearch = search
    ? requestsByDate?.filter((request) =>
        request.title.toLowerCase().includes(search)
      )
    : requestsByDate;
  let myRequest = []
  const requestCards = requestsBySearch?.map((request, index) => {
    if (index < 4) {
      myRequest.push(request.id)
      return (
        <RequestCard
          key={request.id}
          request={request}
          applicationUser={applicationUser}
        />
      );
    }
  });


    useEffect(() => {
      setIteration({ ...iteration['myRequest'], myRequest })
  
    },[])
  
    
  return (
    <>
      <div className="openRequestPage__main-page">
        <h3 className='openRequestPage__title top'>My Requests</h3>
      </div>
      <div
        className="openRequestPage__filter "
        onClick={()=> setLocation('myRequests')}
      >
        {requestCards?.length > 0 ? (
          requestCards
        ) : (
          <div>No Accepted Request</div>
        )}
      </div>
    </>
  );
};

export default MyRequests;
