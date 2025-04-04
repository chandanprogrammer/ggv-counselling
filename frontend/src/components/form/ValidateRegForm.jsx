import React, { useState } from "react";

const ValidateRegForm = ({ data, getMatchedStudent }) => {
  const [formNumber, setFormNumber] = useState("");
  const [dob, setDob] = useState("");

  const validateApplication = () => {
    let cuetData = data;
    const takeValidationForm = document.getElementById("takeValidationForm");
    console.log(cuetData);
    if (cuetData.length == 0) {
      alert("Network error please try again!");
      return;
    }
    for (let i = 1; i < cuetData.length; i++) {
      if (cuetData[i].formNumber == formNumber) {
        let dobDay = cuetData[i].dobDay.toString();
        let dobMonth = cuetData[i].dobMonth.toString();

        if (dobDay.length == 1) dobDay = "0" + dobDay;
        if (dobMonth.length == 1) dobMonth = "0" + dobMonth;

        if ("" + dobDay + dobMonth + cuetData[i].dobYear == dob) {
          console.log(cuetData[i]);
          takeValidationForm.classList.add("hidden");
          getMatchedStudent(cuetData[i]);
          return;
        }
      }
    }
    alert("Form number or date of birth not matched");
  };

  return (
    <>
      <div
        id="takeValidationForm"
        className="fixed top-0 left-0 z-10 w-[100vw] h-[100vh] flex items-center justify-center tracking-wider"
      >
        <div className=" bg-[#011b3ae6] px-12 py-8 rounded-[4px] w-[30%]">
          <div className="max-full mb-6">
            <label
              htmlFor="takeApplicationNo"
              className="block text-base font-normal mb-3 text-white text-center"
            >
              Enter Form or Application Number
            </label>
            <input
              type="text"
              id="takeApplicationNo"
              name="takeApplicationNo"
              maxLength={18}
              className="py-3 px-4 block w-full border-1 border-gray-300 rounded-lg text-base text-stone-200 placeholder-neutral-400 focus:border-1 focus:outline-blue-400"
              placeholder="GGVCUET2400XXXXX"
              required
              value={formNumber}
              onChange={() => {
                let applicationNumber =
                  document.getElementById("takeApplicationNo").value;
                applicationNumber = applicationNumber.toUpperCase();
                setFormNumber(applicationNumber);
              }}
            />
          </div>
          <div className="max-full mb-6">
            <label
              htmlFor="takeDob"
              className="block text-base font-normal mb-3 text-white text-center"
            >
              Enter Date of Birth
            </label>
            <input
              type="text"
              id="takeDob"
              name="takeDob"
              maxLength={8}
              className="py-3 px-4 block w-full border-1 border-gray-300 rounded-lg text-base text-stone-200 placeholder-neutral-400 focus:border-1 focus:outline-blue-400"
              placeholder="DDMMYY : 08022001"
              required
              value={dob}
              onChange={() => {
                let dobNumber = document.getElementById("takeDob").value;
                if (dobNumber.includes("0")) {
                  // console.log("Mathched");
                }
                setDob(dobNumber);
              }}
            />
          </div>
          <div className="max-full flex justify-center">
            <button
              type="submit"
              id="inputSubmitBtn"
              className="py-3 px-14 block w-auto bg-cyan-700 hover:bg-cyan-800 text-white transition delay-150  rounded-lg text-base cursor-pointer"
              onClick={validateApplication}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ValidateRegForm;
