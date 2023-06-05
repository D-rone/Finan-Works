import React, { useEffect } from "react";
import "../global/popUpStyle.css";
import quit from "../../../assets/quitX.svg";

export default function SubChapData({ data, handleSubChapterClick }) {
  console.log(data.articles);
  let articles = data?.articles;
  let articlesText = articles.reduce(function (prevVal, currVal, idx) {
    let data = `${currVal.nom} : ${currVal.text}`;
    return idx == 0 ? (
      data
    ) : (
      <>
        {prevVal} <br />
        <br /> {data}
      </>
    );
  }, "");
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
              <th>Articles </th>
              <td>
                <div className="profileData" id="articlesData">
                  {articlesText}
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
