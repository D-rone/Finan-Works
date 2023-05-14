import React, { useEffect } from "react";
import "../global/popUpStyle.css";
import quit from "../../../assets/quitX.svg";

export default function EmployeeData({ data, handleViewClick }) {
  return (
    <div id="shade">
      <div id="profileContainer">
        <button onClick={handleViewClick} id="quitBtn">
          <img src={quit} alt=""></img>
        </button>

        <h2>Request Information</h2>
        
      </div>
    </div>
  );
}
