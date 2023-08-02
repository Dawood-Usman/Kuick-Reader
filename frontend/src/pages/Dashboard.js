import { React, useState } from "react";
import { useLocation } from "react-router-dom";
import DashboardHeader from "../components/Header/DashboardHeader";
import Footer from "./../components/Footer";
import Sidebar from "../components/Dashboard/Sidebar";
import UploadFile from "../components/Dashboard/UploadFile";
import History from "../components/Dashboard/History";

function Dashboard(props) {
  const [selectedOption, setSelectedOption] = useState("Upload File");
  const { email, Token } = useLocation().state;
  const {userName} = useLocation().state;

  const handleChildStateChange = (newState) => {
    setSelectedOption(newState);
  };

  return (
    <>
      <DashboardHeader></DashboardHeader>
      <div className="flex w-[100%]">
        <Sidebar
          email={userName ? userName : email}
          Token={Token}
          onStateChange={handleChildStateChange}
        ></Sidebar>
          {selectedOption === "Upload File" ? <UploadFile/>: <History/>}
      </div>
      <Footer />

    </>
  );
}

export default Dashboard;
