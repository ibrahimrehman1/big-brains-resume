const Feedback = require("../models/Feedback");

module.exports.feedback = async (req, res) => {
  const { emojis, comments, userID } = req.body;
  console.log(emojis, comments);
  try {
    let feedback = await Feedback.create({ emojis, comments });
    console.log(feedback);
    User.findById(userID)
      .exec()
      .then((user) => {
        let userFeedbackIDs = user.userFeedback.concat([feedback._id]);
        user.userFeedback = userFeedbackIDs;
        user.save();
      });
    res.json({ Status: "Feedback Saved!" });
  } catch (err) {
    res.json({ error: err.message });
  }
};
