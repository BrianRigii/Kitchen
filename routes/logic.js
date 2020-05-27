var express = require("express");
var router = express.Router();
var savedMeals = require("../models/savedMeals");
var User = require("../models/user");

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

module.exports = router;
