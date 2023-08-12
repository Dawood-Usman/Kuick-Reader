import React from "react";
import Card from "./Card";
import DashboardHeader from "../Header/DashboardHeader";
import Footer from "../Footer";


function About() {
  return (
    <>
      <DashboardHeader />
      <div className="flex flex-col w-full justify-center items-center my-10">
        <Card />
      </div>
      <Footer />
    </>
  );
}

export default About;
