import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    regMode: {
      type: String,
      required: [true, "Registration mode is required"],
      default: "online",
    },
    formNo: {
      type: String,
      required: [true, "Form number is required"],
      unique: true,
    },
    formNoDoc: {
      type: String,
      required: [true, "Form number document is required"],
    },
    cuetApplicationNo: {
      type: String,
      required: [true, "CUET application number is required"],
    },
    applicantName: {
      type: String,
      required: [true, "Applicant name is required"],
    },
    fatherName: {
      type: String,
      required: [true, "Father's name is required"],
    },
    motherName: {
      type: String,
      required: [true, "Mother's name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
    },
    phoneNo: {
      type: Number,
      required: [true, "Phone number is required"],
    },
    dob: {
      type: String,
      required: [true, "Date of birth is required"],
    },
    gender: {
      type: String,
      enum: ["male", "female", "other"],
      required: [true, "Gender is required"],
    },
    bloodGroup: {
      type: String,
      required: [true, "Blood group is required"],
    },
    category: {
      type: String,
      enum: ["general", "ews", "obc", "sc", "st", "pwd"],
      required: [true, "Category is required"],
    },
    categoryCertDoc: {
      type: String,
      required: [true, "Category certificate document is required"],
    },
    country: {
      type: String,
      required: [true, "Country is required"],
    },
    otherCountry: {
      type: String,
    },
    pPinCode: {
      type: String,
      required: [true, "Permanent PIN code is required"],
    },
    pState: {
      type: String,
      required: [true, "Permanent state is required"],
    },
    pDistrict: {
      type: String,
      required: [true, "Permanent district is required"],
    },
    pCity: {
      type: String,
      required: [true, "Permanent city is required"],
    },
    pAddress: {
      type: String,
      required: [true, "Permanent address is required"],
    },
    cPinCode: {
      type: String,
      required: [true, "Current PIN code is required"],
    },
    cState: {
      type: String,
      required: [true, "Current state is required"],
    },
    cDistrict: {
      type: String,
      required: [true, "Current district is required"],
    },
    cCity: {
      type: String,
      required: [true, "Current city is required"],
    },
    cAddress: {
      type: String,
      required: [true, "Current address is required"],
    },
    applyForStream: {
      type: String,
      required: [true, "Applied stream is required"],
    },
    courses: [
      {
        type: String,
        enum: ["bca", "mca", "bsc-cs", "msc-cs"],
        required: [true, "Course selection is required"],
      },
    ],
    cuetMarks: {
      type: Number,
      required: [true, "CUET marks are required"],
    },
    scoreCardDoc: {
      type: String,
      required: [true, "Scorecard document is required"],
    },
    marks10th: {
      type: Number,
      required: [true, "10th marks are required"],
    },
    marksheet10th: {
      type: String,
      required: [true, "10th marksheet is required"],
    },
    marks12th: {
      type: Number,
      required: [true, "12th marks are required"],
    },
    marksheet12th: {
      type: String,
      required: [true, "12th marksheet is required"],
    },
    marksUG: {
      type: Number,
      required: [true, "UG marks are required"],
    },
    marksheetUGDoc: {
      type: String,
      required: [true, "UG marksheet document is required"],
    },
    photoDoc: {
      type: String,
      required: [true, "Photo document is required"],
    },
    signDoc: {
      type: String,
      required: [true, "Signature document is required"],
    },
    // authBy: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "SendMailList",
    // },
  },
  { timestamps: true }
);

export const Student = mongoose.model("Student", studentSchema);
