var express = require("express");
var router = express.Router();
var savedMeals = require("../models/savedMeals");
var User = require("../models/user");
var fetch =require("node-fetch")


router.get("/save/:id/:name/:user", (req, res) => {
  var Id = req.params.id;
  var name = req.params.name;
  var user = req.params.user;
  var saved = new savedMeals({
    mealId: Id,
    mealName: name,
  });

  savedMeals.create( saved,(err,savedInfo)=>{
      if(err){
          console.log("something went wrong saving the meal to the database")
      }
      else{
        User.findById(user,(err,user)=>{
          user.savedMeal.push(savedInfo)
          user.save()
          
        })
          
      }
  });



  res.send(`${Id} was found ${name} was saved`);
});

// search functionlity

router.post("/find",(req,res)=>{
  var search = req.body.search
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
  .then(data => data.json())
  .then(foundMeals =>{
    console.log(foundMeals.meals.length)
    res.render("foundmeals", {foundMeals:foundMeals})
  })
  
})

module.exports = router;
