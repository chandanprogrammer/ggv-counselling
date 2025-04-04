import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import nodemailer from "nodemailer";

const app = express();
// app.use(cors());
app.use(
  cors({
    origin: [
      process.env.CORS_ORIGIN,
      "http://localhost:5174",
      "http://localhost:8000",
    ],
    credentials: true,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

/* -------- routes import -------- */
import studentsRoutes from "./routes/students.js";
import sendMailRoutes from "./routes/sendmails.js";

/* -------- routes declaration -------- */
app.use("/api/v1/students", studentsRoutes);
app.use("/api/v1/sendmails", sendMailRoutes);

/* ------------- Start: code for send mail ------------- */
app.post("/mail-sender", async (req, res) => {
  const { to, subject, html } = req.body;

  try {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.USER_PASS,
      },
    });

    let info = await transporter.sendMail({
      from: process.env.USER_EMAIL,
      to,
      subject,
      html,
    });

    res.status(200).json({ message: "Successfully Email send", info });
  } catch (error) {
    res.status(500).json({ message: "Failed to send email ", error });
  }
});
/* ------------- End: code for send mail ------------- */

export { app };

// http://localhost:8000/api/v1/students
// http://localhost:8000/mail-sender
