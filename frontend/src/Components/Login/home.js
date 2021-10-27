import { Link } from "react-router-dom";
import { RiAdminLine } from "react-icons/ri";
import { MdOutlinePublic } from "react-icons/md";
import { VscOrganization } from "react-icons/vsc";

import { GoMarkGithub, GoMail } from "react-icons/go";
import { FaLinkedinIn, FaSearchLocation } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdCall, MdLocationSearching } from "react-icons/md";
import Carousel from "../Carousel/Carousel";
import styles from "./home.module.css";
function Home() {
  return (
    <div className={styles.login}>
      <div className={styles.header}>
        <div className={styles.logo_name}>
          <div className={styles.imageprofile}>
            {/* <img src={Img1} alt="logo pimage" className={styles.logo} /> */}
            <div className={styles.box}>
              TRA
              <span className={styles.do}>C</span>KER !
            </div>
          </div>
        </div>
{/* 
        <div className={styles.fifty}>
          <div className={styles.select}>
            <Link to="/help">Help</Link>
          </div>
        </div> */}
      </div>
      <div className={styles.flex}>
        <div className={styles.cor}>
          <Carousel />
        </div>
        <div className={styles.pages}>
          <div className={styles.cont}>Continue As:</div>
          <div className={styles.pagess}>
            <Link to="/admin/auth" className={styles.top}>
              <div>
                <RiAdminLine className={styles.icon} />
              </div>
              <h3>
                <span>Admin</span>
              </h3>
            </Link>
            <Link to="/ngo/auth">
              <div>
                <VscOrganization className={styles.icon} />
              </div>
              <h3>
                <span>Super-advisor</span>
              </h3>
            </Link>
            <Link to="/public/auth" className={styles.bottom}>
              <div>
                <MdOutlinePublic className={styles.icon} />
              </div>
              <h3>
                <span>Public</span>
              </h3>
            </Link>
          </div>
          {/* <div className={styles.cont2}>Having Problem Logging In?</div> */}
        </div>
      </div>
      <div>
        <div className={styles.footerbar}>
          <div className={styles.loc}>
            {/* <MdCall className={styles.icon} /> */}
            <p className={styles.same}>
              Tracker{" "}
              <span className={styles.err}>© Angry Nerds</span>
            </p>

            {/* <span style={{ fontsize: "10px" }}>© Error 404</span> */}
            {/* <a
              href="tel:+91-848-785-9079"
              target="_blank"
              className={styles.but}
            >
              Call
            </a> */}
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
      </div>
    </div>
  );
}

export default Home;
