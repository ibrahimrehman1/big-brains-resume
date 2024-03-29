import JWT from "jsonwebtoken";
import { User } from "../models/User";
import bcrypt from "bcrypt";
import { Logger } from "../utils/logger";

const createToken = (id) => {
  return JWT.sign({ id }, "big brains", { expiresIn: 3600 });
};

export const login = async (req, res) => {
  const { emailAddress, password } = req.body;
  Logger.logInfo(emailAddress, password);
  try {
    let user = await User.findOne({ emailAddress }).exec();
    Logger.logInfo(user);
    if (user) {
      let passwordStatus = await bcrypt.compare(password, user["password"]);
      Logger.logInfo(passwordStatus);
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
