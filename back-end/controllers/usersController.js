// CONFIGURATIONS
const express = require("express");
const users = express.Router();

// IMPORTING ALL USER QUERIES
const {
  getAllUsers,
  getUser,
  deleteUser,
  editUser,
  addUser,
} = require("../queries/users.js");

// ROUTES
// INDEX / ALL USERS
users.get("/", async (req, res) => {
  const allUsers = await getAllUsers();
  if (allUsers[0]) {
    res.status(200).json(allUsers);
  } else {
    console.log(allUsers, 'Error')
    res.status(500).json({ error: "server error" });
  }
});

// SINGLE USER
// !--- The id being passed here is the uid of the user from Firebase ---!
users.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await getUser(id);
  if (user) {
    res.json({ payload: user, success: true });
  } else {
    res.status(404).json({ error: "not Found" });
  }
});

// EDIT USER
// !--- The id being passed here is the uid of the user from Firebase ---!
users.put("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const editedUser = await editUser(req.body, id);
    if (editedUser.uuid === id) {
      res.status(200).send(editedUser);
    } else {
      res.status(404).json({ error: "User not found" });
    }
  } catch (error) {
    return error;
  }
});

// CREATE USER
users.post("/", async (req, res) => {
 
  try {
    const newUser = await addUser(req.body);
    if (newUser.uuid) {
      res.status(200).json({ payload: newUser, success: true });
    } else {
      throw error;
    }
  } catch (error) {
    res.status(400).json({ error: "error", success: false });
  }
});

// DELETE USER
// !--- The id being passed here is the uid of the user from Firebase ---!
users.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const deletedUser = await deleteUser(id);
  if (deletedUser.uuid === id) {
    res.status(200).json(deletedUser);
  } else {
    res.status(400).json("User Not Found");
  }
});

module.exports = users;