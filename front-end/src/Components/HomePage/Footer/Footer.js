//CSS Imports
import "./Footer.css";
import { useContext } from "react";
import { UserContext } from "../../../Providers/UserProviders";
import { Link } from 'react-router-dom'

const Footer = ({render, setRender, setDashboardFilter}) => {
  const user = useContext(UserContext);

  const handleLocation = () => {
    setRender(!render)
    setDashboardFilter('main')
  }
  return (
    <>
      {user ? (
        <div className="footer-userdashboard">
          <div className='github'>
          </div>
          <div></div>
          <div className="brand-culture-userdashboard">
            <div className="brand-box-userdasboard">
            <Link to='/dashboard' onClick={handleLocation}>
              <img
                className="brand-userdasboard"
                src="/images/logoGS.png"
                alt="GoldenSolutions Logo"
                width="300"
                />
            </Link>
            </div>
            <div className="quote">
              <p>
                <em>
                  "All the beautiful sentiments in the world weigh less than a
                  single lovely action."
                </em>{" "}
                - James Russell Lowell
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="footer">
          <div className="brand-culture">
            <div className="brand-box">
              <img
                className="brand"
                src="/images/logoGS.png"
                alt="GoldenSolutions Logo"
                width="300"
              />
            </div>
            <div className="quote">
              <p>
                <em>
                  "All the beautiful sentiments in the world weigh less than a
                  single lovely action."
                </em>{" "}
                - James Russell Lowell
              </p>
            </div>
          </div>
          <div className="quicklinks">
            <div className="lists">
              <h5 className="links">Quick Links</h5>
              <ul className="list">
                <ol>
                  <a href="/">Home</a>
                </ol>
                <ol>
                  <a href="/volunteers">Volunteers</a>
                </ol>
                <ol>
                  <a href="/seniors">Seniors</a>
                </ol>
                <ol>
                  <a href="/our-team">Our Team</a>
                </ol>
              </ul>
            </div>
          </div>
          <div className="contact">
            <h5>Contact Us</h5>
            <div>123 Anywhere St., Any City, ST 12345</div>
            <div>support@goldensolutions.com</div>
            <div>+123-456-7890</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
