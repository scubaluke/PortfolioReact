import React, { useState } from "react";
import ResumeLink from "./ResumeLink";
import "./Header.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  const [navOpen, setNavOpen] = useState("");

  function handelClick() {
    !navOpen ? setNavOpen("nav-open") : setNavOpen("");
    document.body.classList.toggle("nav-open");
  }

  const displayOnHomePage = (
    <nav className="nav">
      <ul onClick={handelClick} className="nav__list">
        <li className="nav__item">
          <a href="#home" className="nav__link">
            Home
          </a>
        </li>
        <li className="nav__item">
          <a href="#services" className="nav__link">
            Services
          </a>
        </li>
        <li className="nav__item">
          <a href="#about" className="nav__link">
            About me
          </a>
        </li>
        <li className="nav__item">
          <a href="#work" className="nav__link">
            {" "}
            My Work
          </a>
        </li>
        <li className="nav__item">
          <Link to="/resume" className="nav__link">
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );

  const displayOnAnyOtherPage = (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link onClick={handelClick} to="/" className="nav__link">
            Home
          </Link>
        </li>
        {pathname === "/resume" ? (
          ""
        ) : (
          <li className="nav__item">
            <Link onClick={handelClick} to="/resume" className="nav__link">
              Resume
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );

  return (
    <div className="header">
      <div className="logo">
        <ResumeLink />
      </div>
      <button
        onClick={() => handelClick()}
        className={`nav-toggle ${navOpen}`}
        aria-label="toggle navigation"
      >
        <span className="hamburger"></span>
      </button>
      {pathname === "/" ? displayOnHomePage : displayOnAnyOtherPage}
    </div>
  );
}
