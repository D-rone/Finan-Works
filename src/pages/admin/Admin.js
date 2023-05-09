import React from "react";
import SideBar from "./global/SideBar.jsx";
import "./admin_style.css";
import EmployeeList from "./employeeList/EmployeeList.jsx";
import Dashboard from "./dashboard/Dashboard.jsx";
import { Route, Routes } from "react-router-dom";

export default function Admin_dashboard() {
  return (
    <div id="dashboard_container">
      <div id="ellipse1" className="ellipse"></div>
      <div id="ellipse2" className="ellipse"></div>
      <div id="ellipse3" className="ellipse"></div>
      <section id="sideSection">
        <SideBar />
      </section>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/Employee_List" element={<EmployeeList />} />
      </Routes>
    </div>
  );
}
