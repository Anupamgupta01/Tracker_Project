import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import styles from "./Report.module.css";
import img from "../../Images/user2.png";

const Report = (props) => {
  // const onScheduleHandler = () => {
  //     console.log(props.id);
  // }

  return (
    <div className={styles.tile}>
      <img src={img} alt="user" className={styles.user} />

      <div className={styles.inner}>
        <div className={styles.one}>
          <p>I.D. :</p>
          <div className={styles.date}>
            <div>{props.date}</div>
          </div>
        </div>
        <div className={styles.one}>
          <p>Inspector :</p>
          <div className={styles.aadhar}>
            <div>{props.inspector}</div>
          </div>
        </div>
        <div className={styles.one}>
          <p>NGO :</p>
          <div className={styles.group}>{props.ngo}</div>
        </div>
        <div className={styles.one}>
          <p>Quantity :</p>
          <div className={styles.group}>{props.quantity}</div>
        </div>
        <div className={styles.one}>
          <p>Email :</p>
          <div className={styles.group}>{props.email}</div>
        </div>
        <div className={styles.one}>
          <p>Chemicals :</p>
          <div className={styles.group}>{props.chemical}</div>
        </div>
        <div className={styles.one}>
          <p>Remarks :</p>
          <div className={styles.group}>{props.remarks}</div>
        </div>

        <div className={styles.one}>
          <p>Treated:</p>
          <div className={styles.group}>{props.treated}</div>
        </div>
      </div>
    </div>

    // <div>

    //     <div>{props.treated}</div>
    //     <br/>

    // </div>
  );
};

export default Report;
