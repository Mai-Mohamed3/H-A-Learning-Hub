import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  FaBars,
  FaTimes,
} from "react-icons/fa";

import logo from "../assets/Images/logo.png";

import "../assets/Style/navbar.css";

function Navbar() {

  const [scrolled, setScrolled] =
  useState(false);

  const [menuOpen, setMenuOpen] =
  useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 50);

    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  useEffect(() => {

    if(menuOpen){

      document.body.style.overflow = "hidden";

    }else{

      document.body.style.overflow = "auto";

    }

  }, [menuOpen]);

  return (

    <>

      <nav
        className={
          scrolled
          ? "navbar active"
          : "navbar"
        }
      >

        {/* Logo */}

        <div className="navbar-left">

          <div className="logo">

            <Link to="/">

              <img
                src={logo}
                alt="Logo"
              />

            </Link>

          </div>

        </div>

        {/* Desktop Links */}

        <ul className="nav-links">

          <li>
            <Link to="/">
              Home
            </Link>
          </li>

          <li>
            <Link to="/Courses">
              Courses
            </Link>
          </li>

          <li>
            <Link to="/Instructors">
              Instructors
            </Link>
          </li>

          <li>
            <Link to="/Contact">
              Contact
            </Link>
          </li>

        </ul>

        {/* Hamburger */}

        <button
          className="menu-btn"
          onClick={() =>
            setMenuOpen(true)
          }
        >

          <FaBars />

        </button>

      </nav>

      {/* Overlay */}

      <div
        className={
          menuOpen
          ? "mobile-overlay active"
          : "mobile-overlay"
        }
        onClick={() =>
          setMenuOpen(false)
        }
      ></div>

      {/* Mobile Menu */}

      <div
        className={
          menuOpen
          ? "mobile-menu active"
          : "mobile-menu"
        }
      >

        <div className="mobile-top">

          <img
            src={logo}
            alt="Logo"
          />

          <button
            onClick={() =>
              setMenuOpen(false)
            }
          >

            <FaTimes />

          </button>

        </div>

        <ul>

          <li>

            <Link
              to="/"
              onClick={() =>
                setMenuOpen(false)
              }
            >
              Home
            </Link>

          </li>

          <li>

            <Link
              to="/Courses"
              onClick={() =>
                setMenuOpen(false)
              }
            >
              Courses
            </Link>

          </li>

          <li>

            <Link
              to="/Instructors"
              onClick={() =>
                setMenuOpen(false)
              }
            >
              Instructors
            </Link>

          </li>

          <li>

            <Link
              to="/Contact"
              onClick={() =>
                setMenuOpen(false)
              }
            >
              Contact
            </Link>

          </li>

        </ul>

      </div>

    </>

  );

}

export default Navbar;