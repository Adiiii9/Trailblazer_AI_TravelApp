
const express=require("express");
const bodyParser=require("body-parser");
const mongoose = require('mongoose');
const bcrypt=require("bcrypt");
const morgan=require("morgan");
const dotenv=require("dotenv");
const cors=require("cors");
const connectDB = require("./config/db");

//dot env
dotenv.config()

//MongoDB
connectDB();

//
const app=express()

//middleware

app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//PORT

const PORT=process.env.PORT || 3000

app.listen(PORT,()=>console.log(`Server started on ${PORT}`))


//routes

// app.get("",(req,res)=>{
//     res.status(200).json({
//         success:true,
//         message:"Welcome to travel app"
//     });
// });

app.use("/api/v1/auth", require("./routes/userRoutes"))
app.use("/api/v1/post", require("./routes/postRoutes"))





