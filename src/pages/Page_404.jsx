import React, { useEffect } from "react";
import "./style404.css";
import logoDark from "../assets/logodark.svg";
import logoLight from "../assets/logolight.svg";
import errorDark from "../assets/404-error-dark.svg";
import errorLight from "../assets/404-error-light.svg";

export default function Page_404() {
  useEffect(() => {
    document.head.getElementsByTagName("title")[0].innerHTML =
      "404 - Not Found";
  }, []);
  return (
    <>
      <header className="error404page-header">
        <div className="navlist-logos">
          <a href="#" className="logo">
            <img className="logo-dark" src={logoDark} alt="logo" />
            <img className="logo-light" src={logoLight} alt="logo" />
          </a>
        </div>

        <ul className="navlist-item">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#about">About Us</a>
          </li>
          <li>
            <a href="#services">Our services</a>
          </li>
          <li>
            <a href="#testimonial">Testimonial</a>
          </li>
        </ul>

        <div className="right-info">
          <div className="toggle-container">
            <input type="checkbox" id="switch" name="theme" />
            <label htmlFor="switch">Toggle</label>
          </div>
          <div className="bx bx-menu" id="menu-icon"></div>
        </div>
      </header>

      <section className="content-404">
        <img className="img404-light" src={errorDark} alt="404" />
        <img className="img404-dark" src={errorLight} alt="404" />
        <a href="#" className="btn">
          Go To Home
        </a>
        <a href="#" className="btn-down">
          Contact us
        </a>
      </section>

      <footer className="error404page-footer">
        <div className="error404page-container-footer">
          <div className="error404page-footer-social">
            <img className="logo-dark" src={logoDark} alt="logo" />
            <img className="logo-light" src={logoLight} alt="logo" />
            <div className="social-icon">
              <div className="social-icon-i">
                <a href="#">
                  <i className="bx bxl-instagram"></i>
                </a>
              </div>
              <div className="social-icon-i">
                <a href="#">
                  <i className="bx bxl-facebook-circle"></i>
                </a>
              </div>
              <div className="social-icon-i">
                <a href="#">
                  <i className="bx bxl-twitter"></i>
                </a>
              </div>
              <div className="social-icon-i">
                <a href="#">
                  <i className="bx bxl-linkedin-square"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="error404page-footer-info">
            <div className="error404page-footer-info-one">
              <img className="logo-dark" src={logoDark} alt="logo" />
              <img className="logo-light" src={logoLight} alt="logo" />
              <p>
                About pages are perfect spaces to talk <br />
                about where you started, how you've <br />
                grown, and the ideals that have helped <br />
                your organization mature
              </p>
            </div>

            <div className="error404page-footer-info-two">
              <h6>Address</h6>
              <a href="#">
                <i className="bx bxs-map"></i>BP 73, Bureau de poste EL WIAM{" "}
                <br />
                Sidi Bel Abbés 22016, Algérie
              </a>
            </div>

            <div className="error404page-footer-info-three">
              <h6>Contact</h6>
              <div>
                <a href="#">
                  <i className="bx bx-phone"></i>+213-48-74-94-52
                </a>
                <a href="#">
                  <i className="bx bx-envelope"></i>contact@esi-sba.dz
                </a>
              </div>
            </div>

            <div className="error404page-footer-info-four">
              <h6>Office</h6>
              <p>Sunday - Thursday</p>
              <p>8AM- 5PM</p>
            </div>
          </div>

          <div className="error404page-footer-copyright">
            <p>
              © <span className="year"></span>
              <span className="logo-text">Finanworks</span> - All rights
              reserved.
            </p>
            <div className="error404page-footer-item">
              <a href="#">Privacy</a>
              <a href="#">Security</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
