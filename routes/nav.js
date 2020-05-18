var express = require("express");
var router = express.Router();
var getREC= require("../js/api")

router.get("/",(req,res)=>{
    res.render("login")
})

router.get("/index",(req,res)=>{
    // getREC()
    res.render("index",{currentUser :req.user})
})

















module.exports = router