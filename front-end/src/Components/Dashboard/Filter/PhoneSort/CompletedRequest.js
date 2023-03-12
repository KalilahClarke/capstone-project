import React from "react";
import RequestCard from "../RequestCard/RequestCard";
import '../AcceptRequestPage/AcceptRequestPage.css';

function CompletedRequest({ applicationUser, requests, requestSearch }) {
  
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

  let search = requestSearch.toLowerCase() || "";


  //filter by date
  let requestsByDate = requests?.filter(
    (request) => currentDate >= request.req_date
  );

  // filter by search
  let requestsBySearch = requestsByDate?.filter((request) =>
    request.title.toLowerCase().includes(search)
  );

  const completedRequestFilter = requestsBySearch.map((request, index) => {
    if (request.complete) {
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
      {completedRequestFilter.length !== 0 && (
        <div className="openRequestPage__filter">{completedRequestFilter}</div>
      )}
    </>
  );
}

export default CompletedRequest;
