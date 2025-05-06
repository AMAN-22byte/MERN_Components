const express = require("express");
const app = express();
app.get("/",(req,res)=>{
    res.send("Hello Aman");
});
app.post("/register",(req,res)=>{
    const{firstname,lastname,email,password}=req.body;
    if(!(firstname && lastname && email && password)){
       return res.status(400).send("All input is required");
    }
    
});


app.listen(5000,()=>{
    console.log("Server running on port 5000");
})