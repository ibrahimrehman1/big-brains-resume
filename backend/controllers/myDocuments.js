const User = require("../models/User");
const {Logger} = require("../utils/logger")

module.exports.myDocuments = async (req, res) => {
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
