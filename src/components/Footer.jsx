import {
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";

import {
  Link,
} from "react-router-dom";

import logo from "../assets/Images/logo.png";

import "../assets/Style/Footer.css";

const instructors = [

  "Hossam El-Din Mohamed",

  "Adham Osama",

  "Fatma Badr",

];

function Footer() {

  return (

    <footer className="footer">

      <div className="footer-glow"></div>

      <div className="footer-container">

        <div className="footer-brand">

          <Link
            to="/"
            className="footer-logo"
          >

            <img
              src={logo}
              alt="Logo"
            />

          </Link>

          <p>
            Premium online learning platform designed
            to help students build strong technical
            and professional skills for the real market.
          </p>

        </div>

        <div className="footer-links-wrapper">

          <div className="footer-links">

            <h3>
              Pages
            </h3>

            <Link to="/">
              Home
            </Link>

            <Link to="/courses">
              Courses
            </Link>

            <Link to="/instructors">
              Instructors
            </Link>

            <Link to="/contact">
              Contact
            </Link>

          </div>

          <div className="footer-links">

            <h3>
              Instructors
            </h3>

            {instructors.map((item,index) => (

              <span key={index}>
                {item}
              </span>

            ))}

          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>

          © 2026 All Rights Reserved —
          Designed & Developed by

          <a
            href="https://www.linkedin.com/in/mai-mohamed-developer"
            target="_blank"
            rel="noreferrer"
          >
            Mai Mohamed
          </a>

        </p>

      </div>

    </footer>

  );

}

export default Footer;