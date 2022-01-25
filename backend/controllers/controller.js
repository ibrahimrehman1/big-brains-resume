const mongoose = require("mongoose");
const {User, ResumeForm} = require("../models/models");
const bcrypt = require("bcrypt");
const JWT = require("jsonwebtoken");

mongoose
  .connect(
    "mongodb+srv://ibrahimrehman1:nVD314ZqreevPgf7@cluster0.ombuy.mongodb.net/database0?retryWrites=true&w=majority"
  )
  .then((_) => console.log("Connected..."));

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

    console.log(user);

    const userID = user["_id"];

    let token = createToken(userID);

    res.cookie("auth-cookie", token, { httpOnly: true, maxAge: 3600000,  });

    // Cookie not saved in browser when sent from localhost 

    
    console.log("Cookie Set")
    res.json({ status: "Success!", userid: userID, token, userName });
  } catch (err) {
    res.json({ error: err.message.split(":")[2].trim() });
  }
};

module.exports.login = async (req, res) => {
  const { emailAddress, password } = req.body;
  try {
    let user = await User.findOne({ emailAddress }).exec();
    if (user){
      let passwordStatus = await bcrypt.compare(password, user["password"]);
      if (passwordStatus) {
        const userID = user["_id"];
  
        let token = createToken(userID);
  
        res.cookie("auth-cookie", token, { httpOnly: true, maxAge: 3600 });
        res.json({
          status: "Success!",
          userid: userID,
          token,
          userName: user["userName"],
        });
      }
    }else{
      res.json({ error: "Email/Password does not exist!" });
    }
  } catch (err) {
    res.json({ error: err.message });
  }
};


module.exports.logout = (req, res) => {
  console.log("Logged out!")
  res.cookie("auth-cookie", "", {httpOnly: true, maxAge: 1});
  res.json({"status": "Successfully Cleared Cookie!"})
}


module.exports.resumeForm = async (req, res) =>{
  console.log(req.body);
  const {fullName, designation, summary, skills, education, projects, contactDetails, languages, interests, certifications} = req.body;
  let resumeform = await ResumeForm.create({fullName, designation, summary, skills, education, projects, contactDetails, languages, interests, certifications})
  console.log(resumeform);
  
  res.json({"Status":"Resume Form Saved!"});
}