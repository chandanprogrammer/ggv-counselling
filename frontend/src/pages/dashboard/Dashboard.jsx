import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import getCuetProvidedData from "../../middleware/cuet-data-api";
import LoaderUi from "../../components/loader/LoaderUi";
import ProgramChart from "../../components/charts/ProgramChart";
import CuetDataCard from "../../components/cards/CuetDataCard";
import RegistrationDataCard from "../../components/cards/RegistrationDataCard";
import ConfirmAdmissionDataCard from "../../components/cards/ConfirmAdmissionDataCard";

const Dashboard = () => {
  const [cuetData, setCuetData] = useState([]);
  const [registeredData, setRegisteredData] = useState([]);
  const [confirmAdmissionData, setConfirmAdmissionData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      const data = await getCuetProvidedData();
      setCuetData(data.data);
      setLoading(false);
      // console.log(data.data);
    };
    fetchData();
  }, []);

  return (
    <div className="flex flex-row ">
      <Sidebar page="dashboard" />
      <div className="w-[90%] md:w-[80%] pt-[6em] ml-[10%] md:ml-[20%] ">
        {loading ? <LoaderUi /> : ""}
        <div className=" pl-[3em] mr-[2em] md:mr-[6em]">
          {/* ---------- Header Cards ---------- */}

          <div className="flex flex-col md:flex-row gap-8">
            <CuetDataCard data={cuetData} text="Total CUET Application" />
            <RegistrationDataCard
              data={registeredData}
              text="Total Registration"
            />
            <ConfirmAdmissionDataCard
              data={confirmAdmissionData}
              text="Total Confirm Admission"
            />
          </div>

          {/* ---------- Course wise graph ---------- */}

          <div className="flex flex-col md:flex-row mt-10 gap-4">
            <ProgramChart
              data={cuetData}
              text="CUET Provided Program wise Data"
            />
            <ProgramChart
              data={registeredData}
              text="Registered Student Program wise Data"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
