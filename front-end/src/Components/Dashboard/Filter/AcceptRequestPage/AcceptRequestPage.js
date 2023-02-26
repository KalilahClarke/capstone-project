//Dependencies
import React, { useEffect } from "react";
//{ useState, useEffect }
//Import Components

import RequestCard from "../RequestCard/RequestCard";

//Import CSS
import "./AcceptRequestPage.css";

const AcceptRequestPage = ({
  date,
  setDate,
  applicationUser,
  requests,
  setRequestSearch,
  requestSearch,
}) => {
  
  // useEffect(() => {
    
  //   if (applicationUser.user_type !== "Volunteer") {
  //     setPagination({
  //       ...pagination,
  //       pendingRequests: pendingIds,
  //       acceptedRequests: acceptedIds,
  //       completedRequests: completedIds,
  //     });
  //   }
  //   setPagination({
  //     ...pagination,
  //     acceptedRequests: acceptedIds,
  //     completedRequests: completedIds,
  //   });
  // }, [requestSearch]);
  

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

  const acceptedRequestFilter = requests?.filter((request) =>
      selectedCalendarDate === currentDate &&
      request.title.toLowerCase().includes(search) &&
      !request.complete
        ? request.req_date >= currentDate
        : selectedCalendarDate === request.req_date
    )
    .map((request) => {
      if (request.assigned) {
        return <RequestCard key={request.id} request={request} applicationUser={applicationUser}/>;
      }
    });
  

  const completedRequestFilter = requests
    .filter((request) =>
      selectedCalendarDate === currentDate &&
      request.title.toLowerCase().includes(search)
        ? request.req_date <= currentDate
        : selectedCalendarDate === request.req_date
    )
    .map((request) => {
      if (request.complete) {
       
        return <RequestCard key={request.id} request={request} applicationUser={applicationUser}/>;
      }
    });

  const pendingRequestFilter = requests
    .filter((request) =>
      selectedCalendarDate === currentDate &&
      request.title.toLowerCase().includes(search)
        ? request.req_date >= currentDate
        : selectedCalendarDate === request.req_date
    )
    .map((request) => {
      if (!request.assigned) {
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
          >
            {completedRequestFilter}
          </div>
        )}
      </div>
   </>
  );
};

export default AcceptRequestPage;
