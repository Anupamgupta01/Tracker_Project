import React, { useState, useEffect } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { Link } from "react-router-dom";
import styles from "./Mainpage.module.css";
import { BiRegistered } from "react-icons/bi";
import { FaIndustry, FaComment, FaRegFileExcel } from "react-icons/fa";
import { CgUserlane } from "react-icons/cg";
import HeaderUser from "../../Header/HeaderUser";
import Info3 from "./Info3";
import Footer from "../../Footer/Footer";
const Mainpage3 = () => {
  const [small, setSmall] = useState(false);
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () =>
        setSmall(window.pageYOffset > 200)
      );
    }
  }, []);

  const { text } = useTypewriter({
    words: ["Human,", "Environment,", "India,", "Earth..."],
    loop: 0,
    cursorStyle: "_",
    deleteSpeed: "2",
  });

  return (
    <div className={styles.main}>
      <HeaderUser />

      <div className={styles.mainpage}>
        <div className={styles.head}>
          <h1 className={styles.headtxt}>
            A contemporary idea to save...
            <br />
            <div className={styles.typewriter}>
              {text}
              <span className={styles.blue}>
                <Cursor />
              </span>
            </div>
            Be <span className={styles.typewriter}>A Tracker!</span>
          </h1>
          <div className={styles.fifty}>
            {/* <Link to="Help" className={styles.but1}>
              Know More...
            </Link> */}
            {/* <Link to="Help" className={styles.but2}>
              New Donor
            </Link> */}
          </div>
        </div>
      </div>
      {/* <h1 className={styles.title}>Stats</h1>
      <div className={styles.footwhite}>
        <ul className={styles.footerul}>
          <li>
            <div className={styles.box}>
              <div className={styles.iconbox1}>
                <FaIndustry className={styles.iconwhite} />
              </div>
              <div className={styles.box2}>
                <p>Factories Registered</p>
                <p>
                  <p className={styles.big}>21</p>
                </p>
              </div>
              <h1>All time</h1>
            </div>
          </li>
          <li>
            <div className={styles.box}>
              <div className={styles.iconbox2}>
                <FaComment className={styles.iconwhite} />
              </div>
              <div className={styles.box2}>
                <p>Complaints</p>
                <p>
                  <p className={styles.big}>248</p>
                </p>
              </div>
              <h1>All time</h1>
            </div>
          </li>
          <li>
            <div className={styles.box}>
              <div className={styles.iconbox3}>
                <CgUserlane className={styles.iconwhite} />
              </div>
              <div className={styles.box2}>
                <p>NGO Registeres</p>
                <p>
                  <p className={styles.big}>12</p>
                </p>
              </div>
              <h1>All Time</h1>
            </div>
          </li>
          <li>
            <div className={styles.box}>
              <div className={styles.iconbox4}>
                <FaRegFileExcel className={styles.iconwhite} />
              </div>
              <div className={styles.box2}>
                <p>Inspection</p>
                <p>
                  <p className={styles.big}>44</p>
                </p>
              </div>
              <h1>All time</h1>
            </div>
          </li>
        </ul>
      </div> */}
      <h1 className={styles.title}>Further</h1>
      <Info3 />
      <Footer />
    </div>
  );
};

export default Mainpage3;
