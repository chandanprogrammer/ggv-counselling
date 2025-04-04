import {
  LayoutDashboard,
  DatabaseZap,
  User,
  SquareCheckBig,
  Settings,
  ChevronRight,
  ScrollText,
  LogOut,
} from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Sidebar = ({ page }) => {
  return (
    <>
      <div className="w-[16%] md:w-[20%] min-h-screen bg-white shadow-xl fixed">
        <ul className="flex flex-col gap-4 md:gap-1 tracking-wider pt-[6em] pl-8 text-stone-700">
          {/* ----------- Dashboard ----------- */}

          <li
            className={page == "dashboard" ? "font-semibold text-blue-700" : ""}
          >
            <Link
              to="/dashboard"
              className="md:px-3 py-2 flex items-center gap-4 hover:text-black"
            >
              <LayoutDashboard size={18} />{" "}
              <span className="hidden md:inline">Dashboard</span>{" "}
              <ChevronRight
                className={page == "dashboard" ? "hidden md:inline" : "hidden"}
              />
            </Link>
          </li>

          {/* ----------- Cuet Data ----------- */}

          <li
            className={page == "cuet-data" ? "font-semibold text-blue-700" : ""}
          >
            <Link
              to="/dashboard/cuet-data"
              className="md:px-3 py-2 flex items-center gap-4 hover:text-black"
            >
              <DatabaseZap size={18} />{" "}
              <span className="hidden md:inline">Cuet Data</span>{" "}
              <ChevronRight
                className={page == "cuet-data" ? "hidden md:inline" : "hidden"}
              />
            </Link>
          </li>

          {/* ----------- Student List ----------- */}

          <li
            className={
              page == "student-list" ? "font-semibold text-blue-700" : ""
            }
          >
            <Link
              to="/dashboard/student-list"
              className="md:px-3 py-2 flex items-center gap-4 hover:text-black"
            >
              <User size={18} />{" "}
              <span className="hidden md:inline">Student List</span>{" "}
              <ChevronRight
                className={
                  page == "student-list" ? "hidden md:inline" : "hidden"
                }
              />
            </Link>
          </li>

          {/* ----------- Selection ----------- */}

          <li
            className={page == "selection" ? "font-semibold text-blue-700" : ""}
          >
            <Link
              to="/dashboard/selection"
              className="md:px-3 py-2 flex items-center gap-4 hover:text-black"
            >
              <SquareCheckBig size={18} />{" "}
              <span className="hidden md:inline">Selection</span>{" "}
              <ChevronRight
                className={page == "selection" ? "hidden md:inline" : "hidden"}
              />
            </Link>
          </li>

          {/* ----------- Generate Notice ----------- */}

          <li
            className={
              page == "generate-notice" ? "font-semibold text-blue-700" : ""
            }
          >
            <Link
              to="/dashboard/generate-notice"
              className="md:px-3 py-2 flex items-center gap-4 hover:text-black"
            >
              <ScrollText size={18} />{" "}
              <span className="hidden md:inline">Generate Notice</span>{" "}
              <ChevronRight
                className={
                  page == "generate-notice" ? "hidden md:inline" : "hidden"
                }
              />
            </Link>
          </li>

          {/* ----------- Settings ----------- */}

          <li
            className={page == "settings" ? "font-semibold text-blue-700" : ""}
          >
            <Link
              to="/dashboard/settings"
              className="md:px-3 py-2 flex items-center gap-4 hover:text-black"
            >
              <Settings size={18} />{" "}
              <span className="hidden md:inline">Settings</span>
              <ChevronRight
                className={page == "settings" ? "hidden md:inline" : "hidden"}
              />
            </Link>
          </li>

          {/* ----------- Log out ----------- */}

          <li>
            <Link
              to="/"
              className="md:px-3 py-2 flex items-center gap-4 hover:text-black"
            >
              <LogOut size={18} />{" "}
              <span className="hidden md:inline">Logout</span>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
