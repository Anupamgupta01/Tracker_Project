import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import { AiFillGitlab } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  let routes = false;

  if (localStorage.getItem("permissions") === "admin") {
    routes = (
      <ul className={styles.fitemli}>
        <h2>Navigate</h2>
        <li>
          <Link href="/admin/home">Home</Link>
        </li>
        <li>
          <Link href="/admin/complaints">Complaints</Link>
        </li>
        <li>
          <Link href="/admin/report">Report</Link>
        </li>
        <li>
          <Link href="/admin/factories">Factories</Link>
        </li>
        <li>
          <Link href="/help">Help</Link>
        </li>
        <li>
          <Link href="/">SignOut</Link>
        </li>
      </ul>
    );
  } else if (localStorage.getItem("permissions") === "ngo") {
    routes = (
      <ul className={styles.fitemli}>
        <h2>Navigate</h2>
        <li>
          <Link href="/ngo/home">Home</Link>
        </li>
        <li>
          <Link href="/ngo/complaints">Inspect_Requests</Link>
        </li>
        <li>
          <Link href="/admin/report">Older_Inspections</Link>
        </li>

        <li>
          <Link href="/help">Help</Link>
        </li>
        <li>
          <Link href="/">SignOut</Link>
        </li>
      </ul>
    );
  } else if (localStorage.getItem("permissions") === "public") {
    routes = (
      <ul className={styles.fitemli}>
        <h2>Navigate</h2>
        <li>
          <Link href="/user/home">Home</Link>
        </li>
        <li>
          <Link href="/user/previous">Old_Complaint</Link>
        </li>
        <li>
          <Link href="/user/file">New_Complaint</Link>
        </li>
        <li>
          <Link href="/">SignOut</Link>
        </li>
      </ul>
    );
  }
  return (
    <div className={styles.footer}>
      {/* <div className={styles.air}>
        <h3>Did you like our initiative?</h3>
        <div className={styles.fifty}>
          <Link to="/help" className={styles.but1}>
            Share Idea
          </Link>
          <Link to="/admin/add" className={styles.but2}>
            Your Ideas
          </Link>
        </div>
      </div> */}
      <div className={styles.flex}>
        <div className={styles.fitems}>{routes}</div>
        <div className={styles.fitems}>
          <ul className={styles.fitemli}>
            <h2>Docs</h2>
            <li>
              <a
                href="https://www.safewater.org/fact-sheets-1/2017/1/23/industrial-waste#:~:text=Industrial%20waste%20is%20defined%20as,scrap%20lumber%2C%20and%20similar%20wastes."
                target="_blank"
              >
                Fact_Sheet
              </a>
            </li>

            <li>
              <a
                href="https://www.hindawi.com/journals/jeph/2020/4754780/"
                target="_blank"
              >
                Corruption
              </a>
            </li>

            <h2>Links</h2>
            <li>
              <a
                href="https://www.youtube.com/watch?v=_NkqwMitQ8o"
                target="_blank"
              >
                Introduction
              </a>
            </li>

            <li>
              <a
                href="https://www.youtube.com/watch?v=_NkqwMitQ8o"
                target="_blank"
              >
                Managing_Waste
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className={styles.last}> Social Media Handles</div>

      <div className={styles.fitemsm}>
        <ul className={styles.fitemli}>
          <li>
            <a href="https://github.com/whistler">
              <AiFillGitlab />
            </a>
          </li>

          <li>
            <a href="https://instagram.com/whistler">
              <AiFillInstagram />
            </a>
          </li>
          <li>
            <a href="mailto:support@whistler.com">
              <AiFillMail />
            </a>
          </li>
          <li>
            <a href="https://linkedin.com/whistler">
              <AiFillLinkedin />
            </a>
          </li>
        </ul>
      </div>
      <br /> */}

      <div className={styles.last2}>...Tracker © Angry Nerds...</div>
    </div>
  );
};

export default Footer;
