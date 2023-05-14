import React from "react";
import filterImg from "../../../assets/filter.svg";
import downloadImg from "../../../assets/download.svg";
import prevImg from "../../../assets/prev.svg";
import nextImg from "../../../assets/next.svg";
import sendMoneyImg from "../../../assets/sendMoney.svg";
import addEmployee from "../../../assets/addEmployee.svg";
import delEmployee from "../../../assets/deleteEmployee.svg";
import testAvatar from "../../../assets/test.svg";

import "../global/globalStyle.css";
import Employee from "./Employee";
import { useState, useEffect } from "react";
import EmployeeData from "./EmployeeData";
import TopBar from "../global/TopBar";
import topG from "../../../assets/topG.PNG";
import AddEmployeeForm from "./AddEmployeeForm";

let dataFetched = {
  from: 21,
  to: 31,
  size: 234,
  list: [
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
      name: "Cerra Chraka Adel Mohamed Amine",
      id: "EM199",
      email: "a.cerra-chraka@gmail.com",
      type: "Ingeneer",
      phone: "05448978987",
    },
    {
      isChecked: false,
      image: topG,
      name: "Cerra Chraka Adel Mohamed Amine",
      id: "EM19",
      email: "a.cerra-chraka@gmail.com",
      type: "Ingeneer",
      phone: "05448978987",
    },
    {
      isChecked: false,
      image: topG,
      name: "Cerra Chraka Adel Mohamed Amine",
      id: "EM99",
      email: "a.cerra-chraka@gmail.com",
      type: "Ingeneer",
      phone: "05448978987",
    },
    {
      isChecked: false,
      image: topG,
      name: "Cerra Chraka Adel Mohamed Amine",
      id: "E199",
      email: "a.cerra-chraka@gmail.com",
      type: "Ingeneer",
      phone: "05448978987",
    },
    {
      isChecked: false,
      image: topG,
      name: "Cerra Chraka Adel Mohamed Amine",
      id: "M199",
      email: "a.cerra-chraka@gmail.com",
      type: "Ingeneer",
      phone: "05448978987",
    },
  ],
};

let employeesList = dataFetched.list;

export default function EmployeeList() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    document.head.getElementsByTagName("title")[0].innerHTML = "Employee List";
    setUsers(employeesList);
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

  let DisplayProfile = () => {
    if (showProfile.show && showProfile.uid) {
      let profileData = users.filter((user) => user.id === showProfile.uid)[0];
      return (
        <EmployeeData
          data={profileData}
          handleProfileClick={handleProfileClick}
        />
      );
    }
  };

  let [addEmployeeForm, setAddEmployeeForm] = useState(false);

  let toggleAddProfileForm = () => {
    setAddEmployeeForm((prev) => !prev);
  };

  let DisplayAddProfileForm = () => {
    if (addEmployeeForm)
      return <AddEmployeeForm toggle={toggleAddProfileForm} />;
  };

  return (
    <section id="mainSection">
      <DisplayProfile />
      <DisplayAddProfileForm />
      <TopBar />
      <div className="pageList" id="employeeList">
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
          <div id="tableHeader">
            <table id="listTable">
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
            </table>
          </div>
          <div id="tableBody">
            <table id="listTable">
              <thead>
                <tr>
                  <th style={{ height: "0px" }} width="4%"></th>
                  <th style={{ height: "0px" }} width="8.3%"></th>
                  <th style={{ height: "0px" }} width="29%"></th>
                  <th style={{ height: "0px" }} width="14.4%"></th>
                  <th style={{ height: "0px" }} width="26%"></th>
                  <th style={{ height: "0px" }} width="17.3%"></th>
                </tr>
              </thead>
              <Employee
                checkHandle={checkHandle}
                users={users}
                handleProfileClick={handleProfileClick}
              />
            </table>
          </div>
        </main>
        <div id="tableFooterSpacer"></div>
        <footer>
          <div className="footerOptions">
            <button id="sendMoney">
              <img src={sendMoneyImg} alt="" />
              Send money
            </button>
            <button id="addEmployee" onClick={toggleAddProfileForm}>
              <img src={addEmployee} alt="" />
              Add
            </button>
            <button id="delEmployee">
              <img src={delEmployee} alt="" />
              Delete
            </button>
          </div>
          <div id="pageNb">
            Showing{" "}
            <span>
              {dataFetched.from}-{dataFetched.to}
            </span>{" "}
            from <span>{dataFetched.size}</span> results
          </div>
        </footer>
      </div>
    </section>
  );
}
