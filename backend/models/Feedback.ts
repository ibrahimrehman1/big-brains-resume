import {Schema, model} from "mongoose";

const feedbackSchema = new Schema({
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
export const Feedback = model("feedbacks", feedbackSchema);
