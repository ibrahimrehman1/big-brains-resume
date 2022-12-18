import { Logger } from "../utils/logger";
import { ResumeForm } from "../models/ResumeForm";
import { User } from "../models/User";

export const resumeForm = async (req, res) => {
  Logger.logInfo(req.body);
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
  Logger.logInfo(resumeform);
  User.findById(userID)
    .exec()
    .then((user) => {
      let userResumeFormIDs = user.userFormResume.concat([{type: {prototype: {_id: resumeform._id.toString()}}}]);
      user.userFormResume = userResumeFormIDs;
      user.save();
    });

  res.json({ Status: "Resume Form Saved!" });
};
