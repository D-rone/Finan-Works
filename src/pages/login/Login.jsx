import React from "react";
import { useState } from "react";
import imglogin from "../../assets/Image.png";
import Logo from "../../assets/Logo.png";

import "./login.css";
import validation from "./validation";
import { useEffect } from "react";
import UsePasswordToggle from "./UsePasswordToggle";

const Login = ({ submitForm }) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  useEffect(() => {
    if (Object.keys(errors).length === 0 && dataisCorrect) {
      submitForm(true);
    }
  });
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    setdataisCorrect(true);
  };
  const [errors, setErrors] = useState({});
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const [dataisCorrect, setdataisCorrect] = useState(false);
  const [PasswordInputtype, ToggleIcon] = UsePasswordToggle();
  return (
    <section className="login">
      <div className="login__wrapper">
        <div className="col_1 col">
          <img src={imglogin} alt="" className="login__img" />
          <p className="hhs">Lorem ipsum dolor</p>
          <p className="hhs_2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="col_2 col">
          <img src={Logo} alt="" className="logo" />
          <div className="form_">
            <h2>Welcome back</h2>
            <h4>Welcome back! Please enter your details.</h4>
            <form action="" id="form" className="flex flex-col ">
              <div className="input_box">
                <label className="email">Email or phone number</label>
                <input
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  required
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <div className="input_box">
                <label className="password">
                  <p> password </p>
                  <p className="hide_">
                    <span className="hide">{ToggleIcon}</span>
                    Hide
                  </p>
                </label>
                <input
                  name="password"
                  type={PasswordInputtype}
                  placeholder="Enter your password"
                  required
                  value={values.password}
                  onChange={handleChange}
                />
                {errors.password && <p className="error">{errors.password}</p>}
              </div>
              <div className="remember">
                <label id="check">
                  <input type="checkbox" name="check" required />
                  Remember me
                </label>
                <a href="#">Forgot Password? </a>
              </div>
              <button className="btn" type="submit" onClick={handleSubmit}>
                Sign in
              </button>
            </form>
            <p className="learn">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot. <a href="#"> Learn more.</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Login;
