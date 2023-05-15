import React from "react";

import prevImg from "../../../assets/prev.svg";
import nextImg from "../../../assets/next.svg";

import { RiAddCircleLine } from "react-icons/ri";
import { SlOptions } from "react-icons/sl";

import "./programStyle.css";

import { useState, useEffect } from "react";

import TopBar from "../global/TopBar";

let programList = [
  {
    name: "chapitre 1",
    id: "aide social",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel ",
    nb_sub_ch: "5",
  },
  {
    name: "chapitre 2",
    id: "Service de santé ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel ",
    nb_sub_ch: "4",
  },
  {
    name: "chapitre 3",
    id: "Solidarité",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel ",
    nb_sub_ch: "6",
  },
  {
    name: "chapitre 4",
    id: "Le prêt social ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel ",
    nb_sub_ch: "5",
  },
  {
    name: "chapitre 5",
    id: "Les activités culturelles ",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,molestiae quas vel ",
    nb_sub_ch: "1",
  },
];

export default function ProgramList() {
  let [users, setUsers] = useState([]);

  useEffect(() => {
    setUsers(programList);
  }, []);

  return (
    <section id="mainSection">
      <TopBar />
      <div id="employeeList">
        <header>
          <h2>Programs</h2>
          <div className="headerOptions">
            <button id="prev">
              <img src={prevImg} alt="" />
            </button>
            <button id="next">
              <img src={nextImg} alt="" />
            </button>
          </div>
        </header>
        <main className="grid lg:grid-cols-3 padding">
          {programList.map((card) => (
            <div className="btn_program">
              <div className="card_icon">
                <SlOptions />
              </div>
              <div className="icon_sch">
                <svg
                  width="92"
                  height="32"
                  viewBox="0 0 92 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_518_6160" fill="white">
                    <path d="M92 24C92 28.4183 88.4183 32 84 32L60 32V0L84 0C88.4183 0 92 3.58172 92 8V24Z" />
                  </mask>
                  <path
                    d="M92 24C92 28.4183 88.4183 32 84 32L60 32V0L84 0C88.4183 0 92 3.58172 92 8V24Z"
                    fill="#557384"
                    fill-opacity="0.1"
                  />
                  <path
                    d="M93 24C93 28.9706 88.9706 33 84 33L60 33V31L84 31C87.866 31 91 27.866 91 24H93ZM60 -1L84 -1C88.9706 -1 93 3.02944 93 8H91C91 4.13401 87.866 1 84 1L60 1V-1ZM84 -1C88.9706 -1 93 3.02944 93 8V24C93 28.9706 88.9706 33 84 33V31C87.866 31 91 27.866 91 24V8C91 4.13401 87.866 1 84 1V-1ZM60 32V0V32Z"
                    fill="white"
                    fill-opacity="0.1"
                    mask="url(#path-1-inside-1_518_6160)"
                  />
                  <mask id="path-3-inside-2_518_6160" fill="white">
                    <path d="M81 24C81 28.4183 77.4183 32 73 32L49 32V0L73 0C77.4183 0 81 3.58172 81 8V24Z" />
                  </mask>
                  <path
                    d="M81 24C81 28.4183 77.4183 32 73 32L49 32V0L73 0C77.4183 0 81 3.58172 81 8V24Z"
                    fill="#557384"
                    fill-opacity="0.2"
                  />
                  <path
                    d="M82 24C82 28.9706 77.9706 33 73 33L49 33V31L73 31C76.866 31 80 27.866 80 24H82ZM49 -1L73 -1C77.9706 -1 82 3.02944 82 8H80C80 4.13401 76.866 1 73 1L49 1V-1ZM73 -1C77.9706 -1 82 3.02944 82 8V24C82 28.9706 77.9706 33 73 33V31C76.866 31 80 27.866 80 24V8C80 4.13401 76.866 1 73 1V-1ZM49 32V0V32Z"
                    fill="white"
                    fill-opacity="0.2"
                    mask="url(#path-3-inside-2_518_6160)"
                  />
                  <mask id="path-5-inside-3_518_6160" fill="white">
                    <path d="M70 24C70 28.4183 66.4183 32 62 32L38 32V0L62 0C66.4183 0 70 3.58172 70 8V24Z" />
                  </mask>
                  <path
                    d="M70 24C70 28.4183 66.4183 32 62 32L38 32V0L62 0C66.4183 0 70 3.58172 70 8V24Z"
                    fill="#557384"
                    fill-opacity="0.3"
                  />
                  <path
                    d="M71 24C71 28.9706 66.9706 33 62 33L38 33V31L62 31C65.866 31 69 27.866 69 24H71ZM38 -1L62 -1C66.9706 -1 71 3.02944 71 8H69C69 4.13401 65.866 1 62 1L38 1V-1ZM62 -1C66.9706 -1 71 3.02944 71 8V24C71 28.9706 66.9706 33 62 33V31C65.866 31 69 27.866 69 24V8C69 4.13401 65.866 1 62 1L62 -1ZM38 32V0V32Z"
                    fill="white"
                    fill-opacity="0.3"
                    mask="url(#path-5-inside-3_518_6160)"
                  />
                  <mask id="path-7-inside-4_518_6160" fill="white">
                    <path d="M58 24C58 28.4183 54.4183 32 50 32L26 32L26 0L50 0C54.4183 0 58 3.58172 58 8V24Z" />
                  </mask>
                  <path
                    d="M58 24C58 28.4183 54.4183 32 50 32L26 32L26 0L50 0C54.4183 0 58 3.58172 58 8V24Z"
                    fill="#557384"
                    fill-opacity="0.4"
                  />
                  <path
                    d="M59 24C59 28.9706 54.9706 33 50 33L26 33V31L50 31C53.866 31 57 27.866 57 24H59ZM26 -1L50 -1C54.9706 -1 59 3.02944 59 8H57C57 4.13401 53.866 1 50 1L26 1V-1ZM50 -1C54.9706 -1 59 3.02944 59 8V24C59 28.9706 54.9706 33 50 33V31C53.866 31 57 27.866 57 24V8C57 4.13401 53.866 1 50 1L50 -1ZM26 32L26 0L26 32Z"
                    fill="white"
                    fill-opacity="0.4"
                    mask="url(#path-7-inside-4_518_6160)"
                  />
                  <mask id="path-9-inside-5_518_6160" fill="white">
                    <path d="M45 24C45 28.4183 41.4183 32 37 32L13 32L13 0L37 0C41.4183 0 45 3.58172 45 8V24Z" />
                  </mask>
                  <path
                    d="M45 24C45 28.4183 41.4183 32 37 32L13 32L13 0L37 0C41.4183 0 45 3.58172 45 8V24Z"
                    fill="#557384"
                    fill-opacity="0.5"
                  />
                  <path
                    d="M46 24C46 28.9706 41.9706 33 37 33L13 33V31L37 31C40.866 31 44 27.866 44 24H46ZM13 -1L37 -1C41.9706 -1 46 3.02944 46 8H44C44 4.13401 40.866 1 37 1L13 1V-1ZM37 -1C41.9706 -1 46 3.02944 46 8V24C46 28.9706 41.9706 33 37 33V31C40.866 31 44 27.866 44 24V8C44 4.13401 40.866 1 37 1L37 -1ZM13 32L13 0L13 32Z"
                    fill="white"
                    fill-opacity="0.5"
                    mask="url(#path-9-inside-5_518_6160)"
                  />
                  <rect
                    x="31.5"
                    y="31.5"
                    width="31"
                    height="31"
                    rx="7.5"
                    transform="rotate(-180 31.5 31.5)"
                    fill="#557384"
                    stroke="white"
                  />
                </svg>
              </div>
              <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#3A6D7B"
                  d="M66.7,-28.9C72.1,-5.1,52.3,19.8,32.3,31.2C12.2,42.6,-7.9,40.7,-15.4,32.6C-22.8,24.5,-17.4,10.3,-12.7,-12.5C-8,-35.3,-4,-66.8,13.3,-71.1C30.7,-75.4,61.3,-52.7,66.7,-28.9Z"
                  transform="translate(150 150)"
                />
                <path
                  fill="#3A6D7B"
                  d="M57,-18.7C65.5,7.6,58.3,38.9,38.7,53.1C19.1,67.3,-12.8,64.4,-36.5,47.8C-60.1,31.2,-75.6,0.8,-68.1,-24.1C-60.7,-49,-30.3,-68.5,-3,-67.5C24.3,-66.5,48.5,-45.1,57,-18.7Z"
                  transform="translate(50 50  20)"
                />
              </svg>

              <div className="n_ch">{card.name}</div>
              <div className="name_ch">{card.description}</div>
              <div className="sub_ch">{card.nb_sub_ch}</div>
              <button className="card_body">
                <div className="card_title">{card.name} :</div>
                <div className="card_sub">{card.id}</div>

                <div className="add_icon">{card.icon}</div>
              </button>
            </div>
          ))}

          <button className="btn_program">
            <div className="add_icon">
              <RiAddCircleLine />
            </div>{" "}
          </button>
        </main>
      </div>
    </section>
  );
}
