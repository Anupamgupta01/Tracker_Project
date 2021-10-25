import React from "react";
import styles from "./Info.module.css";
import { FiUserPlus, FiWatch, FiHelpCircle } from "react-icons/fi";
import { BiAddToQueue, BiListPlus } from "react-icons/bi";
import { Link } from "react-router-dom";
const Info2 = () => {
  return (
    <div className={styles.box}>
      <div className={styles.inside}>
        <div className={styles.icon}>
          <BiAddToQueue
            size={25}
            strokeWidth="0.5px"
            strokeOpacity={1}
            color="white"
          />
        </div>

        <h2>View Inspection Tasks</h2>
        <p>
          There will be inspection task provided to report the inspection at the
          assigned factory. Your reports will go directly to admin.
        </p>
        <Link to="/ngo/inspect" className={styles.but1}>
          Inspect
        </Link>
      </div>
      <div className={styles.inside2}>
        <div className={styles.icon2}>
          <FiWatch
            size={25}
            strokeWidth="1.5px"
            strokeOpacity={1}
            color="white"
          />
        </div>
        <h2>File Report</h2>
        <p>
          You can file a new report if you have any assigned inspection task
          assigned. Just click on inspection button of your assigned task.
        </p>
        <Link to="/ngo/inspect" className={styles.but3}>
          Report
        </Link>
      </div>
      <div className={styles.inside3}>
        <div className={styles.icon3}>
          <FiHelpCircle
            size={26}
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
          Help
        </Link>
      </div>
    </div>
  );
};

export default Info2;
