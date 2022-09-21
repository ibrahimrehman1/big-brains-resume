const mongoose = require("mongoose");
const User = require("../models/User");
const CVForm = require("../models/CVForm");
const CVTemplate = require("../models/CVTemplate");
const Feedback = require("../models/Feedback");
const ResumeForm = require("../models/ResumeForm");
const ResumeTemplate = require("../models/ResumeTemplate");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

mongoose
  .connect(
    ""
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

    res.cookie("auth-cookie", token, { httpOnly: true, maxAge: 3600000 });

    // Cookie not saved in browser when sent from localhost

    console.log("Cookie Set");
    res.json({ status: "Success!", userID, token, userName });
  } catch (err) {
    res.json({ error: err.message.split(":")[2].trim() });
  }
};

module.exports.login = async (req, res) => {
  const { emailAddress, password } = req.body;
  console.log(emailAddress, password);
  try {
    let user = await User.findOne({ emailAddress }).exec();
    console.log(user);
    if (user) {
      let passwordStatus = await bcrypt.compare(password, user["password"]);
      console.log(passwordStatus);
      if (passwordStatus) {
        const userID = user["_id"];

        let token = createToken(userID);

        res.cookie("auth-cookie", token, { httpOnly: true, maxAge: 3600 });
        res.json({
          status: "Success!",
          userID,
          token,
          userName: user["userName"],
        });
      } else {
        res.json({ error: "Email/Password does not exist!" });
      }
    } else {
      res.json({ error: "Email/Password does not exist!" });
    }
  } catch (err) {
    res.json({ error: err.message });
  }
};

module.exports.logout = (req, res) => {
  console.log("Logged out!");
  res.cookie("auth-cookie", "", { httpOnly: true, maxAge: 1 });
  res.json({ status: "Successfully Cleared Cookie!" });
};

module.exports.resumeForm = async (req, res) => {
  console.log(req.body);
  const {
    fullName,
    designation,
    summary,
    skills,
    education,
    projects,
    contactDetails,
    languages,
    interests,
    certifications,
    userID,
  } = req.body;
  let resumeform = await ResumeForm.create({
    fullName,
    designation,
    summary,
    skills,
    education,
    projects,
    contactDetails,
    languages,
    interests,
    certifications,
  });
  console.log(resumeform);
  User.findById(userID)
    .exec()
    .then((user) => {
      let userResumeFormIDs = user.userFormResume.concat([resumeform._id]);
      user.userFormResume = userResumeFormIDs;
      user.save();
    });

  res.json({ Status: "Resume Form Saved!" });
};

module.exports.cvForm = async (req, res) => {
  console.log(req.body);
  const {
    fullName,
    designation,
    aboutMe,
    skills,
    education,
    projects,
    contactDetails,
    languages,
    interests,
    certifications,
    workExperience,
    userID,
  } = req.body;
  let Cvform = await CVForm.create({
    fullName,
    designation,
    aboutMe,
    skills,
    education,
    projects,
    contactDetails,
    languages,
    interests,
    certifications,
    workExperience,
  });
  console.log(Cvform);
  User.findById(userID)
    .exec()
    .then((user) => {
      let userCVFormIDs = user.userFormCV.concat([Cvform._id]);
      user.userFormCV = userCVFormIDs;
      user.save();
    });

  res.json({ Status: "CV Form Saved!" });
};

module.exports.feedback = async (req, res) => {
  const { emojis, comments, userID } = req.body;
  console.log(emojis, comments);
  try {
    let feedback = await Feedback.create({ emojis, comments });
    console.log(feedback);
    User.findById(userID)
      .exec()
      .then((user) => {
        let userFeedbackIDs = user.userFeedback.concat([feedback._id]);
        user.userFeedback = userFeedbackIDs;
        user.save();
      });
    res.json({ Status: "Feedback Saved!" });
  } catch (err) {
    res.json({ error: err.message });
  }
};

module.exports.saveCV = async (req, res) => {
  const {
    fullName,
    aboutMe,
    skills,
    education,
    projects,
    contactDetails,
    interests,
    certifications,
    workExperience,
    imageID,
    userID,
  } = req.body;

  let Cvtemplate = await CVTemplate.create({
    fullName,
    aboutMe,
    skills,
    education,
    projects,
    contactDetails,
    interests,
    certifications,
    workExperience,
    imageID,
  });
  console.log(Cvtemplate);

  User.findById(userID)
    .exec()
    .then((user) => {
      let userTemplateCVIDs = user.userTemplateCV.concat([Cvtemplate._id]);
      user.userTemplateCV = userTemplateCVIDs;
      user.save();
    });

  res.json({ Status: "CV Form Saved!" });
};

module.exports.myDocuments = async (req, res) => {
  const { userID } = req.body;
  let user = await User.findById(userID)
    .populate("userFormCV")
    .populate("userFormResume")
    .populate("userTemplateResume")
    .populate("userTemplateCV")
    .exec();
  console.log(user);

  res.json({ status: "User Data Fetched!", userData: user });
};
