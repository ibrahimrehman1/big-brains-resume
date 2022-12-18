import {Schema, model} from "mongoose";

const cvTemplateSchema = new Schema({
  fullName: {
    type: String,
    trim: true,
    required: true,
  },
  // designation: {
  //   type: String,
  //   trim: true,
  // },
  aboutMe: {
    type: String,
    trim: true,
    minLength: [50, "About Me is too Short!"],
  },
  skills: {
    type: String,
    default: {},
  },
  detailedEducation: String,
  projects: String,
  contactDetails: String,
  // languages: {
  //   type: String,
  // },
  interests: String,
  certifications: String,
  workExperience: String,
  imageID: String,
});

const CVTemplate = model("cvtemplates", cvTemplateSchema);

export {CVTemplate};