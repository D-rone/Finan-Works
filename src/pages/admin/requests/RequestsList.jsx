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

import rejectedLogo from "../../../assets/rejected.svg";
import pendingLogo from "../../../assets/pending.svg";
import acceptedUnpaid from "../../../assets/acceptedUnpaid.svg";
import acceptedPaid from "../../../assets/acceptedPaid.svg";
import allLogo from "../../../assets/allStatus.svg";

let dataFetched = {
  from: 9,
  to: 17,
  size: 24,
  list: [
    {
      employeeImage: testAvatar,
      employeeName: "Mohamed Ouksili",
      id: "EM193",
      date: "01-01-2023, 05:10 AM",
      status: "rejected",
      employeeType: "Cleaner",
      amount: 10000,
    },
    {
      employeeImage: topG,
      employeeName: "Koussaila Benhammouch",
      id: "EM123",
      date: "01-01-2023, 05:10 AM",
      status: "accepted - paid",
      employeeType: "Assistant",
      amount: 5000,
    },
    {
      employeeImage: testAvatar,
      employeeName: "Ibrahim Ghoual",
      id: "EM105",
      date: "01-01-2023, 05:10 AM",
      status: "accepted - unpaid",
      employeeType: "Professor",
      amount: 30000,
    },
    {
      employeeImage: topG,
      employeeName: "Tbahriti Mohamed",
      id: "EM892",
      date: "01-01-2023, 05:10 AM",
      status: "pending",
      employeeType: "Doctor",
      amount: 21000,
    },
    {
      employeeImage: testAvatar,
      employeeName: "Beddal Khaled",
      id: "EM130",
      date: "01-01-2023, 05:10 AM",
      status: "accepted - paid",
      employeeType: "Teacher",
      amount: 12000,
    },
    {
      employeeImage: topG,
      employeeName: "Cerra Chraka Adel Mohamed Amine",
      id: "EM199",
      date: "01-01-2023, 05:10 AM",
      status: "pending",
      employeeType: "Ingeneer",
      amount: 9000,
    },
    {
      employeeImage: topG,
      employeeName: "Cerra Chraka Adel Mohamed Amine",
      id: "EM19",
      date: "01-01-2023, 05:10 AM",
      status: "pending",
      employeeType: "Ingeneer",
      amount: 9000,
    },
    {
      employeeImage: topG,
      employeeName: "Cerra Chraka Adel Mohamed Amine",
      id: "EM99",
      date: "01-01-2023, 05:10 AM",
      status: "rejected",
      employeeType: "Ingeneer",
      amount: 9000,
    },
  ],
};

let requestsList = dataFetched.list;

