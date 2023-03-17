//DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState, useContext } from "react";
import { UserProvider, UserContext } from "./Providers/UserProviders";

import axios from "axios";
import { useEffect } from "react";

//COMPONENTS
import SignUpPage from "./Components/HomePage/SignUpPage/SignUpPage";
import Home from "./Components/HomePage/Home/Home";
import NavBar from "./Components/NavBar/NavBar";
import LoginModal from "./Components/LoginModal";
import SeniorsPage from "./Components/HomePage/Pages/SeniorsPage";
import VolunteerPage from "./Components/HomePage/Pages/VolunteerPage";
import OurTeam from "./Components/HomePage/Pages/OurTeam";
import Protected from "./Components/Protected";
import Unprotected from "./Components/Unprotected";
import Footer from "./Components/HomePage/Footer/Footer";
import PersonalPage from "./Components/HomePage/Pages/PersonalPage";
import Dashboard from "./Components/Dashboard/Dashboard";
import RequestPage from "./Components/Dashboard/Pages/RequestDetails/RequestPage";
import EditRequest from "./Components/Dashboard/Pages/EditRequest/EditRequest";
//CSS
import "./App.css";

//API
const API = process.env.REACT_APP_BACKEND_API_KEY;

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [dashboardFilter, setDashboardFilter] = useState("main");
  const [iteration, setIteration] = useState({});
  const [location, setLocation] = useState("");
  const [render, setRender] = useState(true)
  const [applicationUser, setApplicationUser] = useState({
    uuid: "",
    firstname: "",
    lastname: "",
    dob: "",
    address: "",
    unit: "",
    city: "",
    state: "",
    zipcode: "",
    phonenumber: "",
    email: "",
    verified: false,
    user_type: "",
    profilephoto: "",
    languages: "",
    verification_type: "",
  });

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

  let myRequestIds = [];
  let openRequestIds = []

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

  useEffect(() => {

    axios(config).then((res) => {
      let requestSort = res.data?.sort((a, b) => a.req_date - b.req_date);
      let requestFilter = requestSort?.filter((request)=> currentDate <= request.req_date)

      for (let i = 0; i < 4; i++) {
        myRequestIds?.push(requestFilter[i]?.id);
      }
    });
   
    axios(config).then((res) => {
      if (applicationUser.user_type === "Volunteer") {
        axios.get(`${API}/requests/open_requests`).then((res) => {
          let openRequestSort = res.data?.sort((a,b) => a.req_date - b.req_date)
          let openRequestFilter = openRequestSort?.filter((request)=> currentDate <= request.req_date )
          for(let i = 0; i < 4; i++){
            openRequestIds?.push(openRequestFilter[i]?.id)
          }
          setIteration({
            ...iteration,
            openRequests: openRequestIds,
            myRequests: myRequestIds,
          });
        });
      }else{
        setIteration({
          ...iteration,
          myRequests: myRequestIds,
        });
      }
    });

  }, [applicationUser, render]);

  

  return (
    <div className="App">
      <UserProvider>
        <Router>
          <NavBar
            setModalOpen={setModalOpen}
            applicationUser={applicationUser}
            setDashboardFilter={setDashboardFilter}
            render = {render}
            setRender = {setRender}
          />
          <LoginModal
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
            setApplicationUser={setApplicationUser}
          />

          <Routes>
            <Route
              path="/"
              element={
                <Unprotected
                  applicationUser={applicationUser}
                  setApplicationUser={setApplicationUser}
                >
                  <Home />
                </Unprotected>
              }
            />
            <Route
              path="/sign-up"
              element={
                <Unprotected
                  applicationUser={applicationUser}
                  setApplicationUser={setApplicationUser}
                >
                  <SignUpPage setApplicationUser={setApplicationUser} />
                </Unprotected>
              }
            />
            <Route
              path="/volunteers"
              element={
                <Unprotected
                  applicationUser={applicationUser}
                  setApplicationUser={setApplicationUser}
                >
                  <VolunteerPage />
                </Unprotected>
              }
            />
            <Route
              path="/seniors"
              element={
                <Unprotected
                  applicationUser={applicationUser}
                  setApplicationUser={setApplicationUser}
                >
                  <SeniorsPage />
                </Unprotected>
              }
            />
            <Route
              path="/our-team"
              element={
                <Unprotected
                  applicationUser={applicationUser}
                  setApplicationUser={setApplicationUser}
                >
                  <OurTeam />
                </Unprotected>
              }
            />
            <Route
              path="/our-page/:staffMember"
              element={
                <Unprotected
                  applicationUser={applicationUser}
                  setApplicationUser={setApplicationUser}
                >
                  <PersonalPage />
                </Unprotected>
              }
            />

            <Route
              path="/dashboard"
              element={
                <Protected>
                  <Dashboard
                    applicationUser={applicationUser}
                    dashboardFilter={dashboardFilter}
                    setDashboardFilter={setDashboardFilter}
                    location={location}
                    setLocation={setLocation}
                    setIteration={setIteration}
                    iteration={iteration}
                  />
                </Protected>
              }
            />
            <Route
              path="/requests/:id"
              element={
                <Protected>
                  <RequestPage
                    applicationUser={applicationUser}
                    dashboardFilter={dashboardFilter}
                    setDashboardFilter={setDashboardFilter}
                    location={location}
                    iteration={iteration}
                    render={render}
                    setRender={setRender}
                  />
                </Protected>
              }
            />

            <Route
              path="/edit/:id"
              element={
                <Protected>
                  <EditRequest
                    applicationUser={applicationUser}
                    setDashboardFilter={setDashboardFilter}
                    iteration={iteration}
                    location={location}
                  />
                </Protected>
              }
            />
          </Routes>
          <Footer applicationUser={applicationUser} render={render} setRender={setRender} setDashboardFilter={setDashboardFilter} />
        </Router>
      </UserProvider>
    </div>
  );
};

export default App;
