import React from "react";
import filterImg from "../../../assest/filter.svg";
import downloadImg from "../../../assest/download.svg";
import prevImg from "../../../assest/prev.svg";
import nextImg from "../../../assest/next.svg";
import sendMoneyImg from "../../../assest/sendMoney.svg";
import addEmployee from "../../../assest/addEmployee.svg";
import delEmployee from "../../../assest/deleteEmployee.svg";
import testAvatar from "../../../assest/test.svg";

import "./employeeListStyle.css";
import EmployeeListItems from "./EmployeeListItems";
import { useState, useEffect } from "react";
import Employee from "./Employee";
import TopBar from "../global/TopBar";
import topG from "../../../assest/topG.PNG"

let employeesList = [
  {
    isChecked: false,
    image: testAvatar,
    name: "Mohamed Ouksili",
    id: "EM193",
    email: "mohamedouksili27asjdgkl@gmail.com",
    type: "Cleaner",
    phone: "0669291946",
  },
  {
    isChecked: false,
    image: topG,
    name: "Koussaila Benhammouch",
    id: "EM123",
    email: "k.benhammouch@esi-sba.dz",
    type: "Assistant",
    phone: "0554656876",
  },
  {
    isChecked: false,
    image: testAvatar,
    name: "Ibrahim Ghoual",
    id: "EM105",
    email: "i.ghoual@esi-sba.dz",
    type: "Professor",
    phone: "074984987",
  },
  {
    isChecked: false,
    image: topG,
    name: "Tbahriti Mohamed",
    id: "EM892",
    email: "m.tbahriti@esi-sba.dz",
    type: "Doctor",
    phone: "0856487987",
  },
  {
    isChecked: false,
    image: testAvatar,
    name: "Beddal Khaled",
    id: "EM130",
    email: "k.beddal@gmail.com",
    type: "Teacher",
    phone: "0687987456",
  },
  {
    isChecked: false,
    image: topG,
    name: "Cerra Chraka Adel",
    id: "EM199",
    email: "a.cerra-chraka@gmail.com",
    type: "Ingeneer",
    phone: "05448978987",
  },
];

export default function EmployeeList() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    if (employeesList.length <= 6) setUsers(employeesList);
  }, []);

  let checkHandle = (e) => {
    let { name, checked } = e.target;
    let tmp;
    if (name === "all") {
      tmp = users.map((user) => ({ ...user, isChecked: checked }));
    } else {
      tmp = users.map((user) =>
        user.id === name ? { ...user, isChecked: checked } : user
      );

      document.querySelector("#allCheckbox").checked = tmp.every(
        (user) => user.isChecked
      )
        ? true
        : false;
    }
    setUsers(tmp);
  };

  let [showProfile, setShownProfile] = useState({ show: false, uid: null });

  let handleProfileClick = (e) => {
    let uid = e.target.dataset.uid;
    setShownProfile((prevState) => {
      return { show: !prevState.show, uid: uid };
    });
  };
  useEffect(() => {
    if (showProfile.show) {
      console.log();
    }
  }, [showProfile]);

  let DisplayProfile = () => {
    if (showProfile.show && showProfile.uid) {
      let profileData = users.filter((user) => user.id === showProfile.uid)[0];
      return (
        <Employee data={profileData} handleProfileClick={handleProfileClick} />
      );
    }
  };

  return (
    <section id="mainSection">
      <DisplayProfile />
      <TopBar />
      <div id="employeeList">
        <header>
          <h2>Employee list</h2>
          <div className="headerOptions">
            <button id="filter">
              <img src={filterImg} alt="" />
              Filter
            </button>
            <button id="download">
              <img src={downloadImg} alt="" />
              Download
            </button>
            <button id="prev">
              <img src={prevImg} alt="" />
            </button>
            <button id="next">
              <img src={nextImg} alt="" />
            </button>
          </div>
        </header>
        <main>
          <table id="employeeListTable">
            <thead>
              <tr>
                <th width="3.5%"></th>
                <th width="8.3%" className="checkbox">
                  <div className="checkContainer">
                    <input
                      type="checkbox"
                      id="allCheckbox"
                      name="all"
                      onChange={checkHandle}
                    />{" "}
                    All
                  </div>
                </th>
                <th width="29%">
                  <div>Employee name</div>
                </th>
                <th width="13.9%">
                  <div>Id</div>
                </th>
                <th width="26%">
                  <div>Email</div>
                </th>
                <th width="17.3%">
                  <div>Type</div>
                </th>
                <th width="2%"></th>
              </tr>
            </thead>
            <EmployeeListItems
              checkHandle={checkHandle}
              users={users}
              handleProfileClick={handleProfileClick}
            />
          </table>
        </main>
        <footer>
          <div className="footerOptions">
            <button id="sendMoney">
              <img src={sendMoneyImg} alt="" />
              Send money
            </button>
            <button id="addEmployee">
              <img src={addEmployee} alt="" />
              Add
            </button>
            <button id="delEmployee">
              <img src={delEmployee} alt="" />
              Delete
            </button>
          </div>
        </footer>
      </div>
    </section>
  );
}
