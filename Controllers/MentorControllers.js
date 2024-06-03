import Mentor from "../Models/MentorShema.js";


export  const createMentor = async (req,res)=>{
    try {
        const mentor = new Mentor(req.body);
        await mentor.save();
        res.status(200).json({message: "data mentor successfully",data:mentor})
    } catch (error) {
        res.status(500).json({message: "internal server Error in create method"})
    }
}

export const getMentorDetails = async (req, res) => {
    try {
        // Assuming Mentor.findOne() returns mentor details from the database
        const mentor = await Mentor.findOne();
        if (!mentor) {
            return res.status(404).json({ message: "Mentor not found" });
        }
        res.status(200).json({ message: "Mentor Fetched Data Successfully", data: mentor });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error in getMentorDetails method" });
    }
};


// export const getMentorById = async (req, res) => {
//     try {
//         const mentorId = req.params.id;
//         // Assuming Student.findById() returns student details from the database
//         const mentor = await Mentor.findById(mentorId).populate('mentor');
//         if (!mentor) {
//             return res.status(404).send("Student not found");
//         }
//         res.status(200).json({ message: "Student Fetched Data Successfully", data: mentor });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: "Internal Server Error in getById method" });
//     }
// };