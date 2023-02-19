//Dependencies
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../../Providers/UserProviders";

//Components
import SidebarNav from "../SideBarNav/SidebarNav";

//Bootstrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

//CSS
import "./NewRequestForm.css";

// API
const API = process.env.REACT_APP_BACKEND_API_KEY;

const NewRequestForm = ({ applicationUser, setDate, date, requestSearch, setRequestSearch }) => {
  let navigate = useNavigate();
  let user = useContext(UserContext);

  // CREATE OR ADD A NEW REQUEST
  const makeRequest = (newRequest) => {
    debugger;
    axios
      .post(`${API}/requests/new-request`, {
        ...newRequest,
        elder_id: user.uid,
      })
      .then(
        () => {
          navigate("/user-dashboard");
        },
        (error) => console.error(error)
      )
      .catch((c) => console.warn("catch", c));
  };

  console.log(applicationUser.profilephoto)
  const [request, setRequest] = useState({
    elder_id: "",
    elder_img: applicationUser.profilephoto,
    title: "",
    req_date: "",
    description: "",
    location: "",
    time: "",
    image: "",
  });
  console.log(request)
  // text change method
  const textChange = (e) => {
    setRequest({ ...request, [e.target.id]: e.target.value });
  };

  // submit method
  const handleSubmit = (e) => {
    e.preventDefault();
    makeRequest(request);
  };

  return (
    <div className="user-dashboard">
      <div className='form_sidebar-nav'>

      <SidebarNav setDate={setDate} date = {date} applicationUser={applicationUser} setRequestSearch = {setRequestSearch} requestSearch = {requestSearch} />
      </div>
      <Container className="request-form">
        <h3>Submit A Request</h3>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Form.Group as={Col} className="mb-3">
              <Form.Label>Request Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Grocery Pick Up"
                id="title"
                value={request.title}
                onChange={textChange}
              />
            </Form.Group>
            <Form.Group as={Col} className="mb-3">
              <Form.Label>
                Request Date<span className="required-field">*</span>
              </Form.Label>
              <Form.Control
                type="date"
                id="req_date"
                value={request.req_date}
                onChange={textChange}
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>
              Request Description<span className="required-field">*</span>
            </Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              id="description"
              placeholder="Tell us what you need..."
              value={request.description}
              onChange={textChange}
              required
            />
          </Form.Group>
          <Row>
            <Form.Group as={Col} className="mb-3">
              <Form.Label>
                Location<span className="required-field">*</span>
              </Form.Label>
              <Form.Control
                type="text"
                id="location"
                placeholder="123 Somewhere St"
                value={request.location}
                onChange={textChange}
                required
              />
            </Form.Group>
            <Form.Group as={Col} className="mb-3">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                id="time"
                placeholder="2pm"
                value={request.time}
                onChange={textChange}
                required
              />
            </Form.Group>
            <Form.Group as={Col} className="mb-3">
              <Form.Label>Request Image</Form.Label>
              <Form.Control
                type="text"
                id="image"
                value={request.image}
                onChange={textChange}
              />
            </Form.Group>
          </Row>
          <div className="form-button">
            <Button type="submit">Submit</Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default NewRequestForm;
