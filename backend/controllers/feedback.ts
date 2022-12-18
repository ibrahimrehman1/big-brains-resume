import { Feedback } from "../models/Feedback";
import { Logger } from "../utils/logger";
import { User } from "../models/User";

export const feedback = async (req, res) => {
  const { emojis, comments, userID } = req.body;
  Logger.logInfo(emojis, comments);
  try {
    let feedback = await Feedback.create({ emojis, comments });
    Logger.logInfo(feedback);
    User.findById(userID)
      .exec()
      .then((user) => {
        let userFeedbackIDs = user.userFeedback.concat([{type: {prototype: {_id: feedback._id.toString()}}}]);
        user.userFeedback = userFeedbackIDs;
        user.save();
      });
    res.json({ Status: "Feedback Saved!" });
  } catch (err) {
    res.json({ error: err.message });
  }
};
