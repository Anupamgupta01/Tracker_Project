import React from "react";
import styles from "./Info.module.css";
import { FiUserPlus, FiShare2, FiList } from "react-icons/fi";
import { BiDonateBlood, BiListPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
const Info = () => {
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

        <h2>Add new Factory / SuperVisors</h2>
        <p>
          We can add new factories to the list, for which we can keep track and
          evaluate their stats on various grounds.
          <br />
          The administrator can add a new supervisor to participate in the initiative
          and can further participate in the inspection process.
        </p>
        <Link to="/admin/add" className={styles.but1}>
          Add factory
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
        <h2>Visit Complaints / Reports</h2>
        <p>
          The administrator can view all the complainst filed by public and
          reports of inspections by various SuperVisors and take actions on basis of
          it.
        </p>
        <Link to="/admin/complaints" className={styles.but3}>
          User Complaints
        </Link>
      </div>
      <div className={styles.inside3}>
        <div className={styles.icon3}>
          <FiList
            size={25}
            strokeWidth="1.5px"
            strokeOpacity={1}
            color="white"
          />
        </div>

        <h2>Work Distribution</h2>
        <p>
          The administrator will have authority inspect a factory. But the
          supervisor involved in the process will be random.
        </p>
        <Link to="/admin/factories" className={styles.but1}>
          view factory
        </Link>
      </div>
    </div>
  );
};

export default Info;
