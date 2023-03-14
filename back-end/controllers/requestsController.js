// CONFIGURATIONS
const express = require("express");
const requests = express.Router();

// IMPORTING QUERIES
const {
  assignVolunteer,
  getAllRequests,
  getRequest,
  editRequest,
  makeRequest,
  deleteRequest,
  volunteerRequests,
  seniorRequests,
  openRequests,
  removeVolunteer,
} = require("../queries/requests.js");

// BUILDING ROUTES
// INDEX / ALL REQUEST
requests.get("/", async (req, res) => {
  const allRequests = await getAllRequests();
  if (allRequests[0]) {
    res.status(200).json(allRequests);
  } else {
    res.status(500).json({ error: "server error!" });
  }
});

// SHOW / SINGLE REQUEST
requests.get("/help_req/:id", async (req, res) => {
  const { id } = req.params;
  const requests = await getRequest(id);
  if (requests) {
    res.json(requests);
  } else {
    res.status(404).json({ error: "not Found" });
  }
});

requests.post("/my_assigned_requests", async (req, res) => {
  try {
    const uuid = req.body.uuid;
    console.log("Showing all assigned requests for volunteer " + uuid);
    const requests = await volunteerRequests(uuid);
    res.json(requests);
    console.log(requests);
  } catch (error) {
    return error;
  }
});

requests.post("/my_created_requests", async (req, res) => {
  try {
    const uuid = req.body.uuid;
    console.log("Showing all requests created by current user");
    const requests = await seniorRequests(uuid);
    res.json(requests);
    console.log(requests);
  } catch (error) {
    return error;
  }
});

requests.get("/open_requests", async (req, res) => {
  try {
    console.log("Showing all requests not currently assigned to a volunteer");
    const requests = await openRequests();
    res.status(200).json(requests);
    console.log(requests);
  } catch (error) {
    return error;
  }
});

// SHOW ALL REQUESTS POSTED BY THE USER

// ASSIGN VOLUNTEER TO REQUEST
requests.put("/accept_request", async (req, res) => {
  try {
    console.log(req.body);
    const assignedRequest = await assignVolunteer(req.body);
    if (assignedRequest.assigned) {
      res.status(200).json(assignedRequest);
    } else {
      res.status(400).json({ error: "Request failed to be assigned" });
    }
  } catch (error) {
    return error;
  }
});

// REMOVE VOLUNTEER FROM REQUEST
requests.put("/reject_request", async (req, res) => {
  try {
    console.log("CONTROLLER : REMOVING VOLUNTEER FROM REQUEST");
    const rejectRequest = await removeVolunteer(req.body);
    if (rejectRequest.assigned === false) {
      res.status(200).json(rejectRequest);
    } else {
      res.status(400).json({ error: "Failed to remove request assignment" });
    }
  } catch (error) {
    return error;
  }
});

// CREATE OR MAKE A REQUEST
requests.post("/new-request", async (req, res) => {
  try {
    console.log("CONTROLLER : Adding request to database");
    const createdRequest = await makeRequest(req.body);
    res.json(createdRequest);
  } catch (error) {
    return error;
  }
});

// UPDATE OR EDIT A REQUEST
requests.put("/edit_req/:id", async (req, res) => {
  const { id } = req.params;
  const editedRequest = await editRequest(req.body, id);
  if (editedRequest.id) {
    res.status(200).json(editedRequest);
  } else {
    res.status(400).json({ error: "Your request was not updated" });
  }
});

// DELETE A REQUEST
requests.delete("/delete_req/:id", async (req, res) => {
  const { id } = req.params;
  const deletedRequest = await deleteRequest(id);
  if (deletedRequest.id) {
    res.status(200).json(deletedRequest);
  } else {
    res.status(404).json("Request not found!");
  }
});

module.exports = requests;