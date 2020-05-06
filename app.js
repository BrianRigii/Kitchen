var express = require("express");
var app = express();
var ejs = require ("ejs");
var navRoutes = require("./routes/nav");
var port =5050
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/kitchen",(err,db)=>{
    if(err){
        console.log(`error connecting to db ${err}`)
    }
    else{
        console.log("database succesfully connected")
    }
})


//set 
app.set("view engine", "ejs");
app.use(express.static("public"));

//routes
app.use(navRoutes);


app.listen(port,()=>{
    console.log(`server statred on port :${port}...`)
})