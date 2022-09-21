const { Schema, model } = require("mongoose");

const resumeFormSchema = Schema({
  fullName: {
    type: String,
    trim: true,
    required: true,
  },
  designation: {
    type: String,
    trim: true,
  },
  summary: {
    type: String,
    trim: true,
    minLength: [50, "Summary is too Short!"],
  },
  skills: String,
  education: String,
  projects: String,
  contactDetails: String,
  languages: String,
  interests: String,
  certifications: String,
});

module.exports.ResumeForm = model("resumeforms", resumeFormSchema);
