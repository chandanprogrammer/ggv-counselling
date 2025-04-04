import React from "react";
import { Chart as ChartJS, registerables } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";

ChartJS.register(...registerables, ChartDataLabels);

const ProgramChart = ({ data, text }) => {
  // Count students per course
  const courseCounts = data.reduce(
    (acc, student) => {
      if (student.programName.toLowerCase() === "bca") acc.BCA++;
      else if (student.programName.toLowerCase() === "bsccs") acc.BSCcs++;
      else if (student.programName.toLowerCase() === "bsc-cs") acc.BSCcs++;
      else if (student.programName.toLowerCase() === "bsc cs") acc.BSCcs++;
      else if (student.programName.toLowerCase() === "mca") acc.MCA++;
      else if (student.programName.toLowerCase() === "msccs") acc.MSCcs++;
      else if (student.programName.toLowerCase() === "msc-cs") acc.MSCcs++;
      else if (student.programName.toLowerCase() === "msc cs") acc.MSCcs++;
      return acc;
    },
    { BCA: 0, BSCcs: 0, MCA: 0, MSCcs: 0 }
  );

  const chartData = {
    labels: ["BCA", "BSC-CS", "MCA", "MSC-CS"],
    datasets: [
      {
        label: "",
        data: [
          courseCounts.BCA,
          courseCounts.BSCcs,
          courseCounts.MCA,
          courseCounts.MSCcs,
        ],
        backgroundColor: ["#3B82F6", "#10B981", "#F59E0B", "#EF4444"],
        borderColor: "#ffffff",
        borderWidth: 2,
        barThickness: 40,
      },
    ],
  };
  const options = {
    scales: {
      y: {
        ticks: {
          stepSize: Math.ceil(Math.max(...chartData.datasets[0].data) / 5) + 12, // Auto-adjust step size
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
      datalabels: {
        anchor: "end",
        align: "top",
        color: "rgba(0, 0, 0, 0.6)",
        font: {
          weight: "bold",
          size: 13,
        },
      },
    },
  };

  return (
    <div className="md:w-[50%] bg-white p-4 rounded-md text-stone-600 tracking-wider">
      <h2 className="my-2 text-center">{text}</h2>
      <hr className="mb-4" />
      <Bar data={chartData} options={options} />
    </div>
  );
};

export default ProgramChart;
