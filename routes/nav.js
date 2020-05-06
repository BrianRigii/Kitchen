var express = require("express");
var router = express.Router();
var User = require("../models/user")

router.get("/",(req,res)=>{
    res.render("login")
})

router.get("/index",(req,res)=>{
    res.render("index",{user :User})
})

















module.exports = router