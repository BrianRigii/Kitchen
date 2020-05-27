var mongoose = require("mongoose")
var passportLocalMongoose = require("passport-local-mongoose");

var userSchema = new mongoose.Schema(
    {
        username : String,
        email: String,
        password:String,
        savedMeal:[{
            type :mongoose.Schema.Types.ObjectId,
            ref: "savedMeals"
        }]
            
        
    }
)
userSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model("Users", userSchema)