import { sendMail } from "../models/sendmail.model.js"; 

const getAllSendedMail = async (req, res) => {
  const data = await sendMail.find({});
  res.status(200).json({data});
}; 

export default getAllSendedMail;