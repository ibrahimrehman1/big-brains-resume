import { Logger } from "../utils/logger";
import { CVTemplate } from "../models/CVTemplate";
import { User } from "../models/User";

export const saveCV = async (req, res) => {
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
  Logger.logInfo(Cvtemplate);

  User.findById(userID)
    .exec()
    .then((user) => {
      let userTemplateCVIDs = user.userTemplateCV.concat([{type: {prototype: {_id: Cvtemplate._id.toString()}}}]);
      user.userTemplateCV = userTemplateCVIDs;
      user.save();
    });

  res.json({ Status: "CV Form Saved!" });
};
