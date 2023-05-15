import React from "react";
import prevImg from "../../../assets/prev.svg";
import nextImg from "../../../assets/next.svg";
import delEmployee from "../../../assets/deleteEmployee.svg";

import "../global/globalStyle.css";
import SubChap from "./SubChap";
import { useState, useEffect } from "react";
import SubChapData from "./SubChapData";
import TopBar from "../global/TopBar";

let dataFetched = {
  chapterName: "Aide Sociale",
  list: [
    {
      name: "Sous Chap 1",
      amount: 5000,
      articles: [
        { name: "Article 1", description: "hello world" },
        { name: "Article 2", description: "hello world" },
        { name: "Article 3", description: "hello world" },
        { name: "Article 4", description: "hello world" },
      ],
      isHidden: false,
    },
    {
      name: "Sous Chap 2",
      amount: 5000,
      articles: [
        { name: "Article 1", description: "hello world" },
        { name: "Article 2", description: "hello world" },
        { name: "Article 3", description: "hello world" },
        { name: "Article 4", description: "hello world" },
      ],
      isHidden: true,
    },
    {
      name: "Sous Chap 3",
      amount: 5000,
      articles: [
        { name: "Article 1", description: "hello world" },
        { name: "Article 2", description: "hello world" },
        { name: "Article 3", description: "hello world" },
        { name: "Article 4", description: "hello world" },
      ],
      isHidden: false,
    },
    {
      name: "Sous Chap 4",
      amount: 5000,
      articles: [
        { name: "Article 1", description: "hello world" },
        { name: "Article 2", description: "hello world" },
        { name: "Article 3", description: "hello world" },
      ],
      isHidden: false,
    },
    {
      name: "Sous Chap 5",
      amount: 5000,
      articles: [
        { name: "Article 1", description: "hello world" },
        { name: "Article 2", description: "hello world" },
        { name: "Article 3", description: "hello world" },
        { name: "Article 4", description: "hello world" },
      ],
      isHidden: true,
    },
  ],
};

let subChaptersList = dataFetched.list;

export default function SubChaptersList() {
  let [subChapters, setSubChapters] = useState([]);

  let url = window.location.href;
  let urlParams = url.substring(url.lastIndexOf("?"))
  console.log(new URLSearchParams(urlParams).get("chapter"));

  useEffect(() => {
    document.head.getElementsByTagName("title")[0].innerHTML =
      dataFetched.chapterName;
    setSubChapters(subChaptersList);
  }, []);

  let checkHandle = (e) => {
    let { name, checked } = e.target;
    let tmp;
    if (name === "all") {
      tmp = subChapters.map((subChp) => ({ ...subChp, isHidden: checked }));
    } else {
      tmp = subChapters.map((subChp) =>
        subChp.name === name ? { ...subChp, isHidden: checked } : subChp
      );

      document.querySelector("#allCheckbox").checked = tmp.every(
        (subChp) => subChp.isHidden
      )
        ? true
        : false;
    }
    setSubChapters(tmp);
  };

  let [showArticles, setShownArticles] = useState({
    show: false,
    subChapterName: null,
  });

  let handleSubChapterClick = (e) => {
    let subChapterName = e.target.dataset.subchaptername;
    setShownArticles((prevState) => {
      return { show: !prevState.show, subChapterName: subChapterName };
    });
  };

  let DisplayArticles = () => {
    if (showArticles.show && showArticles.subChapterName) {
      let subChpData = subChapters.filter(
        (subChp) => subChp.name === showArticles.subChapterName
      )[0];
      return (
        <SubChapData
          data={subChpData}
          handleSubChapterClick={handleSubChapterClick}
        />
      );
    }
  };

  return (
    <section id="mainSection">
      <DisplayArticles />
      <TopBar />
      <div className="pageList" id="subChaptersList">
        <header>
          <h2>
            Sub-Chapters of <b>{dataFetched.chapterName}</b>
          </h2>
          <div className="headerOptions">
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
                  <th width="4%"></th>
                  <th width="8.3%" className="checkbox">
                    <div className="checkContainer">
                      <input
                        type="checkbox"
                        id="allCheckbox"
                        name="all"
                        onChange={checkHandle}
                      />
                      All
                    </div>
                  </th>
                  <th width="30%">
                    <div>Sub-Chapter name</div>
                  </th>
                  <th width="17.3%">
                    <div>Amount</div>
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
                  <th style={{ height: "0px" }} width="29%"></th>
                  <th style={{ height: "0px" }} width="17.3%"></th>
                </tr>
              </thead>
              <SubChap
                checkHandle={checkHandle}
                subChapters={subChapters}
                handleSubChapterClick={handleSubChapterClick}
              />
            </table>
          </div>
        </main>
        <div id="tableFooterSpacer"></div>
        <footer>
          <div className="footerOptions">
            <button id="delEmployee">
              <img src={delEmployee} alt="" />
              Hide
            </button>
          </div>
          <div id="pageNb">Displayed {subChapters.length} results</div>
        </footer>
      </div>
    </section>
  );
}
