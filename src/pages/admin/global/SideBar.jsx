import React from "react";
import "./globalStyle.css";
import { Link } from "react-router-dom";

let routes = [
  {
    name: "Dashboard",
    path: "/",
  },
  {
    name: "Employee list",
    path: "/employee_list",
  },
];

export default function SideBar() {
  return (
    <>
      <div id="sidebar">Side Bar</div>
      <nav id="navbar">
        <ul>
          {routes.map((route) => (
            <li key={route.path}>
              <Link to={route.path}>{route.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}
