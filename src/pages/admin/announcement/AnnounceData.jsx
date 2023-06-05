import React, { useEffect } from "react";
import "../global/popUpStyle.css";
import quit from "../../../assets/quitX.svg";


let RejectedAnnounce = () => {
  return (
    <>
      <div className="user_description_box">
        <img src={quit} className="userAvatar_image" alt=""></img>
        <div className="information_user_box">
          {/*Employee name  */}
          <div className="one">
            <div> Employee name :</div>
            <div className="second_one"> Ahmed ahmed</div>
          </div>
          {/*-------------  */}
          {/* ID */}
          <div className="two">
            <div>ID : </div>
            <div className="second_one "> EM9315</div>
          </div>
          {/*-------------  */}
          {/*DATE  */}
          <div className="three">
            <div> DATE :</div>
            <div className="second_one"> 01-01-2023</div>
          </div>
          {/*-------------  */}
          {/*TYPE */}
          <div className="four">
            <div>TYPE : </div>
            <div className="second_one employee"> Employee</div>
          </div>
          {/*-------------  */}
          {/*Amount */}
          <div className="five">
            <div>Amount : </div>
            <div className="second_one"> $5,000 </div>
          </div>
          {/*-------------  */}
          {/*Description  */}
          <div className="six">
            <div> Description : </div>
            <div className="second_one"> </div>
          </div>
          {/*-------------  */}
        </div>
      </div>

      <input className="description_box" href="#" placeholder="Write why ?" />

      <button className="confirm">Confirm</button>
    </>
  );
};

export default function AnnounceData({ data, handleAnnounceClick }) {
  console.log(data)
  return (
    <div id="shade">
      <div id="profileContainer">
        <button onClick={handleAnnounceClick} id="quitBtn">
          <img src={quit} alt="" />
        </button>
        <h2>Announce Information</h2>
        <RejectedAnnounce />
      </div>
    </div>
  );
}
