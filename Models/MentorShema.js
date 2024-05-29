import mongoose from "mongoose";


const MentorSchema = mongoose.Schema({
    Mentor_name: String,
    
})

const Mentor = mongoose.model("monters",MentorSchema)


export default Mentor;



