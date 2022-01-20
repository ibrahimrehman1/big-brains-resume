const express = require("express");
const cors = require("cors");
<<<<<<< HEAD
const mongoose = require("mongoose");

=======
const cookieParser = require("cookie-parser");
const { signup, login } = require("./controllers/controller");
const JWT = require("jsonwebtoken");
>>>>>>> 259b9135aa589e7896e9fd2396a7b5a2841dbe6f

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
app.use(cookieParser("big brains"));

// Login/Signup Routes
app.post("/signup", signup);
app.post("/login", login);
// app.get("*", requireAuth);

<<<<<<< HEAD
mongoose.connect('mongodb://localhost/my_database').then((_)=>console.log("Database Connected!"));


app.post("/signup", (req, res)=>{
    console.log(req.body)
    
    res.json({'status': "success"});
});


// app.post("/login", (req, res)=>{
//     res.json({'status': "success"});
// });


// app.get("/myresume", (req, res)=>{
//     res.json({'status': "success"});
// })


app.listen(PORT, ()=>console.log(`Server running on PORT: ${PORT}`));
=======
// app.get("/myresume", (req, res)=>{
//     res.json({'status': "success"});
// })

app.listen(PORT, () => console.log(`Server running on PORT: ${PORT}`));
>>>>>>> 259b9135aa589e7896e9fd2396a7b5a2841dbe6f
