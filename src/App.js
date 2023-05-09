import React from "react";
import Admin_dashboard from "./pages/admin/Admin.js";
import { BrowserRouter } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Admin_dashboard />
    </BrowserRouter>
  );
}
