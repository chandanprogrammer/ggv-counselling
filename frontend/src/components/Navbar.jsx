import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "./ui/Button";
import {
  AlignJustify,
  CircleX,
  CircleUserRound,
  House,
  NotebookText,
  Download,
} from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const toggleMenu = () => {
    isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
    document.querySelector(".mobileMenuToggle").classList.toggle("hidden");
  };

  return (
    <>
      <header className="fixed w-full px-8 md:px-20 py-2 shadow-2xl bg-white border-b-1 border-stone-500 z-100">
        <div className="flex items-center justify-between">
          <div className="w-screen md:w-auto flex items-center cursor-pointer justify-between ">
            <div
              className="flex items-center "
              onClick={() => {
                navigate("/");
              }}
            >
              <img className="w-12" src="../../images/ggv_logo.png" alt="" />
              <p className="text-xl font-bold ml-3 text-red-950">GGV</p>
            </div>
            <div
              className="flex cursor-pointer md:hidden p-2 md:p-0 bg-slate-400 rounded"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <CircleX /> : <AlignJustify />}
            </div>
          </div>
          <ul className="mobileMenuToggle hidden fixed top-16 left-0 h-screen w-60 bg-white  md:h-12 md:w-auto md:top-0 md:relative md:flex md:gap-3 font-medium tracking-wider items-center shadow-2xl md:shadow-none ">
            <li className="mt-8 md:mt-0 hover:font-semibold">
              <Link
                to="/"
                className="px-10 md:px-3 py-2 flex items-center gap-2 "
                onClick={toggleMenu}
              >
                <House size={16} /> Home
              </Link>
            </li>
            <li className="mt-5 md:mt-0 hover:font-semibold" onClick={toggleMenu}>
              <Link
                to="/registration"
                className="px-10 md:px-3 py-2 flex items-center gap-2"
              >
                <NotebookText size={16} />
                Registration
              </Link>
            </li>
            <li className="mt-5 md:mt-0 hover:font-semibold" onClick={toggleMenu}>
              <Link
                to="/download-registration"
                className="px-10 md:px-3 py-2 flex items-center gap-2"
              >
                <Download size={16} /> Download
              </Link>
            </li>
            <li className="mt-5 md:mt-0 " onClick={toggleMenu}>
              <div className="flex items-center cursor-pointer px-10 md:px-3 py-2">
                {isLoggedIn ? (
                  <CircleUserRound size={30} onClick={() => navigate("/dashboard")} />
                ) : (
                  <Button text="Login" navigate="/login" />
                )}
              </div>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
