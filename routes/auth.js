var express = require("express");
var router = express.Router();
var User = require("../models/user");
var passport = require("passport");

router.post("/signUP", (req, res) => {
  var userInfo = new User({
    username: req.body.username,
    email: req.body.email,
  });
  User.register(userInfo, req.body.password, (err, user) => {
    if (err) {
      console.log(`error: creating user acc ${err}`);
      res.redirect("/");
    }
    {
      console.log("authenticating");
      passport.authenticate("local")(req, res, function () {
        res.redirect("/index");
      });
    }
  });
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/index",
    failureRedirect: "/",
  })
);

router.get("/logout", (req, res) => {
  req.logOut();
  console.log("logging out");
  res.redirect("/");
});

router.get("/oauth", passport.authenticate("google", { scope: ["profile"] }));


router.get('/oauth/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/index');
  });

module.exports = router;
