import { feedback } from "./controllers/feedback";
import { login } from "./controllers/login";
import { logout } from "./controllers/logout";
import { myDocuments } from "./controllers/myDocuments";
import { resumeForm } from "./controllers/resumeForm";
import { saveCV } from "./controllers/saveCV";
import { signup } from "./controllers/signup";
import { PORT, MONGODB_URI } from "./utils/config";
import { Logger } from "./utils/logger";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import { cvForm } from "./controllers/cvForm";
import * as dotenv from "dotenv";
import config from "./config";

dotenv.config();


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

app.listen(config.PORT, () => Logger.logInfo(`Server running on PORT: ${PORT}`));
