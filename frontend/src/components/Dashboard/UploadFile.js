import React, { useState } from "react";
import UploadIcon from './../../assets/images/UploadIcon.png';

function UploadFile() {
  
  const [errorMessage, setErrorMessage] = useState("");
  
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setErrorMessage("");
    if (!file) {
      setErrorMessage("Please select a file.");
      return;
    }

    const allowedTypes = ["application/pdf", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (!allowedTypes.includes(file.type)) {
      setErrorMessage("Invalid file type. Only PDF or DOCX files are allowed.");
    }
  };

  return (
    <div className="flex flex-col flex-wrap justify-start items-center w-[100%] text-center mt-20 mb-10 mx-2">
      <p className="text-3xl font-semibold italic ">
        Upload your files and let KuickReader help you read them quickly.
      </p>
      <input
        type="file"
        name=""
        id=""
        className="mt-10 px-[10%] py-24 text-center bg-gray-200 border-2 border-dashed border-black text-teal-600"
        onChange={handleFileChange}
      />
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <button
        type="button"
        className="bg-gray-200 text-blue-800 py-2 px-4 rounded m-4 text-xl shadow-md hover:bg-gray-100 duration-200 ease-linear border-l-4 border-r-4 border-blue-800"
      >
        <img src={UploadIcon} alt="" className="w-6 h-fit inline-block mx-1" />
        Upload
      </button>
    </div>
  );
}

export default UploadFile;
