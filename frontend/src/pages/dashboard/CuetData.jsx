import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import LoaderUi from "../../components/loader/LoaderUi";
import { SlidersHorizontal } from "lucide-react";
import getCuetProvidedData from "../../middleware/cuet-data-api";
import PrintData from "../../components/tables/PrintData";

const CuetData = () => {
  const [cuetData, setCuetData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [loading, setLoading] = useState(false);

  const headerRowValue = [
    "S.no",
    "Form number",
    "Applicant name",
    "Father name",
    "Mother name",
    "Category",
    "Gender",
    "Email",
    "Phone no.",
  ];

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const data = await getCuetProvidedData();
      setCuetData(data.data);
      setFilterData(data.data.slice(1));
      setLoading(false);
      console.log(data.data);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-row">
      <Sidebar page="cuet-data" />
      <div className="w-[84%] pt-[5em] ml-[20%]">
        {loading ? <LoaderUi /> : ""}
        <div className=" pl-[3em] mr-[6em] ">
          {/* ----------- Filter or search section ----------- */}

          <div className=" flex flex-row items-center gap-6 tracking-wider ">
            <SlidersHorizontal size={20} />
            <div>
              <input
                type="text"
                id="enterFormNo"
                placeholder="Enter form No or Name"
                className="py-2 px-4 border-1 bg-gray-300 border-stone-500 rounded-lg text-stone-800 placeholder-neutral-500 focus:border-1 focus:outline-blue-700"
                maxLength={25}
                defaultValue={"GGVCUET24"}
                onChange={() => {
                  const enterFormNoElement =
                    document.querySelector("#enterFormNo");
                  enterFormNoElement.value =
                    enterFormNoElement.value.toUpperCase();
                  let size = enterFormNoElement.value.length;

                  if (size == 0) {
                    setFilterData(cuetData.slice(1));
                    return;
                  }
                  const filterStudent = cuetData.filter((student) => {
                    return (
                      student.formNumber.slice(0, size).toUpperCase() ==
                        enterFormNoElement.value ||
                      student.applicantName.slice(0, size).toUpperCase() ==
                        enterFormNoElement.value
                    );
                  });
                  setFilterData(filterStudent);
                }}
              />
            </div>
            <p className="text-blue-600 font-semibold">Or</p>
            <div className="" aria-label="Select program">
              <select
                id="programSelect"
                className="py-3 px-4 border-1 text-sm bg-gray-300 border-stone-500 rounded-lg focus:border-1 text-stone-900 focus:outline-blue-700 cursor-pointer"
                onChange={() => {
                  const selectProgram =
                    document.querySelector("#programSelect").value;

                  if (selectProgram == "") {
                    setFilterData(cuetData.slice(1));
                    return;
                  }
                  const filterStudent = cuetData.filter((student) => {
                    return (
                      student.programName
                        .toLowerCase()
                        .split(/[\s-]+/)
                        .join("") == selectProgram
                    );
                  });
                  setFilterData(filterStudent);
                }}
              >
                <option value="" selected>
                  Select Program
                </option>
                <option value="bca">BCA</option>
                <option value="bsccs">BSC-CS</option>
                <option value="mca">MCA</option>
                <option value="msccs">MSC-CS</option>
              </select>
            </div>
          </div>

          {/* ----------- Print Data -----------  */}

          <div className="mt-3">
            <PrintData data={filterData} header={headerRowValue} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuetData;
