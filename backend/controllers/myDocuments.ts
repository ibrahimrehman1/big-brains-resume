import { Logger } from "../utils/logger";
import { User } from "../models/User";

export const myDocuments = async (req, res) => {
  const { userID } = req.body;
  let user = await User.findById(userID)
    .populate("userFormCV")
    .populate("userFormResume")
    .populate("userTemplateResume")
    .populate("userTemplateCV")
    .exec();
  Logger.logInfo(user);

  res.json({ status: "User Data Fetched!", userData: user });
};
