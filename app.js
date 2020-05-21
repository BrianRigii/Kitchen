var express = require("express");
var app = express();
var ejs = require("ejs");
var navRoutes = require("./routes/nav");
var authRoutes = require("./routes/auth");
var port = 5050;
var mongoose = require("mongoose");
var User = require("./models/user");
var passport = require("passport");
var LocalStrategy = require("passport-local");
var bodyParser = require("body-parser");

mongoose.connect("mongodb://localhost/kitchen", (err, db) => {
  if (err) {
    console.log(`error connecting to db ${err}`);
  } else {
    console.log("database succesfully connected");
  }
});

// passport config
app.use(
  require("express-session")({
    secret: "Wierdddddddasmskmkmkmkmkmkmkmk",
    saveUninitialized: false,
    resave: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());



//set
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

//routes
app.use(navRoutes);
app.use(authRoutes);

// app.use(function(req,res,next){
//   res.locals.currentUser = req.user
//   next()
// })

app.listen(port, () => {
  console.log(`server statred on port :${port}...`);
});
