import React, { useEffect, useState } from "react";
import getCuetProvidedData from "../middleware/cuet-data-api.js";
import ValidateRegForm from "../components/form/ValidateRegForm.jsx";

const Registration = () => {
  const [cuetData, setCuetData] = useState([]);
  const [autoFetchData, setAutoFetchData] = useState({});
  const [matchedStudent, setMatchedStudent] = useState({});
  const [student, setStudent] = useState({
    formNumber: "",
    formNumberDoc: "",
    cuetApplicationNo: "",
    applicantName: "",
    fatherName: "",
    motherName: "",
    emailId: "",
    phoneNumber: "",
    gender: "",
    bloodGroup: "",
    category: "",
    categoryDoc: "",
  });

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCuetProvidedData();
      setCuetData(data.data);
    };
    fetchData();
  }, []);

  // setAutoFetchData(cuetData)

  const autoFetchDataFill = () => {
    setStudent({
      formNumber: autoFetchData.formNumber,
      cuetApplicationNo: "",
      applicantName: "",
      fatherName: "",
      motherName: "",
      emailId: "",
      phoneNumber: "",
      gender: "",
      bloodGroup: "",
      category: "",
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileUpload = (event) => {
    const { name } = event.target;
    const file = event.target.files[0];
    console.log(file.size);
    if (file.size > 48 * 1024 && file.size < 260 * 1024) {
      const value = file.name;
      console.log(value);

      // setStudent((prev) => ({ ...prev, [name]: value }));
      return;
    }
    alert("File size should be grater then 50kb and less than 250 kb ");
  };
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(student);
  };

  const getMatchedStudent = (data) =>{
    console.log("datamian : ", data);
    
  }

  return (
    <>
      <ValidateRegForm data={cuetData} getMatchedStudent={getMatchedStudent} />

      {/* ----------- Start: Heading Text ----------- */}
      <div className="text-xl md:text-2xl mb-2 py-10 text-center bg-teal-700 text-white pt-28 tracking-wider">
        <span className="font-medium mr-2">CSIT</span>Counselling Registration
        Form<span className="font-extrabold ml-2">2025</span>
      </div>
      {/* ----------- End: Heading Text ----------- */}

      <div className="px-2 md:px-24 md:flex justify-center mb-30">
        <div className="px-8 py-14 md:px-12 md:py-14 md:size-[50%] bg-slate-100 flex flex-col justify-center rounded shadow-xl">
          {/* ----------- Start: Registration Form here ----------- */}

          <form autoComplete="off" onSubmit={handleFormSubmit}>
            {/* ----------- Form number field ----------- */}

            <div className="max-full mb-6">
              <label
                htmlFor="formNumber"
                className="block text-base font-normal mb-2"
              >
                Form Number <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                id="formNumber"
                name="formNumber"
                className="py-3 px-4 block w-full border-1 bg-gray-200 border-gray-300 rounded-lg text-base text-stone-700 placeholder-neutral-400 focus:border-1 focus:outline-blue-400"
                placeholder="Enter form number"
                value={student.formNumber}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* ----------- Form document upload field ----------- */}

            <div className="max-full mb-6">
              <label
                htmlFor="formNumberDoc"
                className="block text-base font-normal mb-2"
              >
                Form Upload
                <span className="text-sm text-stone-500">
                  (only jpg, jpeg, pdf)
                </span>
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="file"
                id="formNumberDoc"
                name="formNumberDoc"
                className="py-2 px-4 w-full md:size-[60%] bg-gray-200 border-1 border-gray-300 rounded-lg text-base text-stone-700 placeholder-neutral-400 focus:border-1 focus:outline-blue-400 cursor-pointer file:me-4 file:py-[6px] file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-blue-500 file:text-white hover:file:bg-blue-500 file:disabled:opacity-50 file:cursor-pointer"
                accept=".jpg, .jpeg, .pdf"
                required
                value={student.formNumberDoc}
                onChange={handleFileUpload}
              />
            </div>

            {/* ----------- CUET Application number field ----------- */}

            <div className="max-full mb-6">
              <label
                htmlFor="cuetApplicationNo"
                className="block text-base font-normal mb-2"
              >
                CUET Application Number
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                id="cuetApplicationNo"
                name="cuetApplicationNo"
                className="py-3 px-4 block w-full border-1 border-gray-300 rounded-lg text-base text-stone-700 placeholder-neutral-400 focus:border-1 focus:outline-blue-400"
                placeholder="Enter CUET application number"
                value={student.cuetApplicationNo}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* ----------- Applicant Name field ----------- */}

            <div className="max-full mb-6">
              <label
                htmlFor="applicantName"
                className="block text-base font-normal mb-2"
              >
                Applicant Name <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                id="applicantName"
                name="applicantName"
                className="py-3 px-4 block w-full border-1 border-gray-300 rounded-lg text-base text-stone-700 placeholder-neutral-400 focus:border-1 focus:outline-blue-400"
                placeholder="Enter your name"
                value={student.applicantName}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* ----------- Father's Name field ----------- */}

            <div className="max-full mb-6">
              <label
                htmlFor="fatherName"
                className="block text-base font-normal mb-2"
              >
                Father's Name <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                id="fatherName"
                name="fatherName"
                className="py-3 px-4 block w-full border-1 border-gray-300 rounded-lg text-base text-stone-700 placeholder-neutral-400 focus:border-1 focus:outline-blue-400"
                placeholder="Enter father's name"
                value={student.fatherName}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* ----------- Mother's Name field ----------- */}

            <div className="max-full mb-6">
              <label
                htmlFor="motherName"
                className="block text-base font-normal mb-2"
              >
                Mother's Name <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                id="motherName"
                name="motherName"
                className="py-3 px-4 block w-full border-1 border-gray-300 rounded-lg text-base text-stone-700 placeholder-neutral-400 focus:border-1 focus:outline-blue-400"
                placeholder="Enter mother's name"
                value={student.motherName}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* ----------- Email address field ----------- */}

            <div className="max-full mb-6">
              <label
                htmlFor="emailId"
                className="block text-base font-normal mb-2"
              >
                Email ID <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="email"
                id="emailId"
                name="emailId"
                className="py-3 px-4 block w-full border-1 border-gray-300 rounded-lg text-base text-stone-700 placeholder-neutral-400 focus:border-1 focus:outline-blue-400"
                placeholder="Enter email id"
                value={student.emailId}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* ----------- Phone number field ----------- */}

            <div className="max-full mb-6">
              <label
                htmlFor="phoneNumber"
                className="block text-base font-normal mb-2"
              >
                Phone Number <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="number"
                id="phoneNumber"
                name="phoneNumber"
                className="py-3 px-4 block w-full border-1 border-gray-300 rounded-lg text-base text-stone-700 placeholder-neutral-400 focus:border-1 focus:outline-blue-400 focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none "
                placeholder="Enter phone number"
                value={student.phoneNumber}
                onChange={handleInputChange}
                required
                min={1000000000}
                max={9999999999}
              />
            </div>

            {/* ----------- Gender selection field ----------- */}

            <div className="max-full mb-6">
              <label
                htmlFor="gender"
                className="block text-base font-normal mb-2"
              >
                Gender <span className="text-red-500 ml-1">*</span>
              </label>
              <div id="gender" className="flex gap-x-6 ml-3">
                <label className="flex gap-x-3 text-stone-700 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="male"
                    onChange={handleInputChange}
                    required
                  />
                  Male
                </label>
                <label className="flex gap-x-3 text-stone-700 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="female"
                    onChange={handleInputChange}
                    required
                  />
                  Female
                </label>
                <label className="flex gap-x-3 text-stone-700 cursor-pointer">
                  <input
                    type="radio"
                    name="gender"
                    value="other"
                    onChange={handleInputChange}
                    required
                  />
                  Other
                </label>
              </div>
            </div>

            {/* ----------- Blood Group selection field ----------- */}

            <div className="max-full mb-6" aria-label="Select blood Group">
              <label
                htmlFor="bloodGroup"
                className="block text-base font-normal mb-2"
              >
                Blood Group <span className="text-red-500 ml-1">*</span>
              </label>
              <select
                id="bloodGroup"
                name="bloodGroup"
                className="py-3 px-4 w-full border-1 border-gray-300 rounded-lg focus:border-1 text-stone-700 focus:outline-blue-400 cursor-pointer"
                onChange={handleInputChange}
              >
                <option value="" selected>
                  Select Blood Group
                </option>
                <option value="a+">A+</option>
                <option value="a-">A-</option>
                <option value="b+">B+</option>
                <option value="b-">B-</option>
                <option value="ab+">AB+</option>
                <option value="ab-">AB-</option>
                <option value="o+">O+</option>
                <option value="o-">O-</option>
                <option value="not-known">Not Known</option>
              </select>
            </div>

            {/* ----------- Category selection field ----------- */}

            <div className="max-full mb-6">
              <label
                htmlFor="category"
                className="block text-base font-normal mb-2"
              >
                Category <span className="text-red-500 ml-1">*</span>
              </label>
              <select
                id="category"
                name="category"
                className="py-3 px-4 w-full border-1 border-gray-300 rounded-lg focus:border-1 text-stone-700 focus:outline-blue-400 cursor-pointer"
                onChange={handleInputChange}
              >
                <option value="general" selected>
                  General
                </option>
                <option value="ews">EWS</option>
                <option value="obc">OBC</option>
                <option value="sc">SC</option>
                <option value="st">ST</option>
                <option value="pwd">Pwd</option>
              </select>
            </div>

            {/* ----------- Category certificate documnet upload field ----------- */}

            <div className="max-full mb-6">
              <label
                htmlFor="categoryDoc"
                className="block text-base font-normal mb-2"
              >
                <span id="categoryLabel"></span> Certificate Upload
                <span className="text-sm text-stone-500">
                  (only jpg, jpeg, pdf)
                </span>
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="file"
                id="categoryDoc"
                name="categoryDoc"
                className="py-2 px-4 w-full md:size-[60%] border-1 border-gray-300 rounded-lg text-base text-stone-700 placeholder-neutral-400 focus:border-1 focus:outline-blue-400 cursor-pointer file:me-4 file:py-[6px] file:px-4 file:rounded-lg file:border-0 file:text-sm file:bg-blue-500 file:text-white hover:file:bg-blue-500 file:disabled:opacity-50 file:cursor-pointer"
                accept=".jpg, .jpeg, .pdf"
                required
              />
            </div>

            {/* ----------- Country selection field ----------- */}

            <div className="max-full mb-6" aria-label="Select your Country">
              <label
                htmlFor="selectCountry"
                className="block text-base font-normal mb-2"
              >
                Country <span className="text-red-500 ml-1">*</span>
              </label>
              <select
                id="selectCountry"
                name="selectCountry"
                className="py-3 px-4 w-full border-1 border-gray-300 rounded-lg focus:border-1 text-stone-700 focus:outline-blue-400 cursor-pointer"
                onChange={handleInputChange}
              >
                <option value="" selected>
                  Select Country
                </option>
                <option value="india">India</option>
                <option value="nepal">Nepal</option>
                <option value="bhutan">Bhutan</option>
                <option value="afghanistan">Afghanistan</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* -----------Other  Country  field ----------- */}
            
            <div className="max-full mb-6">
              <label
                htmlFor="otherCountry"
                className="block text-base font-normal mb-2"
              >
                Other Country <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                id="otherCountry"
                name="otherCountry"
                className="py-3 px-4 block w-full border-1 border-gray-300 rounded-lg text-base text-stone-700 placeholder-neutral-400 focus:border-1 focus:outline-blue-400"
                placeholder="Select your Country"
                value={""}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* -----------State field ----------- */}

            <div className="max-full mb-6">
              <label
                htmlFor="state"
                className="block text-base font-normal mb-2"
              >
                State/U.T <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                id="state"
                name="state"
                className="py-3 px-4 block w-full border-1 border-gray-300 rounded-lg text-base text-stone-700 placeholder-neutral-400 focus:border-1 focus:outline-blue-400"
                placeholder="Enter your State/U.T"
                value={""}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* ----------- District field ----------- */}

            <div className="max-full mb-6">
              <label
                htmlFor="district"
                className="block text-base font-normal mb-2"
              >
                District <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                id="district"
                name="district"
                className="py-3 px-4 block w-full border-1 border-gray-300 rounded-lg text-base text-stone-700 placeholder-neutral-400 focus:border-1 focus:outline-blue-400"
                placeholder="Enter your District"
                value={""}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* ----------- City field ----------- */}

            <div className="max-full mb-6">
              <label
                htmlFor="city"
                className="block text-base font-normal mb-2"
              >
                City <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                id="city"
                name="city"
                className="py-3 px-4 block w-full border-1 border-gray-300 rounded-lg text-base text-stone-700 placeholder-neutral-400 focus:border-1 focus:outline-blue-400"
                placeholder="Enter your City"
                value={""}
                onChange={handleInputChange}
                required
              />
            </div>



            {/* ----------- Present Pin Code field ----------- */}

            
            <div className="max-full mb-6">
              <label
                htmlFor="pinCode"
                className="block text-base font-normal mb-2"
              >
                Pin Code <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                id="pinCode"
                name="pinCode"
                className="py-3 px-4 block w-full border-1 border-gray-300 rounded-lg text-base text-stone-700 placeholder-neutral-400 focus:border-1 focus:outline-blue-400 focus:ring-0 [&::-webkit-inner-spin-button]:appearance-none "
                placeholder="Enter Pin Code"
                value={""}
                onChange={handleInputChange}
                required
                maxlength = "6"
                inputMode="numeric"
              />
            </div>


            {/* ----------- Submit button  ----------- */}

            <div className="max-full mb-6 flex justify-center">
              <button
                type="submit"
                id="submitBtn"
                className="py-3 px-14 block w-auto bg-green-700 hover:bg-green-800 text-white transition delay-150 border-2 border-gray-300 rounded-lg text-base cursor-pointer"
              >
                Submit
              </button>
            </div>
          </form>

          {/* ----------- End: Registration Form here ----------- */}
        </div>
      </div>
    </>
  );
};

export default Registration;
