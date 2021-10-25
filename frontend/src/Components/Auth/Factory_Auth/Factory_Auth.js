import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import styles from "../Admin_Auth/Admin_Auth.module.css";

import img from "../../Images/user.png";
import { Link } from "react-router-dom";
import { RiAdminLine } from "react-icons/ri";
import { MdOutlinePublic } from "react-icons/md";
import { VscOrganization } from "react-icons/vsc";
import ParticlesBg from "particles-bg";

import { GoMarkGithub, GoMail } from "react-icons/go";
import { FaLinkedinIn, FaSearchLocation } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdCall, MdLocationSearching } from "react-icons/md";
const Factory_Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState("");

  const onLoginHandler = () => {
    const data = {
      email: email,
      password: password,
    };

    console.log(data);

    axios
      .post("https://whistler-backend.herokuapp.com/factory/login", data)
      .then((res) => {
        console.log(res);
        setRedirect(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.fullpage}>
      <div className={styles.header}>
        <div className={styles.logo_name}>
          <div className={styles.imageprofile}>
            {/* <img src={Img1} alt="logo pimage" className={styles.logo} /> */}
            <div className={styles.box1}>
              Wh
              <span className={styles.do}>I</span>stler !
            </div>
          </div>
        </div>

        <div className={styles.fifty}>
          <div className={styles.select}>
            <Link to="#">Help</Link>
          </div>
        </div>
      </div>
      <div className={styles.box}>
        {redirect ? <Redirect to="/factory" /> : null}
        <div className={styles.imgback}>
          <img src={img} className={styles.img} />
        </div>
        <div className={styles.tag}>Factory</div>
        <input
          type="text"
          placeholder="Factory Email"
          onChange={(event) => setEmail(event.target.value)}
          className={styles.inp}
        />

        <input
          type="text"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
          className={styles.inp}
        />

        <button onClick={onLoginHandler} className={styles.btn}>
          Login
        </button>
      </div>

      <div className={styles.footerbar}>
        <div className={styles.loc}>
          <p className={styles.same}>
            Environmental Issues <span className={styles.err}>© Error 404</span>
          </p>
        </div>
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

      <ParticlesBg type="cobweb" color="#33d677" bg={true} />
    </div>
  );
};

export default Factory_Auth;
