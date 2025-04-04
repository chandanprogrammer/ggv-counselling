import { Student } from "../models/student.model.js";

const getAllStudents = async (req, res) => {
  const studentsData = await Student.find(req.query);
  // console.log(req.query);
  
  res.status(200).json({studentsData, nbHits: studentsData.length});
  // res.send("list of student");
}; 

export default getAllStudents;

// http://localhost:8000/api/v1/students?gender=male