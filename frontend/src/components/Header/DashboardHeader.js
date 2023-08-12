import React from "react";
import { Link } from "react-router-dom";
import Logo from "./../../assets/images/logo.png";


function DashboardHeader() {
  return (
    <>
      <div className="flex flex-wrap justify-between content-center h-auto px-10 py-2 z-30 shadow w-[100%]">
        <div className="flex flex-col cursor-pointer m-0 p-0">
          <img
            className="w-8 h-fit self-center"
            src={Logo}
            alt="Kuick Reader Logo"
          />
          <h1 className=" text-lg">kuickReader</h1>
        </div>
        <ul className="flex flex-row flex-wrap cursor-pointer">
          <Link
            to="/"
            className="uppercase self-center mx-1 px-5 py-1 hover:text-orange-400 duration-200 ease-linear text-lg"
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            className="uppercase self-center mx-1 px-5 py-1 hover:text-orange-400 duration-200 ease-linear text-lg"
          >
            Dashboard
          </Link>
          <Link
            to="/about"
            className="uppercase self-center mx-1 px-5 py-1 hover:text-orange-400 duration-200 ease-linear text-lg"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="uppercase self-center mx-1 px-5 py-1 hover:text-orange-400 duration-200 ease-linear text-lg"
          >
            Contact
          </Link>
        </ul>
      </div>
    </>
  );
}

export default DashboardHeader;
