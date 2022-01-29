const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { signup, login, logout, resumeForm, cvForm, feedback } = require("./controllers/controller");
const JWT = require("jsonwebtoken");

let app = express();

// Auth Middleware
const requireAuth = (req, res, next) => {
  const token = req.cookies["auth-cookie"];
  if (token) {
    JWT.verify(token, "big brains", (err, decodedToken) => {
      if (err) {
        res.json({ status: "Invalid JWT Attached!" });
      }
      next();
    });
  }else{
    res.json({ status: "No JWT Attached!" });

  }
};

// Constants
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Login/Signup Routes
app.post("/signup", signup);
app.post("/login", login);


// Resume Form Route
app.post("/resumeform", resumeForm)
app.post("/cvform", cvForm)
app.post("/feedback", feedback)


app.get("/logout", logout)

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
