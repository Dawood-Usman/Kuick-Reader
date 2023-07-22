import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { useLocation } from "react-router-dom";

function Dashboard() {
  const { email, Token } = useLocation().state;

  return (
    <div>
      <DashboardLayout />
      <h1 className="text-center m-10">{email}</h1>
      <p className="text-center m-10 overflow-x-auto">{Token}</p>
    </div>
  );
}

export default Dashboard;
