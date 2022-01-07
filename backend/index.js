const express = require("express");
const cors = require("cors");
const {signup, login} = require("./controllers/controller");


let app = express();


// Constants
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(cors());

// Login/Signup Routes
app.post("/signup", signup);
app.post("/login", login);


// app.get("/myresume", (req, res)=>{
//     res.json({'status': "success"});
// })


app.listen(PORT, ()=>console.log(`Server running on PORT: ${PORT}`));
