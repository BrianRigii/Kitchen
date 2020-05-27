var express = require("express");
var router = express.Router();
var fetch = require("node-fetch")
var  mealdb = {} ;

router.get("/",(req,res)=>{
    res.render("login")
})

router.get("/index",(req,res)=>{
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(data => data.json())
    .then(recipe => {
        res.render("index",{currentUser : req.user , Recipe : recipe})
        console.log(req.user)

    })
    .catch(error=>console.log("error occured :" +error))
    
   
    
    
})

router.get("/index/:cartegory",(req,res)=>{
    var cartegory = req.params.cartegory
    console.log(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cartegory}`)
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cartegory}`)
    .then(data => data.json())
    .then(menu =>{
        res.render("menulist", {Menu :menu})
    })
})

router.get("/index/cook/:id",(req,res)=>{
    var mealId = req.params.id
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
        .then(data => data.json())
        .then(mealdata =>{
            res.render("mealinfo",{mealdata : mealdata})
        })
})

















module.exports = router