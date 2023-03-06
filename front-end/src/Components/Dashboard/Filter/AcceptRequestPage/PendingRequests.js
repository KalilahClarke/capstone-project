import React from "react";
import RequestCard from "../RequestCard/RequestCard";
import "./AcceptRequestPage.css";

function PendingRequests({ applicationUser, requests, requestSearch }) {
  console.log(requests)
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
  let search = requestSearch.toLowerCase() || '';

  let requestsByDate = requests?.filter(
    (request) => currentDate <= request.req_date
  );
  
  // filter by search
  let requestsBySearch = requestsByDate?.filter((request) =>
    request.title.toLowerCase().includes(search)
  );

  const pendingRequestFilter = requestsBySearch.map((request, index) => {
    if (!request.assigned) {
      return (
        <RequestCard
          key={request.id}
          request={request}
          applicationUser={applicationUser}
        />
      );
    }
  });

  return (
    <>
     
      {applicationUser.user_type !== "Volunteer" && (
          <div className="acceptedRequestPage__filter">
            {pendingRequestFilter}
          </div>
        )}
    </>
  );
}

export default PendingRequests;
