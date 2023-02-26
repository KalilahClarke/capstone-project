import React, { useState } from "react";
import SidebarNav from './SideBarNav/SidebarNav';
import DashboardFilter from "./DashboardFilter";

import './Dashboard.css';

const Dashboard = ({applicationUser, dashboardFilter, setDashboardFilter}) => {
  const [date, setDate] = useState(new Date());
  const [requestSearch, setRequestSearch] = useState("");
  //Specific to person
  const [users, setUsers] = useState([]);
  const [location, setLocation] = useState("");
  const [pagination, setPagination] = useState({});
 
  

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
      dashboardFilter={dashboardFilter}
      setLocation={setLocation}
      location={location}
      />
    </div>
  );
};

export default Dashboard;
