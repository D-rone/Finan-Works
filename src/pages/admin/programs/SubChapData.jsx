import React, { useEffect } from "react";
import "../global/popUpStyle.css";
import quit from "../../../assets/quitX.svg";

export default function SubChapData({ data, handleSubChapterClick }) {
  return (
    <div id="shade">
      <div id="profileContainer">
        <button onClick={handleSubChapterClick} id="quitBtn">
          <img src={quit} alt=""></img>
        </button>
        <h2>Sub Chapter : {data.name}</h2>
        <table id="profileInfoTable">
          <tbody>
            <tr>
              <th>Amount </th>
              <td>
                <div className="profileData">{data.amount}</div>
              </td>
            </tr>
          </tbody>
        </table>  
      </div>
    </div>
  );
}
