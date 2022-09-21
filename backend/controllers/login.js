const JWT = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcrypt");

const createToken = (id) => {
  return JWT.sign({ id }, "big brains", { expiresIn: 3600 });
};

module.exports.login = async (req, res) => {
  const { emailAddress, password } = req.body;
  console.log(emailAddress, password);
  try {
    let user = await User.findOne({ emailAddress }).exec();
    console.log(user);
    if (user) {
      let passwordStatus = await bcrypt.compare(password, user["password"]);
      console.log(passwordStatus);
      if (passwordStatus) {
        const userID = user["_id"];

        let token = createToken(userID);

        res.cookie("auth-cookie", token, { httpOnly: true, maxAge: 3600 });
        res.json({
          status: "Success!",
          userID,
          token,
          userName: user["userName"],
        });
      } else {
        res.json({ error: "Email/Password does not exist!" });
      }
    } else {
      res.json({ error: "Email/Password does not exist!" });
    }
  } catch (err) {
    res.json({ error: err.message });
  }
};
