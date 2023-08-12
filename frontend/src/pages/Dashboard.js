import { React, useState } from "react";
import DashboardHeader from "../components/Header/DashboardHeader";
import Footer from "./../components/Footer";
import Sidebar from "../components/Dashboard/Sidebar";
import UploadFile from "../components/Dashboard/UploadFile";
import History from "../components/Dashboard/History";

function Dashboard(props) {
  const [selectedOption, setSelectedOption] = useState("Upload File");

  const handleChildStateChange = (newState) => {
    setSelectedOption(newState);
  };

  return (
    <>
      <DashboardHeader></DashboardHeader>
      <div className="flex w-[100%]">
        <Sidebar
          onStateChange={handleChildStateChange}
        ></Sidebar>
          {selectedOption === "Upload File" ? <UploadFile/>: <History/>}
      </div>
      <Footer />

    </>
  );

}



export default Dashboard;
