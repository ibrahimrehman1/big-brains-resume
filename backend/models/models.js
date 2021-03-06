const { Schema, model, Types } = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

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
  skills: {
    type: String,
  },
  education: {
    type: String,
  },
  projects: {
    type: String,
  },
  contactDetails: {
    type: String,
  },
  languages: {
    type: String,
  },
  interests: {
    type: String,
  },
  certifications: {
    type: String,
  },
});

const resumeTemplateSchema = Schema({
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
  skills: {
    type: Map,
    default: {},
  },
  education: {
    type: Array,
    default: [],
  },
  projects: {
    type: Array,
    default: [],
  },
  contactDetails: {
    type: Map,
    default: {},
  },
  languages: {
    type: Array,
    default: [],
  },
  interests: {
    type: Array,
    default: [],
  },
  certifications: {
    type: Array,
    default: [],
  },
  templateStyle: {
    type: String,
  }
});

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
  detailedEducation: {
    type: String,
  },
  projects: {
    type: String,
  },
  contactDetails: {
    type: String,
  },
  languages: {
    type: String,
  },
  interests: {
    type: String,
  },
  certifications: {
    type: String,
  },
  workExperience: {
    type: String,
  },
});

const cvTemplateSchema = Schema({
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
  detailedEducation: {
    type: String,
  },
  projects: {
    type: String,
  },
  contactDetails: {
    type: String,
  },
  // languages: {
  //   type: String,
  // },
  interests: {
    type: String,
  },
  certifications: {
    type: String,
  },
  workExperience: {
    type: String,
  },
  imageID: {
    type: String,
  }
});

const feedbackSchema = Schema({
  emojis: {
    type: String,
    required: true,
  },
  comments: {
    type: String,
    required: true,
    minLength: [50, "Feedback is too Short!"],
  },
});

const userSchema = Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  userName: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    minLength: [5, "Username too Short!"],
  },
  emailAddress: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    validate: [validator.isEmail, "Email format not correct!"],
  },
  password: {
    type: String,
    required: true,
    trim: true,
    validate: [validator.isStrongPassword, "Password not strong Enough!"],
    // { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1}
  },
  userFormCV: {
    type: [{ type:  Types.ObjectId, ref: "cvforms"}],
  },
  userFormResume: {
    type: [{type:  Types.ObjectId, ref: "resumeforms"}],
  },
  userTemplateCV: {
    type: [{ type:  Types.ObjectId, ref: "cvtemplates"}],
  },
  userTemplateResume: {
    type: [{type:  Types.ObjectId, ref: "resumetemplates"}],
  },
  userFeedback: {
    type: [{type: Types.ObjectId, ref: "feedbacks"}],
  },
});

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

module.exports.User = model("user", userSchema);
module.exports.ResumeForm = model("resumeforms", resumeFormSchema);
module.exports.CvForm = model("cvforms", cvFormSchema);
module.exports.CVTemplate = model("cvtemplates", cvTemplateSchema);
module.exports.Feedback = model("feedbacks", feedbackSchema);
module.exports.ResumeTemplate = model("resumetemplates", resumeTemplateSchema);
