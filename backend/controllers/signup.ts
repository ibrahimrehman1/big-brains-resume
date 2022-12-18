import { User } from "../models/User";
import { Logger } from "../utils/logger";
import JWT from "jsonwebtoken";


const createToken = (id) => {
  return JWT.sign({ id }, "big brains", { expiresIn: 3600 });
};

module.exports.signup = async (req, res) => {
  const { firstName, lastName, userName, emailAddress, password } = req.body;
  try {
    let user = await User.create({
      firstName,
      lastName,
      userName,
      emailAddress,
      password,
    });

    Logger.logInfo(user);

    const userID = user["_id"];

    let token = createToken(userID);

    res.cookie("auth-cookie", token, { httpOnly: true, maxAge: 3600000 });

    // Cookie not saved in browser when sent from localhost

    Logger.logInfo("Cookie Set");
    res.json({ status: "Success!", userID, token, userName });
  } catch (err) {
    res.json({ error: err.message.split(":")[2].trim() });
  }
};
