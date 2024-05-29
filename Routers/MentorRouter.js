import express from 'express';
import { createMentor, getMentorDetails,getMentorDetailsById,editeMentorDetails } from '../Controllers/MentorControllers.js';


const router = express.Router();

router.post("/monte",createMentor)
 router.get("/mentor",getMentorDetails)
 router.get("/mentor/:id",getMentorDetailsById)
 //router.put("/mentor/:id",editeMentorDetails)



export default router;