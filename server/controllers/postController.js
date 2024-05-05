const express = require('express');
const jwt =require("jsonwebtoken");
const postModel = require('../models/postModel');


const createPostController= async(req,res)=>{

    try {

        const {title,content}=req.body
        if (!title || !content){
            console.log("Title and content not provided")
            return res.status(500).send({
                success:false,
                message:"Provide title and content"
            })

        }

        const post=await postModel({
            title,
            content,
            postedBy:req.auth._id
        }).save();
        
        res.status(201).send({
            success:true,
            message:"Successfull post",
            post
        })
        
        console.log(req)
        
    } catch (error) {
        console.log("Error thrown :: createPostController() in postController.js :: ",error)
        return res.status(500).send({
            success:false,
            message:"Error occured in createPostController"
        })
        
    }

};

const getPostController=async(req,res)=>{

    try {
        const posts=await postModel.find()
        .populate("postedBy","_id email")
        .sort({createdAt:-1})
        return res.status(200).send({
            success:true,
            message:"Got all posts successfully",
            posts
        });
        

        
    } catch (error) {
        console.log("Error thrown :: getPostController() in postController.js :: ",error)
        return res.status(500).send({
            success:false,
            message:"Error occured in getPostController"
        })
        
    }


}

module.exports={createPostController,getPostController}