import React from "react";
import axios from "axios";

export default function User() {
  let logOut = async () => {
    try {
      const response = await axios.delete(
        "http://localhost:5000/api/v1/auth/logout",
        { withCredentials: true }
      );
      let data = await response.data;
      console.log(data?.msg);
      window.location.href = "/login";
    } catch (error) {
      console.log(error?.response?.data);
      window.location.href = "/404";
    }
  };
  return (
    <div>
      <h1>User Page</h1>
      <button onClick={logOut} id="logOut">
        LogOut
      </button>
    </div>
  );
}
