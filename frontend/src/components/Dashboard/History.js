import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { BallTriangle } from "react-loader-spinner";
import Image from "./../../assets/images/Book.png";


function History() {
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchFiles() {
      try {
        const response = await axios.get("/getlinks");
        setFiles(response.data.fileLinks);
        console.log(response.data.fileLinks);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching files:", error.message);
        setIsLoading(false);
      }
    }

    fetchFiles();
  }, []);


  return (
    <div className="flex flex-col flex-wrap items-center w-[100%] text-center my-5 py-px sm:px-10 min-h-sccreen min-h-[200px] gap-1 ">
      <p className="text-2xl font-semibold py-4 mb-5">My Uploads</p>
      {isLoading ? (
        <BallTriangle
          height={100}
          width={100}
          radius={5}
          color="#4fa94d"
          ariaLabel="ball-triangle-loading"
        />
      ) : (
        files.map((file, index) => (
          <div
            key={index}
            className="flex flex-wrap flex-row justify-between items-center bg-slate-200 w-full rounded p-2 mb-1 shadow-md"
          >
            <img src={Image} alt="" className="w-12 h-fit rounded" />
            <p className="font-semibold text-lg truncate">
              {file.fileName.split(".")[0]}
            </p>
            <div>
              <a
                className="bg-green-500 hover:bg-green-700 duration-300 ease-in-out text-lg px-6 py-1 rounded-md m-1 text-white"
                href={file.fileLink}
                target="_blank"
                rel="noreferrer"
              >
                Read
              </a>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default History;
