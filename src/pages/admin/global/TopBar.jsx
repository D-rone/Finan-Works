import React from "react";
import "./globalStyle.css";
import darkModeMoon from "../../../assets/darkModeMoon.svg";
import notifLogo from "../../../assets/notification.svg";
import adminPic from "../../../assets/topG.PNG";
import searchLogo from "../../../assets/search.svg";

let adminUserName = "Djamel Ammar Bensaber";

export default function TopBar() {
  return (
    <>
      <header id="topbar">
        <div id="topbarInput">
          <img src={searchLogo} alt="" />
          <input type="text" placeholder="Search here..." />
        </div>
        <div id="topbarOptions">
          <button id="darkModeToggle">
            <img src={darkModeMoon} alt="" />
          </button>
          <button id="notificationsBtn">
            <img src={notifLogo} alt="" />
          </button>
          <div id="adminInfo">
            <img src={adminPic} alt="" />
            <p>{adminUserName}</p>
          </div>
        </div>
      </header>
      <div id="headerSpacer"></div>
    </>
  );
}
