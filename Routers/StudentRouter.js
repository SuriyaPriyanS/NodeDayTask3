import express from 'express';
import { createStudent, getStudentDetails, getStudentDetailsById, } from '../Controllers/StudentControllers.js';


const router = express.Router();

router.post("/creacte",createStudent)
router.get("/student",getStudentDetails)
router.get("/student/:id",getStudentDetailsById)
//router.put("/student/:id", updateStudentDetailsById);



export default router;