import express from "express";
import getAllStudents from "../controllers/students.js";
const router = express.Router();

router.route("/").get(getAllStudents);

export default router;
