import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../components/ui/Button";

const Home = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    axios
      .get("/api/v1/students")
      .then((response) => {
        setStudents(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });
  return (
    <div className="relative">
      <div>{students.name}</div>
      <img
        src="../../images/colg_img.jpg"
        alt=""
        className="w-full md:h-[100vh]"
      />
      <div className="absolute top-35 md:top-[30%] inset-x-0 flex justify-center">
        <Button text="Click for Registration" navigate="/registration" />
      </div>
    </div>
  );
};

export default Home;
