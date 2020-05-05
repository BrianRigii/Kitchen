var express = require("express");
var app = express();
var ejs = require ("ejs");
var navRoutes = require("./routes/nav");
var port =8080


//set ejs
app.set("view engine", "ejs");

//routes
app.use(navRoutes);


app.listen(port,()=>{
    console.log(`server statred on port :${port}...`)
})