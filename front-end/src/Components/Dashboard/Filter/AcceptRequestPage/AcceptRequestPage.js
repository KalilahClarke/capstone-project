//Dependencies
import React, { useEffect } from "react";
import DashboardFilter from "../../DashboardFilter";
//{ useState, useEffect }
//Import Components

import RequestCard from "../RequestCard/RequestCard";

//Import CSS
import "./AcceptRequestPage.css";

const AcceptRequestPage = ({
  date,
  applicationUser,
  requests,
  iteration,
  setIteration,
  requestSearch,
  dashboardFilter,
  setLocation
}) => {
  
  useEffect(() => {
      setIteration({
        ...iteration,
        'pendingRequests': pendingIds,
        'acceptedRequests': acceptedIds,
        'completedRequests': completedIds,
      });
    
   
  }, [requestSearch, dashboardFilter === 'acceptedRequest']);
  
  const dateConverter = (specifiedDate) => {
    const fullYear = specifiedDate?.getFullYear();
    const month = specifiedDate?.getMonth() + 1;
    const paddedMonth = month.toString().padStart(2, "0");
    const currentDate = specifiedDate?.getDate();
    const paddedDate = currentDate.toString().padStart(2, "0");

    const formattedDate = `${fullYear}-${paddedMonth}-${paddedDate}`;

    return formattedDate;
  };

  let currentDate = dateConverter(new Date());
  let selectedCalendarDate = dateConverter(date);
  let search = requestSearch.toLowerCase();

  requests?.sort((a,b)=> a.req_date - b.req_date)

  let acceptedIds = []
  const acceptedRequestFilter = requests?.filter((request) =>
      selectedCalendarDate === currentDate &&
      request.title.toLowerCase().includes(search) &&
      !request.complete
        ? request.req_date >= currentDate
        : selectedCalendarDate === request.req_date
    )
    .map((request) => {
      if (request.assigned) {
        acceptedIds.push(request.id)
        return <RequestCard key={request.id} request={request} applicationUser={applicationUser}/>;
      }
    });
  
  let completedIds = []
  const completedRequestFilter = requests
    .filter((request) =>
      selectedCalendarDate === currentDate &&
      request.title.toLowerCase().includes(search)
        ? request.req_date <= currentDate
        : selectedCalendarDate === request.req_date
    )
    .map((request) => {
      if (request.complete) {
        completedIds.push(request.id)
        return <RequestCard key={request.id} request={request} applicationUser={applicationUser}/>;
      }
    });

  let pendingIds = []
  const pendingRequestFilter = requests
    .filter((request) =>
      selectedCalendarDate === currentDate &&
      request.title.toLowerCase().includes(search)
        ? request.req_date >= currentDate
        : selectedCalendarDate === request.req_date
    )
    .map((request) => {
      if (!request.assigned) {
        pendingIds.push(request.id)
        return <RequestCard key={request.id} request={request} applicationUser={applicationUser}/>;
      }
    });

    

  return (
    <>
      <div className="acceptRequestPage__main-page">
        {acceptedRequestFilter.length !== 0 && (
          <h3 className="acceptRequestPage__title top">Accepted Requests</h3>
        )}
        {acceptedRequestFilter.length !== 0 && (
          <div
            className="acceptedRequestPage__filter"
            onClick={()=> setLocation('acceptedRequests')}
          >
            {acceptedRequestFilter}
          </div>
        )}
        {applicationUser.user_type !== "Volunteer" &&
          pendingRequestFilter.length !== 0 && (
            <h3 className="acceptRequestPage__title">Pending Requests</h3>
          )}
        {applicationUser.user_type !== "Volunteer" &&
          pendingRequestFilter.length !== 0 && (
            <div
              className="acceptedRequestPage__filter"
              onClick={()=>setLocation('pendingRequests')}
            >
              {pendingRequestFilter}
            </div>
          )}
        {completedRequestFilter.length !== 0 && (
          <h3 className="acceptRequestPage__title">Completed Requests</h3>
        )}
        {completedRequestFilter.length !== 0 && (
          <div
            className="acceptedRequestPage__filter"
            onClick={()=>setLocation('completedRequests')}
          >
            {completedRequestFilter}
          </div>
        )}
      </div>
   </>
  );
};

export default AcceptRequestPage;
