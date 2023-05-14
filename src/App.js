import React, { useState } from "react";
import Admin from "./pages/admin/Admin.js";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/admin/dashboard/Dashboard.jsx";
import EmployeeList from "./pages/admin/employeeList/EmployeeList.jsx";
import Login from "./pages/login/Login.jsx";
import "./App.css";
import Page_404 from "./pages/Page_404.jsx";
import RequestsList from "./pages/admin/requests/RequestsList.jsx";
import Program from "./pages/admin/programs/ProgramList";
export default function App() {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const submitForm = () => {
    setFormIsSubmitted(true);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              Finan-works
              <Link to="admin">Admin Page</Link>
              <Link to="login">Login Page</Link>
            </div>
          }
        />
        <Route path="admin" element={<Admin />}>
          <Route path="" element={<Dashboard el="Dashboard" />} />
          <Route path="employee_list" element={<EmployeeList />} />
          <Route path="requests" element={<RequestsList />} />
          <Route path="winners" element={<Dashboard el="Winners" />} />
          <Route path="history" element={<Dashboard el="History" />} />
          <Route path="programs" element={<Program el="Programs" />} />
          <Route
            path="announcements"
            element={<Dashboard el="Announcements" />}
          />
        </Route>
        <Route
          path="login"
          element={
            <div>
              {" "}
              {!formIsSubmitted ? (
                <Login submitForm={submitForm} />
              ) : (
                <Admin />
              )}{" "}
            </div>
          }
        />
        <Route path="*" element={<Page_404 />} />
      </Routes>
    </BrowserRouter>
  );
}
