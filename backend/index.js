const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const { cvForm } = require("./controllers/cvForm");
const { feedback } = require("./controllers/feedback");
const { login } = require("./controllers/login");
const { logout } = require("./controllers/logout");
const { myDocuments } = require("./controllers/myDocuments");
const { resumeForm } = require("./controllers/resumeForm");
const { saveCV } = require("./controllers/saveCV");
const { signup } = require("./controllers/signup");
const { PORT, MONGODB_URI } = require("./utils/config");
const {Logger} = require("./utils/logger");

// Express App
let app = express();

// MongoDB Atlas
mongoose.connect(MONGODB_URI).then((_) => console.log("Connected..."));

// Middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

// Login/Signup Routes
app.post("/signup", signup);
app.post("/login", login);

// Resume/CV Form Route
app.post("/resumeform", resumeForm);
app.post("/cvform", cvForm);

// Feedback Route
app.post("/feedback", feedback);

// Resume/CV Template Route
app.post("/savecv", saveCV);
app.get("/logout", logout);

// My Documents Route
app.post("/mydocuments", myDocuments);

app.listen(PORT, () => Logger.logInfo(`Server running on PORT: ${PORT}`));
