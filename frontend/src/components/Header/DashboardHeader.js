import React from "react";
import { Link } from "react-router-dom";
import Logo from "./../../assets/images/logo.png";

function DashboardHeader() {
  return (
    <>
      <div className="flex flex-wrap justify-between content-center h-auto px-10 py-2 z-30 shadow-lg w-[100%]">
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
            className="uppercase self-center bg-gray-100 mx-4 rounded-md px-5 py-1 hover:scale-110 duration-300 ease-in-out text-lg border-green-600"
          >
            Home
          </Link>
          <Link
            to="/categories"
            className="uppercase self-center bg-gray-100 mx-4 rounded-md px-5 py-1 hover:scale-110 duration-300 ease-in-out text-lg border-green-600"
          >
            Categories
          </Link>
          <Link
            to="/about"
            className="uppercase self-center bg-gray-100 mx-4 rounded-md px-5 py-1 hover:scale-110 duration-300 ease-in-out text-lg border-green-600"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="uppercase self-center bg-gray-100 mx-4 rounded-md px-5 py-1 hover:scale-110 duration-300 ease-in-out text-lg border-green-600"
          >
            Contact
          </Link>
        </ul>
      </div>
    </>
  );
}

export default DashboardHeader;
