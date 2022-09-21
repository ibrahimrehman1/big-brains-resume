module.exports.logout = (req, res) => {
  console.log("Logged out!");
  res.cookie("auth-cookie", "", { httpOnly: true, maxAge: 1 });
  res.json({ status: "Successfully Cleared Cookie!" });
};
