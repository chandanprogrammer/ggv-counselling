import express from "express";
import getAllSendedMail from "../controllers/sendmails.js";
const router = express.Router();

router.route("/").get(getAllSendedMail);

export default router;
