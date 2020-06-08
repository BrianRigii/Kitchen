var passport = require("passport");
var GoogleStrategy = require("passport-google-oauth").OAuth2Strategy;
var keys = require("./keys");
var User = require("../models/user");

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.google.clientID,
      clientSecret: keys.google.clientSecret,
      callbackURL: "http://localhost:5050/oauth/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      User.findOne({ googleID: profile.id }, (err, user) => {
        if (!user) {
          var user = new User({
            username: profile.displayName,
            googleID: profile.id,
            email: profile.email,
          });
          user.save((err, user) => {
            if (err) {
              console.log(err);
            }
            return done(err, user);
          });
        } else {
          console.log(profile)
          return done(err, user);
        }
      });
    }
  )
);
