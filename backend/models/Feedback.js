const { Schema, model } = require("mongoose");

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

module.exports.Feedback = model("feedbacks", feedbackSchema);
