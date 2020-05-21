var express = require("express");
var router = express.Router();
var fetch = require("node-fetch")
var  mealdb = {} ;

router.get("/",(req,res)=>{
    res.render("login")
})

router.get("/index",(req,res)=>{
    fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    .then(data => data.json())
    .then(recipe => {
        res.render("index",{currentUser : req.user , Recipe : recipe})

    })
    .catch(error=>console.log("error"))
    
   
    
    
})

















module.exports = router