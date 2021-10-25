import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import styles from "./Complain.module.css";
import img from "../../Images/user.png";
const Complain = (props) => {
  return (
    <div className={styles.tile}>
      <img src={img} alt="User" className={styles.user} />
      <div className={styles.inner}>
        <div className={styles.one}>
          <p>Date :</p>
          <div className={styles.group}>{props.date}</div>
        </div>
        <div className={styles.one}>
          <p>Description :</p>
          <div className={styles.aadhar}>
            <div>{props.desc}</div>
          </div>
        </div>
        <div className={styles.one}>
          <p>Phone Number :</p>
          <div className={styles.date}>
            <div>{props.phone}</div>
          </div>
        </div>
        <div>
          <a className={styles.btn} href={props.hash}>
            View Proof
          </a>
        </div>
        {/* <div onClick={() => props.assign(props.id)} className={styles.btn}>
          SCHEDULE
        </div> */}
      </div>
    </div>
  );
};

export default Complain;
