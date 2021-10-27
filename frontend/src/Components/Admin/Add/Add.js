import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import styles from "./Add.module.css";
import Header from "../../../Header/Header";
import img from "../../Images/user.png";
import { Link } from "react-router-dom";
import { RiAdminLine } from "react-icons/ri";
import { MdOutlinePublic } from "react-icons/md";
import { VscOrganization } from "react-icons/vsc";
import ParticlesBg from "particles-bg";
import Footer from "../../../Footer/Footer";
import { GoMarkGithub, GoMail } from "react-icons/go";
import { FaLinkedinIn, FaSearchLocation } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdCall, MdLocationSearching } from "react-icons/md";
import Spinner from "../../../Ui/Spinner/Spinner";

const Add = () => {
  const [open1, setopen1] = useState(false);
  const [loading, setLoading] = useState(false);

  const fun1 = () => {
    setopen1(!open1);
    setopen2(false);
  };

  const [open2, setopen2] = useState(false);
  const fun2 = () => {
    setopen2(!open2);
    setopen1(false);
  };
  const [factoryName, setFactoryName] = useState("");
  const [factoryEmail, setfactoryEmail] = useState("");

  const [NGOName, setNGOName] = useState("");
  const [NGOEmail, setNGOEmail] = useState("");

  const onCreateFactory = () => {
    const data = {
      name: factoryName,
      email: factoryEmail,
    };

    console.log(data);

    setLoading(true);

    axios
      .post("https://whistler-backend.herokuapp.com/factory/register", data)
      .then((res) => {
        console.log(res);
        setLoading(false);
      })
      .catch((err) => {
        window.alert(err);
        setLoading(false);
      });
  };

  const onCreateNGO = () => {
    const data = {
      name: NGOName,
      email: NGOEmail,
    };

    console.log(data);

    setLoading(true);

    axios
      .post("https://whistler-backend.herokuapp.com/ngo/register", data)
      .then((res) => {
        console.log(res);
        setLoading(false);
      })
      .catch((err) => {
        window.alert(err);
        setLoading(false);
      });
  };

  return (
    <div className={styles.page}>
      <Header />

      {loading ? <Spinner /> : null}

      <div className={styles.add}>
        <div className={styles.open1} onClick={fun1}>
          {open1 ? (
            <div className={styles.close1}>Close Form -</div>
          ) : (
            <div className={styles.add1}>Add a new factory +</div>
          )}
        </div>

        <div className={open1 ? styles.box : styles.hidden}>
          <div className={styles.imgback}>
            <img src={img} className={styles.img} />
          </div>
          <div className={open1 ? styles.tag : styles.hidden}>Add Factory</div>
          <input
            type="text"
            placeholder="Factory Name"
            className={open1 ? styles.inp : styles.hidden}
            onChange={(event) => setFactoryName(event.target.value)}
          />

          <input
            type="text"
            placeholder="Factory Email"
            className={open1 ? styles.inp : styles.hidden}
            onChange={(event) => setfactoryEmail(event.target.value)}
          />

          <button
            onClick={onCreateFactory}
            className={open1 ? styles.btn : styles.hidden}
          >
            Add Factory
          </button>
        </div>
      </div>

      <div>
        <div className={styles.open1} onClick={fun2}>
          {open2 ? (
            <div className={styles.close1}>Close Form -</div>
          ) : (
            <div className={styles.add1}>Add a new supervisor +</div>
          )}
        </div>

        <div className={open2 ? styles.box : styles.hidden}>
          <div className={styles.imgback}>
            <img src={img} className={styles.img} />
          </div>
          <div className={open2 ? styles.tag : styles.hidden}>Add supervisor</div>
          <input
            type="text"
            placeholder="supervisor Name"
            onChange={(event) => setNGOName(event.target.value)}
            className={open2 ? styles.inp : styles.hidden}
          />

          <input
            type="text"
            placeholder="supervisor Email"
            onChange={(event) => setNGOEmail(event.target.value)}
            className={open2 ? styles.inp : styles.hidden}
          />

          <button
            onClick={onCreateNGO}
            className={open2 ? styles.btn : styles.hidden}
          >
            Add supervisor
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Add;
