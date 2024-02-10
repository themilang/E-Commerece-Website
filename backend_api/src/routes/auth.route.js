const express=require('express')
const authController =require('../controllers/auth.controllers')

const router= express.Router()

router.post('/signip',authController.register);
router.post("/login",authController.login)

module.exports={router}
