import React from "react";
import DashboardLayout from "../layouts/DashboardLayout";
import { useLocation } from "react-router-dom";

function Dashboard() {
  const { email, Token } = useLocation().state;

  return (
    <div>
      <DashboardLayout email={email} Token={Token}></DashboardLayout>
    </div>
  );
}

export default Dashboard;
