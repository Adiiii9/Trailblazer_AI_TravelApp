const express = require('express');
const { createPostController, getPostController } = require('../controllers/postController');
const { loginController, requiresignIn } = require('../controllers/userController');
// const { registerController, loginController } = require('../controllers/userController');


// Create router object

const router=express.Router();

// routes

router.post("/create-post",requiresignIn,createPostController)

router.get("/get-post",getPostController)




module.exports=router;
