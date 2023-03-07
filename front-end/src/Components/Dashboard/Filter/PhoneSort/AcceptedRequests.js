import React from 'react'
import { FaCommentsDollar } from 'react-icons/fa';
import RequestCard from '../RequestCard/RequestCard';
import '../BrowseRequestPage/BrowseRequestPage.css'

function AcceptedRequests({
  applicationUser,
  requests,
  requestSearch}
  
) {
  
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
    let search = requestSearch?.toLowerCase() || '';

    let requestsByDate = requests?.filter((request) => currentDate <= request.req_date)

  // filter by search
    let requestsBySearch = requestsByDate?.filter((request) => request.title.toLowerCase().includes(search))

    const acceptedRequestFilter = requestsBySearch?.map((request) => {
    if (request.assigned) {
      return (
        <RequestCard
          key={request.id}
          request={request}
          applicationUser={applicationUser}
        />
      );
    }
  })

  return (
    <>
        {acceptedRequestFilter.length !== 0 && (
          <div
            className="openRequestPage__filter"
          >
            {acceptedRequestFilter}
          </div>
        )} 
    </>
  )
}

export default AcceptedRequests
