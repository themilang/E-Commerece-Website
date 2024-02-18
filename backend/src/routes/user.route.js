const express=require('express')
const router= express.Router();
const userControllers =require("../controller/user.controller.js");

router.get("/profile",userControllers.getUserProfile);
router.get("/",userControllers.getAllUser);

module.exports=router