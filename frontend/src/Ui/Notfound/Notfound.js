import React from "react";
import img from "../../Components/Images/error404.png";
import styles from "./Notfound.module.css";
import { Link } from "react-router-dom";
import Footer from "../../Footer/Footer";
const Notfound = () => {
  let routes = (
    <Link to="/" className="link">
      Login
    </Link>
  );

  if (localStorage.getItem("permissions") === "admin") {
    routes = (
      <Link to="/admin/home" className="link">
        Home
      </Link>
    );
  } else if (localStorage.getItem("permissions") === "ngo") {
    routes = (
      <Link to="/ngo/home" className="link">
        Home
      </Link>
    );
  } else if (localStorage.getItem("permissions") === "public") {
    routes = (
      <Link to="/user/home" className="link">
        home
      </Link>
    );
  }

  return (
    <div className={styles.center}>
      <h1>Page Not found</h1> <img src={img} alt="Not found" />
      {routes}
    </div>
  );
};

export default Notfound;
