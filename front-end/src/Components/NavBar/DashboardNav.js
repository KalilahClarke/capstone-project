//Dependencies
import { useNavigate, Link } from "react-router-dom";
import { signOut } from "../../Services/Firebase";
import { UserContext } from "../../Providers/UserProviders";
import { useContext } from "react";


//Bootstrap
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";

//CSS Import
import "./DashboardNav.css";

const DashboardNav = ({ applicationUser }) => {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const { displayName, photoURL } = user;


  return (
    <Navbar className="dash-navbar">
      <Navbar.Brand className="nav-logo">
        <Link to='/user-dashboard'>
        <img src="/images/logoGS.png" alt="logo" />
        </Link>
      </Navbar.Brand>
      <Container className="dashboard-nav">
        <Nav className="me-auto.">
          <img src={applicationUser.profilephoto ? applicationUser.profilephoto : photoURL} className="profile-pic" alt={displayName} />
          <Dropdown>
            <Dropdown.Toggle id="dropdown">
              {applicationUser.verified ? (
                <i className="fa-solid fa-circle-check"></i>
              ) : null}
              {displayName.split(" ").shift()}
            </Dropdown.Toggle>
            <Dropdown.Menu>

            
               <Dropdown.Item onClick={()=>{navigate('/user/settings')}}>
                Settings <i className="fa-sharp fa-solid fa-gear"></i>
                </Dropdown.Item>
          
              <Dropdown.Item onClick={signOut}>Sign-Out </Dropdown.Item>
              {/* Visual Support */}
              <Dropdown.Item onClick={()=>{navigate('/template')}}>
                Review Template 
                </Dropdown.Item>
              {/* Visual Support */}
            </Dropdown.Menu>
          </Dropdown>
          {/* <i className="fa-regular fa-envelope" id="envelope"></i>
          <i className="fa-regular fa-bell" id="bell"></i> */}
        </Nav>
      </Container>
    </Navbar>
  );
};

export default DashboardNav;
