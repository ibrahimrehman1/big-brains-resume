const CVForm = require("../models/CVForm");

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