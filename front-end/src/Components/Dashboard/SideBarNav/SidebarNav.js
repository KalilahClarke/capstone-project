//Dependencies
import { Link } from "react-router-dom";
import { useContext } from "react";
import { useLocation } from "react-router-dom";

import { UserContext } from "../../../Providers/UserProviders";
//Component Import
import CalendarView from './CalendarView/CalendarView'

//CSS Import
import "./SidebarNav.css";


const SidebarNav = ({
  date,
  setDate,
  applicationUser,
  setRequestSearch,
  requestSearch,
  setDashboardFilter,
  dashboardFilter
}) => {
  const user = useContext(UserContext);
  const location = useLocation();
  const path = location.pathname;
  

  return (
    <>
      {user && (
        <div className="SideBar">
          <div className="fixed">
            <div className="text">
              <div className="SideBar__searchbar">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <label>
                    <b className="bold">Search </b>
                    <input
                      type="text"
                      onChange={(e) => setRequestSearch(e.target.value)}
                      value={requestSearch}
                      placeholder="Search requests"
                    />
                  </label>
                </form>
              </div>
              <div className="under-click"></div>
              <p
                className={dashboardFilter === "main" ? "bold_link" : ""}
                onClick={() => setDashboardFilter("main")}
              >
                User Dashboard
              </p>
              <div className="under-click"></div>

              {applicationUser.user_type === "Volunteer" ? (
                <>
                  <p
                    className={dashboardFilter === "acceptedRequest" ? "bold_link" : ""}
                    onClick={() => setDashboardFilter("acceptedRequest")}
                  >
                    Accepted Requests
                  </p>
                  <div className="under-click"></div>
                </>
              ) : (
                <>
                  <p
                    className={dashboardFilter === "newRequest" ? "bold_link" : ""}
                    onClick={() => setDashboardFilter("newRequest")}
                  >
                    Submit a New Requests
                  </p>
                  <div className="under-click"></div>
                </>
              )}

              {applicationUser.user_type === "Volunteer" ? (
                <div>
                  <p
                    className={dashboardFilter === "browseRequest" ? "bold_link" : ""}
                    onClick={() => setDashboardFilter("browseRequest")}
                  >
                    Browse Requests
                  </p>

                  <div className="under-click"></div>
                </div>
              ) : (
                <>
                  <p
                    className={dashboardFilter === "favorite" ? "bold_link" : ""}
                    onClick={() => setDashboardFilter("favorite")}
                  >
                    Favorites
                  </p>

                  <div className="under-click"></div>
                </>
              )}

              {applicationUser.user_type === "Volunteer" ? (
                <>
                  <p
                    className={dashboardFilter === "achievements" ? "bold_link" : ""}
                    onClick={() => setDashboardFilter("achievements")}
                  >
                    Achievements
                    <br />
                    <span className="coming-soon">*coming soon</span>
                  </p>
                  <div className="under-click"></div>
                </>
              ) : (
                <>
                  <p
                    className={
                      
                      dashboardFilter === "acceptedRequest"
                        ? "bold_link"
                        : ""
                    }
                    onClick={() => setDashboardFilter("acceptedRequest")}
                  >
                    Submitted Requests
                  </p>
                  <div className="under-click"></div>
                </>
              )}

              
              
                <p
                  className={dashboardFilter === "reviews" ? "bold_link" : ""}
                  onClick={() => setDashboardFilter("reviews")}
                >
                  Reviews
                </p>
                <div className="under-click"></div>
              
            </div>
            <div className="calender-view">
              <CalendarView setDate={setDate} date={date} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SidebarNav;
