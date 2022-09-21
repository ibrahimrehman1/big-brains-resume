const { Schema, model } = require("mongoose");

const cvFormSchema = Schema({
  fullName: {
    type: String,
    trim: true,
    required: true,
  },
  designation: {
    type: String,
    trim: true,
  },
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
  languages: String,
  interests: String,
  certifications: String,
  workExperience: String,
});

module.exports.CvForm = model("cvforms", cvFormSchema);
