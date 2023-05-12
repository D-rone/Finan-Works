import React from "react";

import filterImg from "../../../assets/filter.svg";
import prevImg from "../../../assets/prev.svg";
import nextImg from "../../../assets/next.svg";

import testAvatar from "../../../assets/test.svg";

import "../global/pageStyle.css";
import Request from "./Request";
import { useState, useEffect } from "react";
import RequestData from "./ReqeustData";
import TopBar from "../global/TopBar";
import topG from "../../../assets/topG.PNG";

let requestsList = [
  {
    employeeImage: testAvatar,
    employeeName: "Mohamed Ouksili",
    id: "EM193",
    date: "01-01-2023, 05:10 AM",
    status: "Rejected",
    employeeType: "Cleaner",
    amount: 10000,
  },
  {
    employeeImage: topG,
    employeeName: "Koussaila Benhammouch",
    id: "EM123",
    date: "01-01-2023, 05:10 AM",
    status: "Accepted - paid",
    employeeType: "Assistant",
    amount: 5000,
  },
  {
    employeeImage: testAvatar,
    employeeName: "Ibrahim Ghoual",
    id: "EM105",
    date: "01-01-2023, 05:10 AM",
    status: "Accepted - not paid",
    employeeType: "Professor",
    amount: 30000,
  },
  {
    employeeImage: topG,
    employeeName: "Tbahriti Mohamed",
    id: "EM892",
    date: "01-01-2023, 05:10 AM",
    status: "Pending",
    employeeType: "Doctor",
    amount: 21000,
  },
  {
    employeeImage: testAvatar,
    employeeName: "Beddal Khaled",
    id: "EM130",
    date: "01-01-2023, 05:10 AM",
    status: "Accepted - paid",
    employeeType: "Teacher",
    amount: 12000,
  },
  {
    employeeImage: topG,
    employeeName: "Cerra Chraka Adel Mohamed Amine",
    id: "EM199",
    date: "01-01-2023, 05:10 AM",
    status: "Pending",
    employeeType: "Ingeneer",
    amount: 9000,
  },
  {
    employeeImage: topG,
    employeeName: "Cerra Chraka Adel Mohamed Amine",
    id: "EM19",
    date: "01-01-2023, 05:10 AM",
    status: "Pending",
    employeeType: "Ingeneer",
    amount: 9000,
  },
  {
    employeeImage: topG,
    employeeName: "Cerra Chraka Adel Mohamed Amine",
    id: "EM99",
    date: "01-01-2023, 05:10 AM",
    status: "Rejected",
    employeeType: "Ingeneer",
    amount: 9000,
  },
];

export default function RequestsList() {
  let [requests, setRequests] = useState([]);

  let [showRequest, setShownRequest] = useState({ show: false, id: null });

  useEffect(() => {
    document.head.getElementsByTagName("title")[0].innerHTML = "Requests";
    setRequests(requestsList);
  }, []);

  let handleViewClick = (e) => {
    let id = e.target.dataset.id;
    setShownRequest((prevState) => {
      return { show: !prevState.show, id: id };
    });
  };

  let DisplayRequest = () => {
    if (showRequest.show && showRequest.id) {
      let requestData = requests.filter(
        (request) => request.id === showRequest.id
      )[0];
      return (
        <RequestData data={requestData} handleViewClick={handleViewClick} />
      );
    }
  };

  return (
    <section id="mainSection">
      <DisplayRequest />
      <TopBar />
      <div className="pageList" id="requestsList">
        <header>
          <h2>Requests</h2>
          <div className="headerOptions">
            <button id="filter">
              <img src={filterImg} alt="" />
              Filter
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
                  <th width="">
                    <div>Employee name</div>
                  </th>
                  <th width="">
                    <div>Type</div>
                  </th>
                  <th width="">
                    <div>Amount</div>
                  </th>
                  <th width="">
                    <div>Date</div>
                  </th>
                  <th width="">
                    <div>Status</div>
                  </th>
                  <th width=""></th>
                </tr>
              </thead>
            </table>
          </div>
          <div id="tableBody">
            <table>
              <thead>
                <tr>
                  <th style={{ height: "0px" }} width=""></th>
                  <th style={{ height: "0px" }} width=""></th>
                  <th style={{ height: "0px" }} width=""></th>
                  <th style={{ height: "0px" }} width=""></th>
                  <th style={{ height: "0px" }} width=""></th>
                  <th style={{ height: "0px" }} width=""></th>
                </tr>
              </thead>
              <Request requests={requests} handleViewClick={handleViewClick} />
            </table>
          </div>
        </main>
      </div>
    </section>
  );
}
