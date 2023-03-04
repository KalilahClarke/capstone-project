//Dependencies
import { useNavigate, Link } from "react-router-dom";
import { signOut } from "../../Services/Firebase";
import { UserContext } from "../../Providers/UserProviders";
import { useContext } from "react";
import { IoMdSettings } from 'react-icons/io'
import {AiFillCaretDown} from 'react-icons/ai'
import PersonIcon from '@mui/icons-material/Person';

//Bootstrap
import Container from "react-bootstrap/esm/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Dropdown from "react-bootstrap/Dropdown";

//CSS Import
import "./DashboardNav.css";

const DashboardNav = ({ applicationUser, setDashboardFilter }) => {
  const user = useContext(UserContext);
  const navigate = useNavigate();
  const { displayName, photoURL } = user;


  return (
    <Navbar className="dash-navbar">
      <Navbar.Brand className="nav-logo">
        <Link to='/dashboard'>
        <img src="/images/logoGS.png" alt="logo" />
        </Link>
      </Navbar.Brand>
      <Container className="dashboard-nav">
        <Nav className="me-auto.">
          <img src={applicationUser.profilephoto ? applicationUser.profilephoto : photoURL} className="profile-pic" alt={displayName} />
          <AiFillCaretDown className = 'fillCaretDown'/>
          <Dropdown>
            <Dropdown.Toggle id="dropdown">
              {applicationUser.verified ? (
                <i className="fa-solid fa-circle-check"></i>
              ) : null}
              {displayName.split(" ").shift()}
            </Dropdown.Toggle>
            <Dropdown.Menu>
            <Dropdown.Item onClick={()=>{setDashboardFilter('profile')}}>
                Profile <PersonIcon/>
                </Dropdown.Item>
               <Dropdown.Item onClick={()=>{setDashboardFilter('settings')}}>
                Settings <IoMdSettings size={20}/>
                </Dropdown.Item>
          
              <Dropdown.Item onClick={signOut}>Sign-Out </Dropdown.Item>
             
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
