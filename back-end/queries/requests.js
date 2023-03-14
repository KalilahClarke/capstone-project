const db = require("../db/dbConfig.js");

const getAllRequests = async () => {
  try {
    console.log("Listing all posted requests");
    const requests = await db.any(
      "SELECT * FROM requests ORDER BY req_date ASC"
    ); // Lists requests by their date, ascending
    return requests;
  } catch (error) {
    return error;
  }
};

// --Routes--

// Get all requests that are currently unassigned
const openRequests = async () => {
  try {
    console.log("Listing all open requests");
    requests = await db.any(
      "SELECT * FROM requests WHERE assigned=FALSE ORDER BY req_date ASC"
    );
    return requests;
  } catch (error) {
    return error;
  }
};

//Create request
const makeRequest = async (request) => {
  try {
    console.log("QUERY : Adding request to database");
    request = await db.one(
      "INSERT INTO requests (elder_id, elder_img, description, req_date, location, time, title, image) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *",
      [
        request.elder_id,
        request.elder_img,
        request.description,
        request.req_date,
        request.location,
        request.time,
        request.title,
        request.image,
      ]
    );
    return request;
  } catch (error) {
    return error;
  }
};

const getRequest = async (id) => {
  try {
    console.log("Retreiving request from request table");
    const request = await db.one("SELECT * FROM requests WHERE id=$1", id);
    return request;
  } catch (error) {
    return error;
  }
};

const volunteerRequests = async (uuid) => {
  try {
    console.log(`Retreiving assigned requests for user ${uuid}`);
    const requests = await db.any(
      "SELECT * FROM requests WHERE volunteer_id=$1 ORDER BY req_date ASC",
      uuid
    );
    return requests;
  } catch (error) {
    return error;
  }
};

const seniorRequests = async (uuid) => {
  try {
    console.log(`Retreiving posted requests by user ` + uuid);
    const requests = await db.any(
      "SELECT * FROM requests WHERE elder_id=$1",
      uuid
    );
    return requests;
  } catch (error) {
    return error;
  }
};

const editRequest = async (request, id) => {
  try {
    console.log("Editing request with id of " + id);
    const req = await db.one(
      "UPDATE requests SET req_date=$1, title=$2, description=$3, location=$4, time=$5, image=$6 WHERE id=$7 RETURNING *",
      [
        request.req_date,
        request.title,
        request.description,
        request.location,
        request.time,
        request.image,
        id,
      ]
    );
    return req;
  } catch (error) {
    return error;
  }
};


//Review..
const assignVolunteer = async (request) => {
  try {
    console.log(`QUERY : Assigning volunteer ${request.volunteer} to request ${request.req_id}`);
    const assign = await db.one(
      "UPDATE requests SET volunteer_id=$1, assigned=$2 WHERE id=$3 RETURNING *",
      [request.volunteer, "TRUE", request.req_id]
    );
    return assign;
  } catch (error) {
    return error;
  }
};

const removeVolunteer = async (request) => {
  try {
    console.log("Removing volunteer from request" + request.req_id);
    const unAssign = await db.one(
      "UPDATE requests SET volunteer_id=NULL, assigned=FALSE WHERE id=$1 RETURNING *",
      [request.req_id]
    );
    return unAssign;
  } catch (error) {
    return error;
  }
};

const deleteRequest = async (id) => {
  try {
    console.log("Deleting request with id of " + id);
    const request = await db.one(
      "DELETE FROM requests WHERE id=$1 RETURNING *",
      id
    );
    return request;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllRequests,
  getRequest,
  openRequests,
  editRequest,
  makeRequest,
  deleteRequest,
  volunteerRequests,
  seniorRequests,
  assignVolunteer,
  removeVolunteer,
};
