import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./../../assets/images/logo.png";

function Header() {
  const [isScaled, setIsScaled] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsScaled((prevIsScaled) => !prevIsScaled);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const authMiddleware = () => {};

  return (
    <>
      
      <div className="flex flex-wrap justify-between content-center w-full h-auto px-10 py-2 z-30">
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
            to="/categories"
            className="uppercase self-center mx-1 px-5 py-1 hover:text-orange-400 duration-200 ease-linear text-lg"
          >
            Categories
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
        <Link className="self-center" to="/login">
          <button
            className={`text-lg bg-green-400 h-fit px-5 py-0.5 border-2 rounded-2xl duration-500 ease-in-out   ${
              isScaled ? "scale-110" : ""
            }`}
            onClick={authMiddleware}
          >
            Login
          </button>
        </Link>
      </div>
    </>
  );
}

export default Header;
