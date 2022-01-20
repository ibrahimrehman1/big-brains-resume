const mongoose = require("mongoose");
const User = require("../models/models");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

mongoose
  .connect(
    "mongodb+srv://ibrahimrehman1:nVD314ZqreevPgf7@cluster0.ombuy.mongodb.net/database0?retryWrites=true&w=majority"
  )
  .then((_) => console.log("Connected..."));

const createToken = (id) => {
  return JWT.sign({ id }, "big brains", { expiresIn: 3600 });
};

module.exports.signup = async (req, res) => {
  const { firstName, lastName, userName, emailAddress, password } = req.body;
  try {
    let user = await User.create({
      firstName,
      lastName,
      userName,
      emailAddress,
      password,
    });

    console.log(user);

    const userID = user["_id"];

    let token = createToken(userID);

    res.cookie("auth-cookie", token, { httpOnly: true, maxAge: 3600 });

    res.json({ status: "Success!", userid: userID, token });
  } catch (err) {
    res.json({ error: err.message.split(":")[2].trim() });
  }
};

module.exports.login = async (req, res) => {
  const { emailAddress, password } = req.body;
  let user = await User.findOne({ emailAddress }).exec();
  let passwordStatus = await bcrypt.compare(password, user["password"]);
  if (passwordStatus) {
    const userID = user["_id"];

    let token = createToken(userID);

    res.cookie("auth-cookie", token, { httpOnly: true, maxAge: 3600 });
    res.json({ status: "Success!", userid: userID, token });
  } else {
    res.json({ status: "Failed!" });
  }
};
