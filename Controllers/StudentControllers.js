import Student from "../Models/StudentShema.js";


export const createStudent = async(req,res)=>{
    try {
        const newStudent = new Student(req.body)
        await newStudent.save()
        res.status(200).json({message: "Student Added Successfully",data:[newStudent]})
    } catch (error) {
        console.log(error);
        res.status(500).json({message: "internal server Error in create method"})
    }

};

export const getStudentDetails = async (req, res) => {
    try {
        // Assuming Student.findOne() returns student details from the database
        const student = await Student.findOne();
        if (!student) {
            return res.status(404).json({ message: "Student not found" });
        }
        res.status(200).json({ message: "Student Fetched Data Successfully", data: student });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error in getStudentDetails method" });
    }
};

export const getStudentDetailsById = async (req, res) => {
    try {
        const studentId = req.params.id;
        // Assuming Student.findById() returns student details from the database
        const student = await Student.findById(studentId)
        if (!student) {
            return res.status(404).send("Student not found");
        }
        res.status(200).json({ message: "Student Fetched Data Successfully", data: student });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error in getById method" });
    }
};
// export const getStudentDetailsById = async (req, res) => {
//     try {
//         const studentId = req.params.id;
//         // Assuming Student.findById() returns student details from the database
//         const student = await Student.findById(studentId).populate('user');
//         if (!student) {
//             return res.status(404).send("Student not found");
//         }
//         res.status(200).json({ message: "Student Fetched Data Successfully", data: student });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: "Internal Server Error in getById method" });
//     }
// };

// export const updateStudentDetailsById = async (req, res) => {
//     try {
//         const studentId = req.params.id;
//         // Assuming Student.findByIdAndUpdate() updates the student details in the database
//         const updatedStudent = await Student.findByIdAndUpdate(studentId, req.body, { new: true });
//         if (!updatedStudent) {
//             return res.status(404).send("Student not found");
//         }
//         res.status(200).json({ message: "Student Updated Successfully", data: updatedStudent });
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: "Internal Server Error in updateById method" });
//     }
// };
