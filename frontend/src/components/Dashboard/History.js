import React from "react";
import Image from "./../../assets/images/book-1.jpg";

function History() {
  return (
    <div className="flex flex-col flex-wrap items-center w-[100%] text-center my-5 p-2 min-h-sccreen min-h-[300px]">
      <p className="text-2xl font-semibold py-4">My Uploads</p>
      <div className="flex flex-wrap flex-row justify-between items-center bg-gray-300 w-full rounded p-2 mb-1 shadow-md">
        <img src={Image} alt="" className="w-16 h-fit m-1 rounded" />
        <p className="font-semibold text-lg m-1">Name</p>
        <p className="font-semibold text-lg m-1">File Size</p>
        <div>
          <button className="bg-green-500 hover:bg-green-700 duration-300 ease-in-out text-lg px-6 py-1  rounded-md m-1 text-white">
            Read
          </button>
          <button className="bg-red-500 hover:bg-red-700 duration-300 ease-in-out text-lg px-6 py-1  rounded-md m-1 text-white">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default History;
