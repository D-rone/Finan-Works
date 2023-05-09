import React from "react";
import "./Employee.css";
import quit from "../../../assest/quitX.svg"

export default function Employee({ data, handleProfileClick }) {
  return (
    <div id="shade">
      <div id="profileContainer">
        <button onClick={handleProfileClick} id="quitBtn"><img src={quit} alt=""></img></button>
        <h2>
            Employee Information
        </h2>

        <table>
            <tr>
                <th>Picture : </th>
                <td> <img src={data.image}/> </td>
            </tr>
            <tr>
                <th>Name :</th>
                <td>{data.name}</td>
            </tr>
            <tr>
                <th>Email : </th>
                <td>{data.email}</td>
            </tr>
            <tr>
                <th>Type</th>
                <td>{data.type}</td>
            </tr>
            <tr>
                <th>N° Tel :</th>
                <td>{data.phone}</td>
            </tr>
        </table>
      
      </div>
    </div>
  );
}
