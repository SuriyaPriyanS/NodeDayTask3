import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv';
import connectDB from './Databases/Config.js';
import StudentRouter from './Routers/StudentRouter.js';
import MentorRouter from './Routers/MentorRouter.js';



dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

const port = 4000 || process.env.PORT;


app.use("/api/mentor",MentorRouter)

app.use("/api",StudentRouter)



app.get("/",(req,res)=>{
    res.status(200).send("welcome to app")
});




app.listen(port,()=>{
    console.log("app running",port);
});