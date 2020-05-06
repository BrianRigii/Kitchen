var express = require('express')
var router = express.Router()
var User = require("../models/user")
var passport = require("passport")

router.post("/signUP",(req,res)=>{
    var userInfo = new User({username:req.body.username, email:req.body.email });
    User.register( userInfo, req.body.password ,(err,user)=>{
        if(err){
            console.log(`error: creating user acc ${err}`)
        }
        {
           passport.authenticate("local"),(req,res,function(){
               
           })
           res.redirect("/index")
           

           
        }

    })
})

module.exports =router