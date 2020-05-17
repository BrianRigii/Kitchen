var express = require("express");
var router = express.Router();
var User = require("../models/user")
var getREC= require("../js/api")

router.get("/",(req,res)=>{
    res.render("login")
})

router.get("/index",(req,res)=>{
    getREC()
    res.render("index",{user :User})
})

















module.exports = router