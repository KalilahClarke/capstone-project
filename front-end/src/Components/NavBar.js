import React, {useState} from "react";
import { Link } from "react-router-dom";

//Component Imports
// import Container from "react-bootstrap/esm/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
import DashboardNav from "./DashboardNav";
import { UserContext } from "../Providers/UserProviders";
import { useContext } from "react";

//CSS Imports
import "./NavBar.css";
import logo from "../images/logoGS.png";
import Button from "react-bootstrap/Button";

const NavBar = ({ setModalOpen, setCurrentUser }) => {
  const user = useContext(UserContext);
  setCurrentUser(user)

  const [click, setClick] = useState(false);

  // methods 
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return user ? <DashboardNav /> : (
    <div className="Navbar">
      <Link to="/" className="nav-logo" onClick={closeMobileMenu}>
      <img src={logo} alt="logo" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/volunteers" className="nav-links" onClick={closeMobileMenu}>
              Volunteers
            </Link>
          </li>
          <li
            className="nav-item"
          >
            <Link to="/seniors" className="nav-links" onClick={closeMobileMenu}>
              Seniors
            </Link>
          </li>
          </ul>
      
          <Button onClick={() => setModalOpen(true)}>
            <i id="avatar" className="fa-solid fa-user"></i>Login
          </Button>
       
    </div>
  );
};

export default NavBar;


{/* <Navbar>
        <Navbar.Brand href="/" className="logo">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Container className="nav-content">
          <Nav className="me-auto.">
            <Nav.Link href="/volunteers" className="links">
              Volunteers
            </Nav.Link>
            <Nav.Link href="/seniors" className="links">
              Seniors
            </Nav.Link>
             </Container>
      </Navbar>
          </Nav> */}
