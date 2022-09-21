const ResumeForm = require("../models/ResumeForm");

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
