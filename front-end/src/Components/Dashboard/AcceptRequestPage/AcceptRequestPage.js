//Dependencies
import React, { useEffect } from "react";
//{ useState, useEffect }
//Import Components
import SidebarNav from "../SideBarNav/SidebarNav";
import RequestCard from "../RequestCard/RequestCard";

//Import CSS
import "./AcceptRequestPage.css";

const AcceptRequestPage = ({
  date,
  setDate,
  setLocation,
  setPagination,
  pagination,
  applicationUser,
  requests,
  setRequestSearch,
  requestSearch,
}) => {
  
  useEffect(() => {
    
    if (applicationUser.user_type !== "Volunteer") {
      setPagination({
        ...pagination,
        pendingRequests: pendingIds,
        acceptedRequests: acceptedIds,
        completedRequests: completedIds,
      });
    }
    setPagination({
      ...pagination,
      acceptedRequests: acceptedIds,
      completedRequests: completedIds,
    });
  }, [requestSearch]);
  
  let acceptedIds = [];
  let pendingIds = [];
  let completedIds = [];

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
        acceptedIds?.push(request.id);
        return <RequestCard key={request.id} request={request} applicationUser={applicationUser}/>;
      }
    });
  console.log(acceptedIds);

  const completedRequestFilter = requests
    .filter((request) =>
      selectedCalendarDate === currentDate &&
      request.title.toLowerCase().includes(search)
        ? request.req_date <= currentDate
        : selectedCalendarDate === request.req_date
    )
    .map((request) => {
      if (request.complete) {
        completedIds.push(request.id);
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
        pendingIds.push(request.id);
        return <RequestCard key={request.id} request={request} applicationUser={applicationUser}/>;
      }
    });


  return (
    <div className="user-dashboard">
      <div className="sidebar-nav">
        <SidebarNav
          setDate={setDate}
          date={date}
          applicationUser={applicationUser}
          setRequestSearch={setRequestSearch}
          requestSearch={requestSearch}
        />
      </div>

      <div className="acceptRequestPage__main-page">
        {acceptedRequestFilter.length !== 0 && (
          <h3 className="acceptRequestPage__title top">Accepted Requests</h3>
        )}
        {acceptedRequestFilter.length !== 0 && (
          <div
            className="acceptedRequestPage__filter"
            onClick={() => setLocation("acceptedRequests")}
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
              onClick={() => setLocation("pendingRequests")}
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
            onClick={() => setLocation("completedRequests")}
          >
            {completedRequestFilter}
          </div>
        )}
      </div>
    </div>
  );
};

export default AcceptRequestPage;
