const express = require('express');
const jwt =require("jsonwebtoken");
const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const { hashPassword, comparePassword } = require('../helpers/authEncryptDecrypt')
var { expressjwt: JWT } = require("express-jwt");


const requiresignIn = JWT(
    { secret: process.env.JWT_SECRET, algorithms: ["HS256"] }
    );



// Register
const registerController = async(req,res) =>{
    try {
        const {email,password}=req.body;

        if(!email){
            return res.status(400).send({
                success:false,
                message:"Email required"
            })
        }

        if(!password || password.length<6){
            return res.status(400).send({
                success:false,
                message:"Password required"
            })
        }

        // For existing user

        const existingUser= await userModel.findOne({email:email});

        if (existingUser){
            return res.status(400).send({
                success:false,
                message:"Email already exists"
            })
        }

        const hashed=await hashPassword(password);

        const user=await userModel({email,password:hashed}).save()
        console.log(user)


        return res.status(201).send({
            success:true,
            message:"Registered successfully"
        })
        
 
    } 
    catch (error) {
        console.log("Error thrown :: registryController() in userController.js :: ",error)
        return res.status(500).send({
            success:false,
            message:"Error occured in registerController"
        })
        
    }

};


// Login
const loginController = async(req,res) =>{
    try {
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).send({
                success:false,
                message:"Email and password required"
            })
        }

        const user = await userModel.findOne({email:email})
        if(!user){
            return res.status(500).send({
                success:false,
                message:"User not found"
            })
        }

        if(user){
            const match = await comparePassword(password,user.password)
            if(!match){
                return res.status(500).send({
                    success:false,
                    message:"Wrong Password try again"
                })

            }
            if (match){

                // JWT 
                const token = await jwt.sign({
                    _id:user._id,                 // db ke andar each user has unique _id
                },
                process.env.JWT_SECRET,
                {
                    expiresIn:"9d"              // Token expires in 7days
                });
                
                user.password=undefined  // Successfully matched password and now we are hiding it 
                return res.status(201).send({
                    success:true,
                    message:"Logged In Successfully",
                    token,
                    user,
                })
            }
        }


        
    } catch (error) {
        console.log("Error thrown :: loginController() in userController.js :: ",error)
        return res.status(500).send({
            success:false,
            message:"Error occured in loginContoller"
        })
        
    }
};

module.exports={registerController, loginController, requiresignIn}