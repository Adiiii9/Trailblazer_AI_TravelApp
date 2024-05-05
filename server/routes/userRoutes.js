const express = require('express');
const { registerController, loginController } = require('../controllers/userController');


// Create router object

const router=express.Router();

// routes

// Register
router.post("/register",registerController);

// Login
router.post("/login",loginController);


module.exports=router;
