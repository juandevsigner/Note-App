import React from "react";
import { Outlet } from "react-router-dom";
import { BtnFloat, Navbar } from "../components/Dashboard";
import { Sidebar } from "../components/Dashboard";

export const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <main className="container">
        <Outlet />
      </main>
      <BtnFloat />
    </div>
  );
};
