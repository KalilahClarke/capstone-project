//Dependencies
import React, { useState, useEffect } from "react";

//Components
import RequestCard from "../RequestCard/RequestCard";

//CSS
import "./MyRequests.css";

const MyRequests = ({ requests, date, requestSearch }) => {
  const [requestDetailIds, setRequestDetailIds] = useState([])
  
  const search = requestSearch.toLowerCase()
  requests.sort((a,b)=> b.req_date - a.req_date)
 

  const dateConverter = (specifiedDate = '') => {
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

  let requestFilter = requests.filter((request)=> selectedCalendarDate === currentDate ? request.req_date >= currentDate && request.title.toLowerCase().includes(search): selectedCalendarDate === request.req_date && request.title.toLowerCase().includes(search)).map((request, index)=>{
  if(index < 4){
    //setRequestDetailIds({...requestDetailIds, request})
    return <RequestCard key={request.id} request={request} />
  }
})
 

  return (
    <>
      <div className="myRequest__title top"><h3>My Requests</h3></div>
      <div className={requestFilter.length > 0 ? 'myRequest__filter' : 'noFilter'}>
        {requestFilter.length > 0 ? requestFilter : <div>No Accepted Request</div>}
      </div>
    </>
  );
};

export default MyRequests;

