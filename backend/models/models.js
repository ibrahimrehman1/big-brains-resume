const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");
const validator = require("validator");

const resumeSchema = Schema({
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
    minLength: [50, 'Summary is too Short!']
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
});

const cvSchema = Schema({
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
    minLength: [50, 'About Me is too Short!']
  },
  skills: {
    type: Map,
    default: {},
  },
  detailedEducation: {
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
  workExperience: {
    type: Array,
    default: [],
  },
});

const feedbackSchema = Schema({
    emojis: {
        type: String,
        required: true
    },
    comments : {
        type: String,
        required: true,
        minLength: [50, 'Feedback is too Short!']
    },
    type: {
        type: String,
        required: true
    }
})

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
    minLength: [5, 'Username too Short!']
  },
  emailAddress: {
    type: String,
    required: true,
    trim: true,
    unique: true,
    validate: [validator.isEmail, "Email format not correct!"]
  },
  password: {
    type: String,
    required: true,
    trim: true,
    validate: [validator.isStrongPassword, "Password not strong Enough!"] 
    // { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1}
  },
  userCV: {
    type: [cvSchema],
    default: [],
  },
  userResume: {
    type: [resumeSchema],
    default: [],
  },
  userFeedback: {
    type: [feedbackSchema],
    default: [],
  },
});

userSchema.pre("save", async function (next){
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
})



module.exports = model("user", userSchema)