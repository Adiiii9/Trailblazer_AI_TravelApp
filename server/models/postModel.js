

const mongoose = require('mongoose');


const postSchema = new mongoose.Schema({
   // name:{
   //    type:String,
   //    required:true,
   //    trim:true,
   // },
   title:{
    type:String,
    required:[true,"Add a title"]
   },
   content:{
    type:String,
    required:[true,"Add a description"]
   },
   postedBy:{
    type:mongoose.Schema.ObjectId,
    ref:"User",
    required:true

   },

   // role:{
   //    type:String,
   //    default:"user",
   // }

    
},{timestamps:true}
);

module.exports=mongoose.model("Post",postSchema);
