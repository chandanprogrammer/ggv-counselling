import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import SuccessReg from "./pages/SuccessReg";
import DownloadReg from "./pages/DownloadReg";
import Dashboard from "./pages/dashboard/Dashboard";
import CuetData from "./pages/dashboard/CuetData";
import StudentList from "./pages/dashboard/StudentList";
import Selection from "./pages/dashboard/Selection";
import GenerateNotice from "./pages/dashboard/GenerateNotice";
import Settings from "./pages/dashboard/Settings";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/success-registration" element={<SuccessReg />} />
          <Route path="/download-registration" element={<DownloadReg />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/dashboard/cuet-data" element={<CuetData />} />
          <Route path="/dashboard/student-list" element={<StudentList />} />
          <Route path="/dashboard/selection" element={<Selection />} />
          <Route path="/dashboard/settings" element={<Settings />} />
          <Route path="/dashboard/generate-notice" element={<GenerateNotice />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