export default function RequestsList() {
  let [requests, setRequests] = useState([]);

  let [showRequest, setShownRequest] = useState({ show: false, id: null });

  useEffect(() => {
    document.head.getElementsByTagName("title")[0].innerHTML = "Requests";
    setRequests(requestsList);
  }, []);

  let handleRequestClick = (e) => {
    let element = e.target;
    let id = undefined;
    if (!showRequest.show) {
      while (element.tagName != "TR") element = element.parentNode;
      id = element.dataset.id;
    }
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
        <RequestData
          data={requestData}
          handleRequestClick={handleRequestClick}
        />
      );
    }
  };

  let [filter, setFilter] = useState({
    options: ["rejected", "pending", "paid", "unpaid"],
    display: false,
  });
  let [tmpFilter, setTmpFilter] = useState({
    options: ["rejected", "pending", "paid", "unpaid"],
  });

  let handleFilterClick = () => {
    setFilter((prev) => {
      return { display: !prev.display, options: prev.options };
    });
  };

  let checkHandle = (e) => {
    let { checked, name } = e.target;
    let options;
    if (name == "all") {
      if (checked) {
        options = ["rejected", "pending", "unpaid", "paid"];
      } else options = [];
      setTmpFilter(() => {
        return {
          options: options,
        };
      });
    } else {
      setTmpFilter((prev) => {
        options = prev.options;
        if (checked && !options.includes(name)) {
          options.push(name);
        } else {
          var index = options.indexOf(name);
          if (index > -1) {
            options.splice(index, 1);
          }
        }
        return { options: options };
      });
    }
  };
  let DisplayFilter = () => {
    if (filter.display) {
      return (
        <div id="filterContainer">
          <table>
            <thead>
              <tr>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    id="allCheck"
                    name="all"
                    checked={tmpFilter.options.length == 4}
                    onChange={checkHandle}
                  />
                </td>
                <td>
                  <img src={allLogo} alt="" />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    id="paidCheck"
                    name="paid"
                    checked={tmpFilter.options.includes("paid")}
                    onChange={checkHandle}
                  />
                </td>
                <td>
                  <img src={acceptedPaid} alt="" />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    id="unpaidCheck"
                    name="unpaid"
                    checked={tmpFilter.options.includes("unpaid")}
                    onChange={checkHandle}
                  />
                </td>
                <td>
                  <img src={acceptedUnpaid} alt="" />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    id="pendingCheck"
                    name="pending"
                    checked={tmpFilter.options.includes("pending")}
                    onChange={checkHandle}
                  />
                </td>
                <td>
                  <img src={pendingLogo} alt="" />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    id="rejectedCheck"
                    name="rejected"
                    checked={tmpFilter.options.includes("rejected")}
                    onChange={checkHandle}
                  />
                </td>
                <td>
                  <img src={rejectedLogo} alt="" />
                </td>
              </tr>
              <tr>
                <td></td>
                <td>
                  <button id="applyFilter" onClick={applyFilter}>
                    Apply
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      );
    }
  };

  let AppliedFilters = () => {
    if (filter.options.length === 4) {
      return (
        <div>
          <img src={allLogo} alt="" />
        </div>
      );
    } else {
      return (
        <>
          {filter.options.map((item) => {
            let srcImage;
            switch (item) {
              case "rejected":
                srcImage = rejectedLogo;
                break;

              case "pending":
                srcImage = pendingLogo;
                break;
              case "paid":
                srcImage = acceptedPaid;
                break;
              case "unpaid":
                srcImage = acceptedUnpaid;
                break;
            }

            return (
              <div key={item}>
                <img src={srcImage} alt="item" />
              </div>
            );
          })}
        </>
      );
    }
  };

  let applyFilter = () => {
    setFilter({ display: true, options: [...tmpFilter.options] });
    console.log("done ");
  };

  return (
    <section id="mainSection">
      <DisplayRequest />
      <TopBar />
      <div className="pageList" id="requestsList">
        <header>
          <h2>Requests</h2>
          <div id="appliedFilters">
            <AppliedFilters />
          </div>
          <div className="headerOptions">
            <button id="filter" onClick={handleFilterClick}>
              <img src={filterImg} alt="" />
              Filter
            </button>
            <DisplayFilter />
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
                  <th width="2%"></th>
                  <th width="23.7%">
                    <div>Employee name</div>
                  </th>
                  <th width="13.8%">
                    <div>Type</div>
                  </th>
                  <th width="21%">
                    <div>Date</div>
                  </th>
                  <th width="13.8%">
                    <div>Amount</div>
                  </th>
                  <th width="24.7%">
                    <div>Status</div>
                  </th>
                  <th width="13px"></th>
                </tr>
              </thead>
            </table>
          </div>
          <div id="tableBody">
            <table>
              <thead>
                <tr>
                  <th style={{ height: "0px" }} width="4%"></th>
                  <th style={{ height: "0px" }} width="23.7%"></th>
                  <th style={{ height: "0px" }} width="13.8%"></th>
                  <th style={{ height: "0px" }} width="21%"></th>
                  <th style={{ height: "0px" }} width="13.8%"></th>
                  <th style={{ height: "0px" }} width="24.7%"></th>
                </tr>
              </thead>
              <Request
                requests={requests}
                handleRequestClick={handleRequestClick}
              />
            </table>
          </div>
        </main>
        <div id="pageNb">
          Showing{" "}
          <span>
            {dataFetched.from}-{dataFetched.to}
          </span>{" "}
          from <span>{dataFetched.size}</span> results
        </div>
      </div>
    </section>
  );
}
