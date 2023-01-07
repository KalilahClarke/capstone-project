//Dependencies
import React, { useState, useEffect } from "react";

//Components
import RequestCard from "./RequestCard";

//CSS
import "./MyRequests.css";

const MyRequests = ({ requests, date, stringCurrentDate }) => {
  const [value, setValue] = useState("");
  const [currentDate, setCurrentDate] = useState("");

  // useEffect(() => {
  //   if (date) {
  //     setCurrentDate(
  //       stringCurrentDate.getFullYear() +
  //         "-" +
  //         ((stringCurrentDate.getMonth() + 1).toString().length === 1
  //           ? "0" + (setCurrentDate.getMonth() + 1)
  //           : stringCurrentDate.getMonth() + 1) +
  //         "-" +
  //         (stringCurrentDate.getDate().toString().length === 1
  //           ? "0" + (stringCurrentDate.getDate())
  //           : stringCurrentDate.getDate())
  //     );
  //     setValue(
  //       date.getFullYear() +
  //         "-" +
  //         ((date.getMonth() + 1).toString().length === 1
  //           ? "0" + (date.getMonth() + 1)
  //           : date.getMonth() + 1) +
  //         "-" +
  //         (date.getDate().toString().length === 1
  //           ? "0" + date.getDate()
  //           : date.getDate())
  //     );
  //   }
  // }, [date]);
  

  const myspecifiedrequests = requests.length > 0 ? requests.map((request) => {
    if (request.req_date === value) {
      return <RequestCard key={request.id} request={request} />;
    }
  }) : <p className="no-requests">No accepted requests.</p>;


  const myrequests = requests.length > 0 ? requests.map((request) => {
    if (request.req_date >= value) {
      return <RequestCard key={request.id} request={request} />;
    }
  }) : <p className="no-requests">No accepted requests.</p>;

  return (
    <>
    <h3 className="head">My Requests</h3>
    {/* <div className="my-requests">
          {currentDate === value ? myrequests : myspecifiedrequests}
    </div> */}
    </>
  );
};

export default MyRequests;
