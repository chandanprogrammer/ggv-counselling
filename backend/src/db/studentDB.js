import { Student } from "../models/student.model.js";
import connectDB from "./connectDB.js";
import data from "./data.json" with { type: "json" };

const studentDB = async () => {
  // console.log(data);
  
  try {
    await connectDB();
    
    await Student.create(data);

    console.log("success");
  } catch (error) {
    console.log(error);
  }
};

export default studentDB;
