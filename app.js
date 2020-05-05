var express = require("express");
var app = express();
var ejs = require ("ejs");
var navRoutes = require("./routes/nav");
var port =8080


//set 
app.set("view engine", "ejs");
app.use(express.static("public"));

//routes
app.use(navRoutes);


app.listen(port,()=>{
    console.log(`server statred on port :${port}...`)
})