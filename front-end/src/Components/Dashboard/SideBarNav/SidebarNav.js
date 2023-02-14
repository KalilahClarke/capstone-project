//Dependencies
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";
//Component Import
import CalendarView from "../CalendarView/CalendarView";

//CSS Import
import "./SidebarNav.css";

const SidebarNav = ({ date, setDate, applicationUser, setRequestSearch, requestSearch }) => {
  
  const location = useLocation()
   const path = location.pathname
  
  
  return (
  
    <div className="SideBar">
      <div className="text">
      <div className = 'SideBar__searchbar'>
        <form onSubmit={(e)=>{e.preventDefault()}}>
          <label >
          <b className='bold'>Search </b>
          <input type='text' onChange={(e)=> setRequestSearch(e.target.value)} value={requestSearch} placeholder = {path === '/user-dashboard' || path.includes('request') ? 'Requests': 'Reviews'}/>
          </label>

        </form>
      </div>
      <div className="under-click"></div>
        <Link to="/user-dashboard">

          <p className={path === '/user-dashboard' ? 'bold_link': ''}>User Dashboard</p>

          <div className="under-click"></div>
        </Link>
       
        {applicationUser.user_type === "Volunteer" ? (
          <Link to="/accepted-requests">

            <p className={path === '/accepted-requests' ? 'bold_link':''}>Accepted Requests</p>

            <div className="under-click"></div>
          </Link>
        ) : (
          <Link to="/requests/new">

            <p className={path === '/requests/new' ? 'bold_link':''}>Submit a New Request</p>

            <div className="under-click"></div>
          </Link>
        )}
        {applicationUser.user_type === "Volunteer" ? (
          <Link to="/browse-requests">

            <p className={path === '/browse-requests' ? 'bold_link':''}>Browse Requests</p>

            <div className="under-click"></div>
          </Link>
        ) : (
          <>

          <p className={path === '/favorites' ? 'bold_link':''}>Favorites</p>

          <div className="under-click"></div>
          </>
        )}

        {applicationUser.user_type === "Volunteer" ? (
          <Link to="/achievements">

          <p className={path === '/achievements' ? 'bold_link':''}>

            Achievements
            <br />
            <span className="coming-soon">*coming soon</span>
          </p>
          <div className="under-click"></div>
        </Link>
        ) : (
          <Link to={applicationUser.user_type === 'Volunteer' ? "/accepted-requests" : "/submitted-requests"}>

          <p className={(path === '/submitted-requests' || path ==='/accepted-requests') ? 'bold_link':''}>Submitted Requests</p>

          <div className="under-click"></div>
        </Link>
        )}

        <Link to="/reviews">

          <p className={path === '/reviews' ? 'bold_link':''}>

           Reviews
          </p>
          <div className="under-click"></div>
        </Link>
      </div>
      <div className="calender-view">
        <CalendarView setDate={setDate} date={date}/>
      </div>
    </div>
  )
};

export default SidebarNav;