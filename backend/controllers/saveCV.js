const CVTemplate = require("../models/CVTemplate");

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
