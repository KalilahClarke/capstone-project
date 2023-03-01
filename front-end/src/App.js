//DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { UserProvider } from "./Providers/UserProviders";

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
  const [iteration, setIteration] = useState({})
  const [location, setLocation] = useState('')
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

  console.log(iteration)


  return (
    <div className="App">
      <UserProvider>
        <Router>
          <NavBar
            setModalOpen={setModalOpen}
            applicationUser={applicationUser}
            setDashboardFilter={setDashboardFilter}
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

            {/* <Route
              path="/achievements"
              element={
                <Protected>
                  <Achievements
                    setDate={setDate}
                    date={date}
                    applicationUser={applicationUser}
                    requestSearch={requestSearch}
                    setRequestSearch={setRequestSearch}
                  />
                </Protected>
              }
            />
            <Route
              path="/browse-requests"
              element={
                <Protected>
                  <BrowseRequestPage
                    date={date}
                    setDate={setDate}
                    setLocation={setLocation}
                    setPagination={setPagination}
                    pagination={pagination}
                    openRequests={openRequests}
                    applicationUser={applicationUser}
                    setRequestSearch={setRequestSearch}
                    requestSearch={requestSearch}
                  />
                </Protected>
              }
            />
            <Route
              path="/user-dashboard"
              element={
                <Protected>
                  <UserDashboard
                    users={users}
                    date={date}
                    setDate={setDate}
                    location = {location}
                    setLocation={setLocation}
                    setPagination={setPagination}
                    pagination={pagination}
                    applicationUser={applicationUser}
                    requests={requests}
                    setRequests={setRequests}
                    openRequests={openRequests}
                    setOpenRequests={setOpenRequests}
                    setRequestSearch={setRequestSearch}
                    requestSearch={requestSearch}
                  />
                </Protected>
              }
            />
            <Route
              path="/reviews"
              element={
                <Protected>
                  <ReviewsPage
                    date={date}
                    setDate={setDate}
                    applicationUser={applicationUser}
                    setRequestSearch={setRequestSearch}
                    requestSearch={requestSearch}
                  />
                </Protected>
              }
            />

            <Route
              path="/requests/new"
              element={
                <Protected>
                  <NewRequestForm
                    applicationUser={applicationUser}
                    setDate={setDate}
                    date={date}
                    setLocation={setLocation}
                    setRequestSearch={setRequestSearch}
                    requestSearch={requestSearch}
                  />
                </Protected>
              }
            />
            <Route
              path="/user/settings"
              element={
                <Protected>
                  <Settings
                    applicationUser={applicationUser}
                    setDate={setDate}
                    date={date}
                    setRequestSearch={setRequestSearch}
                    requestSearch={requestSearch}
                  />
                </Protected>
              }
            />
            <Route
              path="accepted-requests"
              element={
                <Protected>
                  <AcceptRequestPage
                    date={date}
                    setDate={setDate}
                    setLocation={setLocation}
                    setPagination={setPagination}
                    pagination={pagination}
                    applicationUser={applicationUser}
                    requests={requests}
                    setRequests={setRequests}
                    setRequestSearch={setRequestSearch}
                    requestSearch={requestSearch}
                  />
                </Protected>
              }
            />
            <Route
              path="submitted-requests"
              element={
                <Protected>
                  <AcceptRequestPage
                    date={date}
                    setDate={setDate}
                    setLocation={setLocation}
                    applicationUser={applicationUser}
                    requests={requests}
                    setRequests={setRequests}
                    setRequestSearch={setRequestSearch}
                    requestSearch={requestSearch}
                  />
                </Protected>
              }
            /> */}
          </Routes>
          <Footer applicationUser={applicationUser} />
        </Router>
      </UserProvider>
    </div>
  );
};

export default App;
