import React, { useState } from "react";
import SidebarNav from './SideBarNav/SidebarNav';
import DashboardFilter from "./DashboardFilter";

import './Dashboard.css';

const Dashboard = ({applicationUser, dashboardFilter, setDashboardFilter, setLocation, location, setIteration, iteration}) => {
  const [date, setDate] = useState(new Date());
  const [requestSearch, setRequestSearch] = useState("");
  //Specific to person
  const [users, setUsers] = useState([]);
 
 
  

  return (
    <div className="dashboard">
      <SidebarNav
        setDate={setDate}
        date={date}
        applicationUser={applicationUser}
        requestSearch={requestSearch}
        setRequestSearch={setRequestSearch}
        setDashboardFilter={setDashboardFilter}
        dashboardFilter = {dashboardFilter}
      />
      <DashboardFilter 
      applicationUser={applicationUser}
      date={date}
      requestSearch = {requestSearch}
      setRequestSearch={setRequestSearch}
      dashboardFilter={dashboardFilter}
      setDashboardFilter ={setDashboardFilter}
      setLocation={setLocation}
      location={location}
      setIteration={setIteration}
      iteration={iteration}
      
      />
    </div>
  );
};

export default Dashboard;
