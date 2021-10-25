import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Modal from "../../../Ui/Modal/Modal";
import styles from "./Factory.module.css";

import img from "../../Images/user2.png";
const Factory = (props) => {

  const onScheduleHandler = () => {
    console.log(props.id);
  };

  return (
    <div className={styles.tile}>
      <img src={img} alt="user" className={styles.user} />

      <div className={styles.inner}>
        <div className={styles.one}>
          <p>I.D. :</p>
          <div className={styles.date}>
            <div>{props.id}</div>
          </div>
        </div>
        <div className={styles.one}>
          <p>Factory Name :</p>
          <div className={styles.aadhar}>
            <div>{props.name}</div>
          </div>
        </div>
        <div className={styles.one}>
          <p>Email :</p>
          <div className={styles.group}>{props.email}</div>
        </div>

        <div onClick={() => props.assign(props.id)} className={styles.btn}>
          SCHEDULE
        </div>
      </div>
    </div>
  );
};

export default Factory;
