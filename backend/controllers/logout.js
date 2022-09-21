const {Logger} = require("../utils/logger")


module.exports.logout = (req, res) => {
  Logger.logInfo("Logged out!");
  res.cookie("auth-cookie", "", { httpOnly: true, maxAge: 1 });
  res.json({ status: "Successfully Cleared Cookie!" });
};
