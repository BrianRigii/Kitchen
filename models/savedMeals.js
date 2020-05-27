var mongoose = require("mongoose");

var savedMeal = new mongoose.Schema({
    mealId : String,
    mealName : String
})

module.exports = mongoose.model("savedMeals", savedMeal)
