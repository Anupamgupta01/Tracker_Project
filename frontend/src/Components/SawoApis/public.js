import React, { useState } from "react";
import SawoLogin from "sawo-react";
import { Redirect } from "react-router-dom";
import styles from "./ngo.module.css";
import ParticlesBg from "particles-bg";

import { Link } from "react-router-dom";
import { RiAdminLine } from "react-icons/ri";
import { MdOutlinePublic } from "react-icons/md";
import { VscOrganization } from "react-icons/vsc";

import { GoMarkGithub, GoMail } from "react-icons/go";
import { FaLinkedinIn, FaSearchLocation } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdCall, MdLocationSearching } from "react-icons/md";
const LoginPage = () => {
  const [redirect, setRedirect] = useState("");

  function sawoLoginCallback(payload) {
    console.log(payload.identifier);
    localStorage.setItem("phone", payload.identifier);
    localStorage.setItem("permissions", "public");
    // window.location.reload();
    setRedirect(true);
    console.log("....");
  }

  const sawoConfig = {
    onSuccess: sawoLoginCallback, //required,
    identifierType: "phone_number_sms", //required, must be one of: 'email', 'phone_number_sms',
    apiKey: "43fdf3b6-db33-48c7-b545-71241d34e5c9", // required, get it from sawo dev.sawolabs.com,
    containerHeight: "250px", // the login container height, default is 230px
  };

  return (
    <div className={styles.full}>
      <div className={styles.header}>
        <div className={styles.logo_name}>
          <div className={styles.imageprofile}>
            {/* <img src={Img1} alt="logo pimage" className={styles.logo} /> */}
            <div className={styles.box1}>
              TRACKER
            </div>
          </div>
        </div>

        {/* <div className={styles.fifty}>
          <div className={styles.select}>
            <Link to="/help">Help</Link>
          </div>
        </div> */}
      </div>
      <div className={styles.box}>
        {redirect ? <Redirect to="/user/home" /> : null}
        <SawoLogin config={sawoConfig} />
      </div>

      <div className={styles.footerbar}>
        <div className={styles.loc}>
          <p className={styles.same}>
            Tracker <span className={styles.err}>© Angry Nerds</span>
          </p>
        </div>
        {/* <ul>
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
        </ul> */}
      </div>

      <ParticlesBg type="cobweb" color="#33d677" bg={true} />
    </div>
  );
};

export default LoginPage;
