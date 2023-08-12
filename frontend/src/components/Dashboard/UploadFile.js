import React, { useState, useEffect } from "react";
import axios from "../../axios";
import { ToastContainer, toast } from "react-toastify";
import UploadIcon from "./../../assets/images/UploadIcon.png";


function UploadFile() {
  const [errorMessage, setErrorMessage] = useState("");
  const [fileToUpload, setFileToUpload] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setErrorMessage("");
    if (!file) {
      setFileToUpload(null);
      setErrorMessage("Please select a file.");
      return;
    }

    const allowedTypes = ["application/pdf"];
    if (!allowedTypes.includes(file.type)) {
      setFileToUpload(null);
      setErrorMessage("Invalid file type. Only PDF files are allowed.");
    } else {
      setFileToUpload(file);
    }
  };

  useEffect(() => {
    console.log(fileToUpload);
  }, [fileToUpload]);

  const handleUploadFile = async (e) => {
    e.preventDefault();

    if (fileToUpload !== null) {
      try {
        const formData = new FormData();
        formData.append("file", fileToUpload);

        const response = await axios.post("/upload", formData);
        if (response) {
          console.log(response);
          notify("PDF Uploaded! Check History Tab to Read File");
        }
      } catch (error) {
        console.log(error);
        alert("error");
      }
    } else {
      setErrorMessage("Please select a file.");
    }
  };

  const notify = (msg) => toast(msg);


  return (
    <div className="flex flex-col flex-wrap justify-start items-center w-[100%] text-center mt-20 mb-10 mx-2">
      <p className="text-3xl font-semibold italic ">
        Upload your file and let KuickReader help you read it quickly.
      </p>
      <form action="" onSubmit={handleUploadFile}>
        <input
          type="file"
          name="file"
          id="file"
          className="mt-10  px-[10%] md:px-[15%] py-24 text-center bg-gray-200 border-2 border-dashed border-black text-teal-600"
          onChange={handleFileChange}
        />
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <button
          type="submit"
          className="bg-gray-200 text-blue-800 py-2 px-4 rounded m-4 text-xl shadow-md hover:bg-gray-100 duration-200 ease-linear border-l-4 border-r-4 border-blue-800"
        >
          <img
            src={UploadIcon}
            alt=""
            className="w-6 h-fit inline-block mx-1"
          />
          Upload
        </button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default UploadFile;
