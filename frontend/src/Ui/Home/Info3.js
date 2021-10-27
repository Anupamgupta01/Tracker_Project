import React from "react";
import styles from "./Info.module.css";
import { FiUserPlus, FiShare2, FiList } from "react-icons/fi";
import { BiDonateBlood, BiListPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
const Info3 = () => {
  return (
    <div className={styles.box}>
      <div className={styles.inside}>
        <div className={styles.icon}>
          <FiUserPlus
            size={25}
            strokeWidth="1.5px"
            strokeOpacity={1}
            color="white"
          />
        </div>

        <h2>Add a Complaint</h2>
        <p>
          General public can add a new complaint against a factory/industry if
          they have noticed inadequate waste disposal system. They can provide
          proof of these malpractises. Authorities will take actions based on
          these complaints.
        </p>
        <Link to="/user/file" className={styles.but1}>
          New Compalint
        </Link>
      </div>
      <div className={styles.inside2}>
        <div className={styles.icon2}>
          <FiShare2
            size={25}
            strokeWidth="1.5px"
            strokeOpacity={1}
            color="white"
          />
        </div>
        <h2>Previous Complaints</h2>
        <p>
          General public can view the previous reports filed by them and actions
          that are been taken on them.
        </p>
        <Link to="/user/previous" className={styles.but3}>
          Donate
        </Link>
      </div>
      {/* <div className={styles.inside3}>
        <div className={styles.icon3}>
          <FiList
            size={25}
            strokeWidth="1.5px"
            strokeOpacity={1}
            color="white"
          />
        </div>
        <h2>Help</h2>
        <p>
          If ypu face any issue or problem try finding the solution on Help page
          or you can also chat with the Chatbot provided.
        </p>
        <Link to="/help" className={styles.but1}>
          help
        </Link>
      </div> */}
    </div>
  );
};

export default Info3;
