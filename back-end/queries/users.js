const db = require("../db/dbConfig.js");

const getAllUsers = async () => {
  try {
    console.log("Listing all users from the users table");
    const users = await db.any("SELECT * FROM users ORDER BY uuid ASC");
    return users;
  } catch (error) {
    return error;
  }
};

// --Routes--

//Single user
const getUser = async (uuid) => {
  try {
    console.log("Retreiving user from table users");
    const user = await db.one("SELECT * FROM users WHERE uuid=$1", uuid);
    return user;
  } catch (error) {
    return error;
  }
};

const addUser = async (user) => {
  console.log("Adding new user to the DB");
  try {
    const newUser = await db.one(
      "INSERT INTO users (uuid, firstname, lastname, dob, address, unit, city, state, zipcode, phonenumber, email, user_type, profilephoto, languages, verification_type) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING *",
      [
        user.uuid,
        user.firstname,
        user.lastname,
        user.dob,
        user.address,
        user.unit,
        user.city,
        user.state,
        user.zipcode,
        user.phonenumber,
        user.email,
        user.user_type,
        user.profilephoto,
        user.languages,
        user.verification_type,
      ]
    );
    return newUser;
  } catch (error) {
    return error;
  }
};
//Delete user - requires admin auth
const deleteUser = async (uuid) => {
  console.log("Removing user " + uuid);
  try {
    const user = await db.one(
      "DELETE FROM users WHERE uuid=$1 RETURNING *",
      uuid
    );
    return user;
  } catch (error) {
    return error;
  }
};

//Edit user - profile details and such. Not all of these should be accessible to the user. For instance
const editUser = async (user, uuid) => {
  try {
    console.log("Editing user with id of " + uuid);
    const editedUser = await db.one(
      "UPDATE users SET firstname=$1, lastname=$2, address=$3, unit=$4, city=$5, state=$6, zipcode=$7, phonenumber=$8, profilephoto=$9, languages=$10 WHERE uuid=$11 RETURNING *",
      [
        user.firstname,
        user.lastname,
        user.address,
        user.unit,
        user.city,
        user.state,
        user.zipcode,
        user.phonenumber,
        user.profilephoto,
        user.languages,
        uuid,
      ]
    );
    return editedUser;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllUsers,
  getUser,
  deleteUser,
  editUser,
  addUser,
};
