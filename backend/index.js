const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


let app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());


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
