var express = require("express");
var router = express.Router();
var fetch = require("node-fetch")
var User = require("../models/user")

router.get("/",(req,res)=>{
    res.render("login")
})

router.get("/index",(req,res)=>{
    fetch("https://www.themealdb.com/api/json/v1/1/random.php")
    .then(data => data.json())
    .then(recipe => {
        res.render("index",{ Recipe : recipe})
        

    })
    .catch(error=>console.log("error occured :" +error))
     
})
router.get("/index/cartegories",(req,res)=>{
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(data => data.json())
    .then(categories => {
        res.render("cartegories",{foundCart:categories})
    })
    
})




router.get("/index/find/:cartegory",(req,res)=>{
    var cartegory = req.params.cartegory
    console.log(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cartegory}`)
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${cartegory}`)
    .then(data => data.json())
    .then(menu =>{
        res.render("menulist", {Menu :menu, cartegory:cartegory})
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


router.get("/index/user",(req,res)=>{
    currentUser =req.user
    User.findById(currentUser._id).populate("savedMeal").exec((err,savedMeals)=>{
        if(err){
            console.log(`error occured ${err}`)
        }
        else{
            res.render("userpage",{meals:savedMeals})
            
        }
    })
})



module.exports = router