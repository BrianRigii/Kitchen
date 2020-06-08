var mongoose = require("mongoose")
var passportLocalMongoose = require("passport-local-mongoose");

var userSchema = new mongoose.Schema(
    {
        username : String,
        email: String,
        password:String,
        googleID : String,
        savedMeal:[{
            type :mongoose.Schema.Types.ObjectId,
            ref: "savedMeals"
        }]
            
        
    }
)
userSchema.plugin(passportLocalMongoose)
userSchema.statics.findOneOrCreate = function findOneOrCreate(condition, callback) {
    const self = this
    self.findOne(condition, (err, result) => {
        return result ? callback(err, result) : self.create(condition, (err, result) => { return callback(err, result) })
    })
}


module.exports = mongoose.model("Users", userSchema)