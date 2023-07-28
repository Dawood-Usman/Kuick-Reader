import React, { useState } from "react";
import UploadFileIcon from "./../../assets/images/UploadFileIcon.png";
import HistoryIcon from "./../../assets/images/HistoryIcon.png";
import UserIcon from "./../../assets/images/UserIcon.png";
import LogoutIcon from "./../../assets/images/LogoutIcon.png";

function Sidebar({ email, onStateChange }) {
  const [selectedOption, setSelectedOption] = useState("Upload File");

  const options = [
    {
      title: "Upload File",
      icon: UploadFileIcon,
    },
    {
      title: "History",
      icon: HistoryIcon,
    },
  ];

  const handleChange = () => {
    if (selectedOption === "Upload File") {
      const newState = "History";
      setSelectedOption(newState);
      onStateChange(newState);
    } else if (selectedOption === "History") {
      const newState = "Upload File";
      setSelectedOption(newState);
      onStateChange(newState);
    }
  };

  return (
    <div className="mt-1 hidden md:flex flex-col flex-wrap min-w-max shadow-2xl">
      <p className="text-center font-bold text-2xl py-4">kucikReader.com</p>
      {options.map((option) => (
        <>
          <button
            className={`text-white rounded-md m-3 text-xl py-2 flex justify-center items-center 
          ${selectedOption === option.title ? "bg-blue-700" : "bg-gray-300"}`}
            onClick={handleChange}
          >
            <img
              src={option.icon}
              alt="Icon for Upload File"
              className="w-8 p-1"
            />
            <p className="mx-1">{option.title}</p>
          </button>
        </>
      ))}
      <button className="bg-gray-800 text-white rounded-md m-3 text-xl py-2 flex justify-center items-center">
        <img src={UserIcon} alt="Icon for Upload File" className="w-8 p-1" />
        <p className="mx-1">{email.slice(0, 10)}</p>
        <img
          src={LogoutIcon}
          alt="Icon for Upload File"
          className="w-8 p-1 self-end"
        />
      </button>
    </div>
  );
}

export default Sidebar;
