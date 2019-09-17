const bcrypt = require("bcryptjs");

const Users = require("../users/users-model.js");

module.exports = (req, res, next) => {
  // as long as someone has a valid username/password
  // that we have already validated
  // they should have access

  // this shouldnt happen
  //should be grabbing a cookie
  if (req.session && req.session.user) {
    next();
  } else {
    res.status(401).json({ message: "Invalid Credentials" });
  }
};
