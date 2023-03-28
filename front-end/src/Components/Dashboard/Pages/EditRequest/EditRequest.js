//Dependencies
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

//Components

//CSS
import "./EditRequest.css";

//Bootstrap
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

//API
const API = process.env.REACT_APP_BACKEND_API_KEY;

const EditRequest = ({ applicationUser }) => {
  let { id } = useParams();
  let navigate = useNavigate();

  const [editedRequest, setEditedRequest] = useState({
    title: "",
    req_date: "",
    description: "",
    location: "",
    time: "",
    image: "",
    elder_id: { applicationUser },
  });

  useEffect(() => {
    axios
      .get(`${API}/requests/help_req/${id}`)
      .then((res) => setEditedRequest(res.data))
      .then((res) => console.log(res.data));
  }, []);

  const updateRequest = () => {
    axios
      .put(`${API}/requests/edit_req/${id}`, editedRequest)
      .then((res) => setEditedRequest(res.data))
      .then(() => navigate("/dashboard"))
      .catch((error) => console.error(error));
  };

  const handleTextChange = (e) => {
    setEditedRequest({ ...editedRequest, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateRequest(editedRequest, id);
  };

  const handleDelete = () => {
    axios
      .delete(`${API}/requests/delete_req/${id}`)
      .then(() => navigate("/dashboard"))
      .catch((err) => console.error(err));
  };

  return (
    <div className="layout">
      <div className="cards">
        <div></div>

        <div className="card-holder">
          <div className="card-wrap">
          <div className="card-items-forward">
          <figure className='card-fig figure' data-category={'GoldenSolutions'}>
            <img  className = 'cardImg'src={editedRequest.image} alt="request-image" />
            </figure>
            <Form onSubmit={handleSubmit}>
              <Row>
                <Form.Group as={Col} className="mb-3">
                  <Form.Label>Request Title</Form.Label>
                  <Form.Control
                    id="title"
                    type="text"
                    value={editedRequest.title}
                    onChange={handleTextChange}
                  />
                </Form.Group>

                <Form.Group as={Col} className="mb-3">
                  <Form.Label>Request Date</Form.Label>
                  <Form.Control
                    id="req_date"
                    type="date"
                    value={editedRequest.req_date}
                    onChange={handleTextChange}
                  />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label>Request Description</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  cols={6}
                  id="description"
                  value={editedRequest.description}
                  onChange={handleTextChange}
                />
              </Form.Group>

              <Row>
                <Form.Group as={Col} className="mb-3">
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    id="location"
                    value={editedRequest.location}
                    onChange={handleTextChange}
                  />
                </Form.Group>

                <Form.Group as={Col} className="mb-3">
                  <Form.Label>Time</Form.Label>
                  <Form.Control
                    type="time"
                    id="time"
                    value={editedRequest.time}
                    onChange={handleTextChange}
                  />
                </Form.Group>

                <Form.Group as={Col} className="mb-3">
                  <Form.Label>Request Image</Form.Label>
                  <Form.Control
                    type="text"
                    id="image"
                    value={editedRequest.image}
                    onChange={handleTextChange}
                  />
                </Form.Group>
              </Row>
            </Form>
          </div>
          </div>
        <div className="buttons">
          <Button type="submit" onClick={() => navigate("/dashboard")}>
            Back
          </Button>
          <Button type="submit">Submit</Button>
          <Button onClick={handleDelete}>Delete</Button>
        </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default EditRequest;
