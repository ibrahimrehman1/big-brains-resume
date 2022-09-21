const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { signup, login, logout, resumeForm, cvForm, feedback, saveCV, myDocuments } = require("./controllers/controller");
const JWT = require("jsonwebtoken");
const mongoose = require("mongoose");


// Environment Variables
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI;

// Express App
let app = express();

// MongoDB Atlas
mongoose.connect(MONGODB_URI).then((_) => console.log("Connected..."));

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



// Middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Login/Signup Routes
app.post("/signup", signup);
app.post("/login", login);


// Resume/CV Form Route
app.post("/resumeform", resumeForm)
app.post("/cvform", cvForm)

// Feedback Route
app.post("/feedback", feedback)


// Resume/CV Template Route
app.post("/savecv", saveCV)
app.get("/logout", logout)

// My Documents Route
app.post("/mydocuments", myDocuments)

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
