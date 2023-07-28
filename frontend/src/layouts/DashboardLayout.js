import { React, useState } from "react";
import DashboardHeader from "../components/Header/DashboardHeader";
import Footer from "./../components/Footer";
import Sidebar from "../components/Dashboard/Sidebar";
import UploadFile from "../components/Dashboard/UploadFile";
import History from "../components/Dashboard/History";

function DashboardLayout(props) {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChildStateChange = (newState) => {
    setSelectedOption(newState);
  };

  return (
    <>
      <DashboardHeader></DashboardHeader>
      <div className="flex w-[100%]">
        <Sidebar
          email={props.email}
          onStateChange={handleChildStateChange}
        ></Sidebar>
        {selectedOption === "History" ? <History /> : <UploadFile />}
      </div>
      <Footer />
    </>
  );
}

export default DashboardLayout;
