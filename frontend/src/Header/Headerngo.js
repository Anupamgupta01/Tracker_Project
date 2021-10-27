import React, { useState } from "react";
import styles from "./Header.module.css";
//import img from "../Image/flash.gif";
import { FiMail } from "react-icons/fi";
import { GoMarkGithub, GoMail } from "react-icons/go";
import { FaLinkedinIn, FaSearchLocation } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdCall, MdLocationSearching } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
const Headerngo = () => {
  const [open, setOpen] = useState(false);
  const clickhandler = () => {
    setOpen(!open);
  };

  const [over, setover] = useState(false);
  const func1 = () => {
    setover(!over);
  };
  const location = useLocation();
  let loc = false;
  if (location.pathname !== "/home") {
    loc = true;
  }

  const logoutHandler = () => {
    localStorage.clear();
  };

  return (
    <div>
      <div className={loc ? styles.bold : styles.header}>
        <div className={styles.logo}>
          {/* <img src={img} alt="Logo" className={styles.flash} /> */}

          <h2 className={styles.name}>
            <NavLink to="/nog/home">Tracker!</NavLink>
          </h2>
        </div>
        <ul className={styles.flex}>
          <li>
            <NavLink to="/ngo/home" activeClassName={styles.active}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/ngo/inspect" activeClassName={styles.active}>
              Inspect
            </NavLink>
          </li>
          <NavLink to="/" className={styles.right} onClick={logoutHandler}>
            <div>LogOut</div>
          </NavLink>
        </ul>

        <div className={styles.burger} onClick={clickhandler}>
          <div className={open ? styles.lines4 : styles.lines1}></div>
          <div className={open ? styles.lines5 : styles.lines2}></div>
          <div className={open ? styles.lines6 : styles.lines3}></div>
        </div>
      </div>

      <div className={open ? styles.burgermenuo : styles.burgermenuc}>
        <div className={open ? styles.menuo : styles.menuc}>
          <ul className={styles.flex2}>
            <li>
              <NavLink
                to="/ngo/home"
                activeClassName={styles.active2}
                onClick={clickhandler}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/ngo/inspect"
                activeClassName={styles.active2}
                onClick={clickhandler}
              >
                Inspect
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/help"
                activeClassName={styles.active2}
                onClick={clickhandler}
              >
                Help
              </NavLink>
            </li>

            <li>
              <NavLink to="/" onClick={clickhandler}>
                Signout
              </NavLink>
            </li>
          </ul>
        </div>
        <div className={open ? styles.bot : styles.botc}>
          <ul>
            <li>
              <a href="https://github.com/adityasingh03" target="_blank">
                <GoMarkGithub />
              </a>
            </li>
            <li>
              <a href="/contact">
                <GoMail />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/aditya-singh-8540a31ba/"
                target="_blank"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a href="tel:+91-848-785-9079" target="_blank">
                <MdCall />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Headerngo;
