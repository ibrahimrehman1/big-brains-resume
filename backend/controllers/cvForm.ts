import {CVForm} from "../models/CVForm";
import { Logger } from "../utils/logger";
import { User } from "../models/User";


export const cvForm = async (req, res) => {
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

  let objectID = Cvform._id;
  
  Logger.logInfo(Cvform);
  User.findById(userID)
    .exec()
    .then((user) => {
      
      let userCVFormIDs = user.userFormCV.concat([{type: {prototype: {_id: objectID.toString()}}}]);
      user.userFormCV = userCVFormIDs;
      user.save();
    });

  res.json({ Status: "CV Form Saved!" });
};
