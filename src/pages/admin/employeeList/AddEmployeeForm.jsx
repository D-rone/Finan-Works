import React, { useState, useEffect } from "react";
import "../global/popUpStyle.css";
import quit from "../../../assets/quitX.svg";
import validateAccount from "./validateNewEmployee";
import axios from "axios";

export default function AddEmployee({ toggle }) {
  let [newUser, setNewUser] = useState({
    email: "",
    name: "",
    password: "",
    type: "",
    phoneNumber: "",
  });
  let handleChange = (e) => {
    setNewUser((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  let [nameErr, setNameErr] = useState(true);
  let [emailErr, setEmailErr] = useState(true);
  let [phoneNb, setPhoneNb] = useState(true);
  let [serverErr, setServerErr] = useState({ msg: "" });
  let createEmployee = async () => {
    let validation = validateAccount({
      email: newUser.email,
      phoneNumber: newUser.phoneNumber,
      name: newUser.name,
    });

    if (validation.email && validation.phoneNb && validation.name) {
      let body = {
        email: newUser.email,
        name: newUser.name,
        password: "testuseronly",
        type: newUser.type,
        phoneNumber: newUser.phoneNumber,
      };

      try {
        const response = await axios.post(
          "http://localhost:5000/api/v1/auth/register",
          body,
          { withCredentials: true }
        );
        let data = await response.data;
        setServerErr({ msg: "" });
        console.log(data);
      } catch (error) {
        if (Math.floor(Number(error?.response?.status) / 100) === 4)
          setServerErr(error?.response?.data);
        else console.log(error?.response);
      }
    } else {
      setPhoneNb(validation.phoneNb);
      setEmailErr(validation.email);
      setNameErr(validation.name);
    }
  };
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
              <th>Name :</th>
              <td>
                <div className="profileData">
                  <input
                    type="text"
                    placeholder="Employee Name"
                    className="userDataInput"
                    name="name"
                    value={newUser.name}
                    onChange={handleChange}
                  />
                </div>
                {!nameErr && (
                  <div className="creationErr">Invalid Employee Name</div>
                )}
              </td>
            </tr>
            <tr>
              <th>Email : </th>
              <td>
                <div className="profileData">
                  <input
                    type="email"
                    placeholder="Employee Email"
                    className="userDataInput"
                    name="email"
                    value={newUser.email}
                    onChange={handleChange}
                    autoFocus={emailErr}
                  />
                </div>
                {!emailErr && (
                  <div className="creationErr">Invalid Email Address</div>
                )}
              </td>
            </tr>
            <tr>
              <th>Type : </th>
              <td>
                <div className="profileData">
                  <input
                    type="text"
                    placeholder="Employee Type"
                    className="userDataInput"
                    name="type"
                    value={newUser.type}
                    onChange={handleChange}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <th>N° Tel :</th>
              <td>
                <div className="profileData">
                  <input
                    type="text"
                    placeholder="Employee Phone Number"
                    className="userDataInput"
                    name="phoneNumber"
                    value={newUser.phoneNumber}
                    onChange={handleChange}
                  />
                </div>
                {!phoneNb && (
                  <div className="creationErr">Invalid Phone Number</div>
                )}
              </td>
            </tr>
          </tbody>
        </table>
        <button id="createEmplBtn" onClick={createEmployee}>
          Create Employee
        </button>
        <div id="errorContainer">{serverErr.msg}</div>
      </div>
    </div>
  );
}
