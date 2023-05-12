import React from "react";
import SideBar from "./global/SideBar.jsx";
import "./admin_style.css";

import { Outlet } from "react-router-dom";

export default function Admin() {
  return (
    <div id="dashboard_container">
      <div id="ellipse1" className="ellipse"></div>
      <div id="ellipse2" className="ellipse"></div>
      <div id="ellipse3" className="ellipse"></div>
      <section id="sideSection">
        <SideBar />
      </section>
      <Outlet />
    </div>
  );
}
