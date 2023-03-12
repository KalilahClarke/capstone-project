//Dependencies
import React, { useState, useEffect } from "react";

//Components
import RequestCard from "../RequestCard/RequestCard.js";
import ZeroRequests from "../ZeroResults/ZeroRequests.js";

//CSS
import '../BrowseRequestPage/BrowseRequestPage.css'
import DashboardFilter from "../../DashboardFilter.js";

const MyRequests = ({
  requests,
  date,
  requestSearch,
  applicationUser,
  location,
  setLocation,
  setIteration,
  iteration,
  dashboardFilter
}) => {
  let myRequestIds = []
  // let myIds = []
  useEffect(() => {
    const timer = setTimeout(()=>{
      console.log('MyRequest')
      setIteration({...iteration, 'myRequests': myRequestIds})
    }, 2000)
    return ()=> clearTimeout(timer)
  },[requestSearch, location === 'myRequests' && dashboardFilter === 'main', myRequestIds !== iteration['myRequests']]);

  
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
  

  const requestCards = requestsBySearch.map((request, index) => {
    if (index < 4) {
      myRequestIds.push(request.id)
      // myIds?.push(request.id)
      return (
        <RequestCard
          key={request.id}
          request={request}
          applicationUser={applicationUser}
        />
      );
    }
  })
  // console.log(myIds)
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
          <ZeroRequests/>
        )}
      </div>
    </>
  );
};

export default MyRequests;
