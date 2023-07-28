import React from "react";

function UploadFile() {
  return (
    <div className="flex flex-col flex-wrap justify-start items-center w-[100%] text-center my-20 mx-2">
      <p className="text-3xl font-semibold italic ">
        Upload your files and let KuickReader read them for you.
      </p>
      <input
        type="file"
        name=""
        id=""
        className="mt-10 px-[10%] py-24 text-center bg-gray-200 border-2 border-dashed border-black"
      />
    </div>
  );
}

export default UploadFile;
