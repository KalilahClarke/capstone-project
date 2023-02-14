//DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { UserProvider } from "./Providers/UserProviders";


//COMPONENTS
import SignUpPage from "./Components/Dashboard/SignUpPage/SignUpPage";
import Home from "./Components/HomePage/Home";
import NavBar from "./Components/NavBar/NavBar";
import LoginModal from "./Components/LoginModal";
import SeniorsPage from "./Components/HomePage/SeniorsPage";
import VolunteerPage from "./Components/HomePage/VolunteerPage";
import OurTeam from "./Components/HomePage/OurTeam";
import UserDashboard from "./Components/Dashboard/UserDashboard/UserDashboard";
import OpenRequestPage from "./Components/Dashboard/OpenRequestPage/OpenRequestPage";
import RequestDetails from "./Components/Dashboard/RequestDetails/RequestDetails";
import Settings from "./Components/Dashboard/Settings/Settings";
import NewRequestForm from "./Components/Dashboard/NewRequestForm/NewRequestForm";
import Protected from "./Components/Protected";
import AcceptRequestPage from "./Components/Dashboard/AcceptRequestPage/AcceptRequestPage";
import Achievements from "./Components/Dashboard/Achievements/Achievements";
import Unprotected from "./Components/Unprotected";
import EditRequest from "./Components/Dashboard/EditRequest/EditRequest";
import ReviewsPage from "./Components/Dashboard/ReviewsPage/ReviewsPage";
import Footer from "./Components/HomePage/Footer";
import PersonalPage from "./Components/HomePage/PersonalPage";
//CSS
import "./App.css";

//API
const API = process.env.REACT_APP_BACKEND_API_KEY;

const App = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [requestSearch, setRequestSearch] = useState('')
  //Specific to person
  const [requests, setRequests] = useState([]);
  const [openRequests, setOpenRequests] = useState([]);
  const [users, setUsers] = useState([]);

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

  

  return (
    <div className="App">
      <UserProvider>
        <Router>
          <NavBar
            setModalOpen={setModalOpen}
            applicationUser={applicationUser}
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
              path="/achievements"
              element={
                <Protected>
                  <Achievements setDate={setDate} date={date} applicationUser={applicationUser} requestSearch = {requestSearch} setRequestSearch={setRequestSearch}/>
                </Protected>
              }
            />
            <Route
              path="/browse-requests"
              element={
                <Protected>
                  <OpenRequestPage
                    date={date}
                    setDate={setDate}
                    openRequests={openRequests}
                    applicationUser={applicationUser}
                    setRequestSearch = {setRequestSearch}
                    requestSearch = {requestSearch}
                   
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
                    applicationUser={applicationUser}
                    requests={requests}
                    setRequests={setRequests}
                    openRequests={openRequests}
                    setOpenRequests={setOpenRequests}
                    setRequestSearch = {setRequestSearch}
                    requestSearch = {requestSearch}
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
                      setRequestSearch = {setRequestSearch}
                      requestSearch = {requestSearch}
                      
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
                    date = {date}
                    setRequestSearch = {setRequestSearch}
                    requestSearch = {requestSearch}
                  />
                </Protected>
              }
            />
            <Route
              path="/requests/:id"
              element={
                <Protected>
                  <RequestDetails
                    setDate={setDate}
                    date={date}
                    applicationUser={applicationUser}
                    setRequestSearch = {setRequestSearch}
                    requestSearch = {requestSearch}
                  />
                </Protected>
              }
            />
            <Route path="/edit/:id" element={<Protected><EditRequest applicationUser={applicationUser} setDate={setDate} date={date} setRequestSearch = {setRequestSearch}
                    requestSearch = {requestSearch} /></Protected>} />
            <Route
              path="/user/settings"
              element={
                <Protected>
                  <Settings
                    applicationUser={applicationUser}
                    setDate={setDate}
                    date={date}
                    setRequestSearch = {setRequestSearch}
                    requestSearch = {requestSearch}
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
                    applicationUser={applicationUser}
                    requests={requests}
                    setRequests={setRequests}
                    setRequestSearch = {setRequestSearch}
                    requestSearch = {requestSearch}
                    
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
                    applicationUser={applicationUser}
                    requests={requests}
                    setRequests={setRequests}
                    setRequestSearch = {setRequestSearch}
                    requestSearch = {requestSearch}
                  />
                </Protected>
              }
            /> 
          </Routes>
          <Footer />
        </Router>
      </UserProvider>
    </div>
  );
};

export default App;

