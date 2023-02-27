//Dependencies
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from '../../../../Providers/UserProviders';
import { useContext } from "react";

//Component

//Bootstrap
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

//CSS
import "./Profile.css";

//API
const API = process.env.REACT_APP_BACKEND_API_KEY;

//STATES PACKAGE --> https://www.npmjs.com/package/usa-states
const UsaStates = require("usa-states").UsaStates;

function Profile({ applicationUser, setDashboardFilter}) {
  let navigate = useNavigate();
  const usStates = new UsaStates();
  const user = useContext(UserContext);

  const [editedUser, setEditedUser] = useState({
    address: "",
    city: "",
    dob: "",
    email: "",
    firstname: "",
    languages: "",
    lastname: "",
    phonenumber: "",
    profilephoto: "",
    state: "",
    unit: "",
    user_type: "",
    uuid: "",
    verification_type: "",
    verified: "",
    zipcode: "",
  });

  useEffect(() => {
    setEditedUser(applicationUser);
  }, [applicationUser]);

  const updateUser = (updatedUser) => {
    axios
      .put(`${API}/users/${applicationUser.uuid}`, updatedUser)
      .then(
        () => {
          setDashboardFilter('main')
          // navigate(`/dashboard`);
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  const handleTextChange = (event) => {
    setEditedUser({ ...editedUser, [event.target.id]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    updateUser(editedUser);
  };

  return (
  
      <Container className="settings">
        <h3 className="settings-header">Update Your Profile</h3>
        <div className="profile-image">
        <img
          src={
            applicationUser.profilephoto
              ? applicationUser.profilephoto
              : user.photoURL
          }
          alt="profile-photo"
        />
        </div>
        <div className="form-profile">
          <Form onSubmit={handleSubmit}>
            <Row>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  disabled
                  id="firstname"
                  value={applicationUser.firstname}
                  type="text"
                  onChange={handleTextChange}
                />
              </Form.Group>

              <Form.Group as={Col} className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  disabled
                  id="lastname"
                  value={applicationUser.lastname}
                  type="text"
                  onChange={handleTextChange}
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  disabled
                  id="dob"
                  value={applicationUser.dob}
                  type="date"
                  onChange={handleTextChange}
                />
              </Form.Group>

              <Form.Group as={Col} className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  disabled
                  id="email"
                  value={applicationUser.email}
                  type="email"
                  onChange={handleTextChange}
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Address Line 1</Form.Label>
                <Form.Control
                  id="address"
                  value={editedUser.address}
                  type="text"
                  onChange={handleTextChange}
                />
              </Form.Group>

              <Form.Group as={Col} className="mb-3">
                <Form.Label>Address Line 2</Form.Label>
                <Form.Control
                  id="unit"
                  value={editedUser.unit}
                  type="text"
                  onChange={handleTextChange}
                />
              </Form.Group>

              <Form.Group as={Col} className="mb-3">
                <Form.Label>City</Form.Label>
                <Form.Control
                  id="city"
                  value={editedUser.city}
                  type="text"
                  onChange={handleTextChange}
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>State</Form.Label>
                <Form.Select
                  value={editedUser.state}
                  onChange={handleTextChange}
                >
                  <option>--Select State--</option>
                  {usStates.states.map((state) => (
                    <option key={state.name}>{state.abbreviation}</option>
                  ))}
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} className="mb-3">
                <Form.Label>Zip Code</Form.Label>
                <Form.Control
                  id="zipcode"
                  value={editedUser.zipcode}
                  type="number"
                  onChange={handleTextChange}
                />
              </Form.Group>

              <Form.Group as={Col} className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  id="phonenumber"
                  value={editedUser.phonenumber}
                  type="tel"
                  onChange={handleTextChange}
                />
              </Form.Group>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Upload New Photo</Form.Label>
              <Form.Control
                id="profilephoto"
                value={editedUser.profilephoto}
                type="text"
                onChange={handleTextChange}
              />
              <Form.Text className="text-muted"></Form.Text>
            </Form.Group>
            <div className="buttons-container">
            <Button type="submit">Submit</Button>
          
              <Button onClick={()=>setDashboardFilter('main')}>Nevermind</Button>
           
            </div>
          </Form>
        </div>
      </Container>

  );
}

export default Profile;
