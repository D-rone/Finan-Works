import React, { useEffect } from "react";
import "./Employee.css";
import quit from "../../../assest/quitX.svg";

let data = {};
export default function AddEmployee({ toggle }) {
  useEffect(() => {
    const fileInput = document.getElementById("imageInput");
    fileInput.addEventListener("change", (e) => {
      const file = e.target.files[0];
      let fileReader = new FileReader();
      if (file) {
        fileReader.readAsDataURL(file);

        fileReader.onload = function () {
          fileInput.style.background = `url("${fileReader.result}")`
          fileInput.style.backgroundSize = "183px 183px"
        };
      }else{
        fileInput.style.background = `#d9d9d9`
      }
    });
  }, []);
  return (
    <div id="shade">
      <div id="profileContainer">
        <button onClick={toggle} id="quitBtn">
          <img src={quit} alt=""></img>
        </button>

        <h2>Add New Employee</h2>
        <table id="profileInfoTable">
          <tbody>
            <tr>
              <th>Picture : </th>
              <td>
                <input
                  type="file"
                  accept="image/png, image/jpeg"
                  id="imageInput"
                />
              </td>
            </tr>
            <tr>
              <th>Name :</th>
              <td>
                <div className="profileData">
                  <input type="text" placeholder="Employee Name" className="userDataInput" />
                </div>
              </td>
            </tr>
            <tr>
              <th>Email : </th>
              <td>
                <div className="profileData">
                  <input type="email" placeholder="Employee Email" className="userDataInput"/>
                </div>
              </td>
            </tr>
            <tr>
              <th>Type : </th>
              <td>
                <div className="profileData">
                  <input type="text" placeholder="Employee Type" className="userDataInput" />
                </div>
              </td>
            </tr>
            <tr>
              <th>N° Tel :</th>
              <td>
                <div className="profileData">
                  <input type="text" placeholder="Employee Phone Number" className="userDataInput" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
