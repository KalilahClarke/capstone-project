import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../../Providers/UserProviders";
import MyRequests from './Filter/MyRequests/MyRequests'
import BrowseRequestPage from './Filter/BrowseRequestPage/BrowseRequestPage'
import Achievements from './Filter/Achievements/Achievements'
import AcceptRequestPage from "./Filter/AcceptRequestPage/AcceptRequestPage"
import OpenRequests from './Filter/OpenRequests/OpenRequests'
import ReviewsPage from './Filter/ReviewsPage/ReviewsPage'
import MyFavorites from "./Filter/MyFavorites/MyFavorites";
import NewRequestForm from './Filter/NewRequestForm/NewRequestForm'
import Settings from './Filter/Profile/Profile'
import EditRequest from './Pages/EditRequest/EditRequest'


// Function to query the database with the users uid, and return their posted / assigned requests
const API = process.env.REACT_APP_BACKEND_API_KEY;

const DashboardFilter = ({applicationUser, dashboardFilter, setDashboardFilter, requestSearch, setLocation, location, date, setIteration, iteration}) => {
  const [requests, setRequests] = useState([]);
  const [openRequests, setOpenRequests] = useState([]);
  const user = useContext(UserContext);
  
  let route;
  
  if (applicationUser.user_type === "Volunteer") {
    route = "my_assigned_requests";
  } else {
    route = "my_created_requests";
  }
  
  const data = JSON.stringify({ uuid: applicationUser.uuid });
  
  const config = {
    method: "post",
    url: `${API}/requests/${route}`,
    
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };
  
  useEffect(() => {
    axios(config).then((res) => setRequests(res.data));

    if (applicationUser.user_type === "Volunteer") {
      axios
      .get(`${API}/requests/open_requests`)
      .then((res) => setOpenRequests(res.data));
    }
  }, [user, applicationUser]);
  
    
  return (
    <div className='userdashboard'>
     {dashboardFilter === 'main'&& <MyRequests requests={requests} requestSearch={requestSearch} setLocation={setLocation} date={date} applicationUser={applicationUser} iteration={iteration} setIteration={setIteration}/>}
     {(dashboardFilter === 'main' && applicationUser.user_type === 'Volunteer') && <OpenRequests openRequests={openRequests} location={location} setLocation={location} date={date} applicationUser={applicationUser} requestSearch={requestSearch}/>}
     {(dashboardFilter === 'main' && applicationUser.user_type !== 'Volunteer') && <MyFavorites/>}
     {(dashboardFilter === 'browseRequest' && applicationUser.user_type === 'Volunteer') && <BrowseRequestPage openRequests={openRequests} location={location} setLocation={setLocation} date={date} requestSearch={requestSearch} applicationUser={applicationUser}/>}  
     {(dashboardFilter === 'achievements' && applicationUser.user_type === 'Volunteer' )&& <Achievements/>}  
     {dashboardFilter === 'acceptedRequest' && <AcceptRequestPage  requests={requests} requestSearch={requestSearch} location={location} setLocation={setLocation} date={date} applicationUser={applicationUser} setIteration={setIteration} iteration={iteration}/>}
     {dashboardFilter === 'reviews' && <ReviewsPage applicationUser={applicationUser}/>}
     {(dashboardFilter === 'newRequest' && applicationUser.user_type !== 'Volunteer') && <NewRequestForm applicationUser={applicationUser} setDashboardFilter={setDashboardFilter} />}
     {dashboardFilter === 'profile' && <Settings applicationUser={applicationUser} setDashboardFilter = {setDashboardFilter}/>}
    </div>
  );
};

export default DashboardFilter;
