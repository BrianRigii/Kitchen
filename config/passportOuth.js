var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
var keys = require("./keys");
var User = require("../models/user")


passport.use(
  new GoogleStrategy({
    clientID: keys.google.clientID,
    clientSecret: keys.google.clientSecret,
    callbackURL: "http://localhost:5050/oauth/callback"
  },
  function (accessToken, refreshToken, profile, done) {
    User.findOne({googleID:profile.id})
    .then( (req,res)=>{
        console.log("user already exist")
    } 
    )
    .catch(
        new User({
            username : profile.displayName,
            googleID :profile.id
        }).save((err,user)=>{
            return done (err,user)
        })
        
        
    )
    
  }
));
