//CSS
import "./SignUpPage.css";

//DEPENDENCIES
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from '../../../Providers/UserProviders';
import { useContext } from "react";
import { signUpWithGoogle } from "../../../Services/Firebase";

//Bootstrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

//API
const API = process.env.REACT_APP_BACKEND_API_KEY;

//STATES PACKAGE --> https://www.npmjs.com/package/usa-states
const UsaStates = require('usa-states').UsaStates;

const SignUpPage = ({setApplicationUser}) => {
  const [authErrors, setAuthErrors] = useState([]);
  const usStates = new UsaStates();
  
  const user = useContext(UserContext);

  const [newUser, setNewUser] = useState({
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

  useEffect(() => {
    const submitUser = async () => {
      if (user?.uid) {
        axios
        .post(`${API}/users`, { ...newUser, uuid: user.uid })
        .then(res => {
          if(res.data.payload.uuid){
            setAuthErrors([]);
            setApplicationUser(res.data.payload);
            navigate("/user-dashboard");
          }else{
            user.delete().then(() => setAuthErrors([...authErrors, "Sign up failed, please try again."]));
          }
        })
      };
    };

    submitUser();
  }, [user]);

  const navigate = useNavigate();

  const handleInput = (e) => {
    setNewUser({ ...newUser, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUpWithGoogle();
  };

  return (
    <div className="sign-up">
      <div className="signup-text">
        <h1>Join Us Today!</h1>
        <div className="instructions">
        <p className="p1">
          Welcome! Before we get started, please fill out the following form
          with the required information. 
        </p>
        <p className="p2"><strong>Verification Process:</strong></p>
        <ol>
          <li>Shortly after submitting your information, you should receive an email from us with further instructions. <em>{"If you are signing up to our website on behalf of a senior (you are a family member, caregiver, etc.) please include that information when emailing us back."}</em>
          </li>
          <li>Once all of the proper information is submitted, a background check will be done.</li>
          <li>A cleared background check will verify your account so you may begin using our site.</li>
        </ol>
        <p className="p3">It's as simple as 1, 2, 3!</p>
        <p className="p4"><span className="required-field">*</span><em>Required Fields</em></p>
        </div>
      </div>
      <div className="form">
        <Container>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} className="mb-3">
                <Form.Label>First Name<span className="required-field">*</span></Form.Label>
                <Form.Control
                  type="text"
                  placeholder="John"
                  id="firstname"
                  value={newUser.name}
                  onChange={handleInput}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} className="mb-3">
                <Form.Label>Last Name<span className="required-field">*</span></Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Smith"
                  id="lastname"
                  value={newUser.lastname}
                  onChange={handleInput}
                  required
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Date of Birth<span className="required-field">*</span></Form.Label>
                <Form.Control
                  type="date"
                  id="dob"
                  value={newUser.dob}
                  onChange={handleInput}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} className="mb-3">
                <Form.Label>Email<span className="required-field">*</span></Form.Label>
                <Form.Control
                  // disabled
                  type="email"
                  placeholder="johnsmith@gmail.com"
                  id="email"
                  value={newUser.email}
                  onChange={handleInput}
                  required
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            </Row>

            <Form.Group className="mb-3">
              <Form.Label>Address Line 1<span className="required-field">*</span></Form.Label>
              <Form.Control
                type="text"
                placeholder="124 Faker Lane"
                id="address"
                value={newUser.address}
                onChange={handleInput}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Address Line 2</Form.Label>
              <Form.Control
                type="text"
                placeholder="Apt 333"
                id="unit"
                value={newUser.unit}
                onChange={handleInput}
              />
            </Form.Group>

            <Row>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>City<span className="required-field">*</span></Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Bronx"
                  id="city"
                  value={newUser.city}
                  onChange={handleInput}
                  required
                />
              </Form.Group>

              <Form.Group as={Col} className="mb-3">
                <Form.Label>State<span className="required-field">*</span></Form.Label>
                <Form.Select
                  id="state"
                  value={newUser.state}
                  onChange={handleInput}
                  required
                >
                  <option>--Select State--</option>
                  {usStates.states.map(state => <option key={state.name}>{state.abbreviation}</option>)}
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} className="mb-3">
                <Form.Label>Zip Code<span className="required-field">*</span></Form.Label>
                <Form.Control
                  type="text"
                  placeholder="12345"
                  id="zipcode"
                  value={newUser.zipcode}
                  onChange={handleInput}
                  required
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Phone Number<span className="required-field">*</span></Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="1234567890"
                  id="phonenumber"
                  value={newUser.phonenumber}
                  onChange={handleInput}
                  required
                />
              </Form.Group>

              <Form.Group
                as={Col}
                className="mb-3"
                controlId="formBasicVerificationType"
              >
                <Form.Label>Verification Type</Form.Label>
                <Form.Select
                  id="verification_type"
                  value={newUser.verification_type}
                  onChange={handleInput}
                >
                  <option>--Select Option--</option>
                  <option>State ID</option>
                  <option>Passport</option>
                  <option>Driver's License</option>
                </Form.Select>
              </Form.Group>

              <Form.Group as={Col} className="mb-3">
                <Form.Label>Preferred Language</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="English"
                  id="languages"
                  value={newUser.languages}
                  onChange={handleInput}
                />
              </Form.Group>
            </Row>

            <Row>
              <Form.Group as={Col} className="mb-3">
                <Form.Label>Upload Photo</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="image"
                  id="profilephoto"
                  value={newUser.profilephoto}
                  onChange={handleInput}
                />
                <Form.Text className="text-muted">
                  Please upload a photo in which your face is visible.
                </Form.Text>
              </Form.Group>

              <Form.Group as={Col} className="mb-3">
                <Form.Label>User Type<span className="required-field">*</span></Form.Label>
                <Form.Select
                  id="user_type"
                  value={newUser.user_type}
                  onChange={handleInput}
                  required
                >
                  <option>--Select Option--</option>
                  <option>Senior</option>
                  <option>Volunteer</option>
                </Form.Select>
              </Form.Group>
            </Row>
            <div className="form-button">
              <Button type="submit">Submit</Button>
            </div>
          </Form>
        </Container>
      </div>
    </div>
  );
};

export default SignUpPage;
