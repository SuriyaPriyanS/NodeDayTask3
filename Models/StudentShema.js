import mongoose from "mongoose";


const StudentSchema = mongoose.Schema({
    Student_Name: String,
    StudentLast_name: String,
    Student_Email: String,
    Student_Desgination: String,
})

const Student = mongoose.model("Student",StudentSchema)


export default Student;


