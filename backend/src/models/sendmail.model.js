import mongoose from "mongoose";

const sendMailSchema = new mongoose.Schema(
  {
    formNo: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export const sendMail = mongoose.model('SendMail', sendMailSchema);
