const mongoose = require('mongoose');

const connectDB= async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connection established on ${mongoose.connection.host} `);

        
    } catch (error) {
        console.log("Error in connecting DB",error)
        
    }
};

module.exports=connectDB;