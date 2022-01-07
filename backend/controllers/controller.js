const mongoose = require("mongoose");
const User = require("../models/models");
const bcrypt = require("bcrypt");

mongoose
  .connect(
    "mongodb+srv://ibrahimrehman1:nVD314ZqreevPgf7@cluster0.ombuy.mongodb.net/database0?retryWrites=true&w=majority"
  )
  .then((_) => console.log("Connected..."));

module.exports.signup = async (req, res) => {
  const { firstName, lastName, userName, emailAddress, password } = req.body;
  let user = await User.create({
    firstName,
    lastName,
    userName,
    emailAddress,
    password,
  });
  console.log(user);

  res.json({ status: "Success!", userid: user["_id"] });
};

module.exports.login = async (req, res) => {
  const { emailAddress, password } = req.body;
  let user = await User.findOne({ emailAddress }).exec();
  let passwordStatus = await bcrypt.compare(password, user["password"]);
  if (passwordStatus) {
    res.json({ status: "Success!", userid: user["_id"] });
  } else {
    res.json({ status: "Failed!" });
  }
};
