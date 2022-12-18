import {Schema, model} from "mongoose";

const resumeFormSchema = new Schema({
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

export const ResumeForm = model("resumeforms", resumeFormSchema);
