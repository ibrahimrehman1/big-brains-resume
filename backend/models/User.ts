import {Schema, model, Types} from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";


const userSchema = new Schema({
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
    type: [{ type: Types.ObjectId, ref: "cvforms" }],
  },
  userFormResume: {
    type: [{ type: Types.ObjectId, ref: "resumeforms" }],
  },
  userTemplateCV: {
    type: [{ type: Types.ObjectId, ref: "cvtemplates" }],
  },
  userTemplateResume: {
    type: [{ type: Types.ObjectId, ref: "resumetemplates" }],
  },
  userFeedback: {
    type: [{ type: Types.ObjectId, ref: "feedbacks" }],
  },
});

userSchema.pre("save", async function (next) {
  const salt = await bcrypt.genSalt();
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

export const User = model("user", userSchema);
