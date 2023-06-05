import React, { useState, useEffect } from "react";
import "../global/popUpStyle.css";
import quit from "../../../assets/quitX.svg";
import axios from "axios";

export default function AddAnnounceForm({ toggle }) {
  return (
    <div id="shade">
      <div id="profileContainer">
        <button onClick={toggle} id="quitBtn">
          <img src={quit} alt=""></img>
        </button>
        <h2>Add New Annoucement</h2>
      </div>
    </div>
  );
}
