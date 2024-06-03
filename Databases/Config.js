import  mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();


const MONGODB_URL = process.env.MONGODB_URL


const connectDB =  async(req,res)=>{

    try {
        console.log(MONGODB_URL);
        const connection = await mongoose.connect(MONGODB_URL);
        console.log("mongoose connected successfully");
        return connection;
    } catch (error) {
        console.log(error);
       // res.status(500).json({message:"mongoose to coonection error"})
    }

}



export default connectDB;