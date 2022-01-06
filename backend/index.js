const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://ibrahimrehman1:nVD314ZqreevPgf7@cluster0.ombuy.mongodb.net/database0?retryWrites=true&w=majority").then((_)=>console.log("Connected..."))

let app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

// app.post("/signup", (req, res)=>{
//     console.log(req.body)
    
//     res.json({'status': "success"});
// });


// app.post("/login", (req, res)=>{
//     res.json({'status': "success"});
// });


// app.get("/myresume", (req, res)=>{
//     res.json({'status': "success"});
// })


app.listen(PORT, ()=>console.log(`Server running on PORT: ${PORT}`));
