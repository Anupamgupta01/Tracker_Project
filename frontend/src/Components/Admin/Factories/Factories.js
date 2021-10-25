import React, { useState, useEffect } from "react";
import Factory from "../../Cards/Factory/Factory";
import axios from "axios";
import { Redirect } from "react-router-dom";
import styles from "./Factories.module.css";
import Header from "../../../Header/Header";
import Footer from "../../../Footer/Footer";
import Modal from "../../../Ui/Modal/Modal";
import Assign from "../../Assign/Assign";
import Spinner from "../../../Ui/Spinner/Spinner";

const Factories = () => {
  const [factories, setFactories] = useState([]);
  const [assigning, setAssigning] = useState(false);
  const [redirect, setRedirect] = useState("");
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState(false);

  useEffect(async () => {
    console.log("sss");
    setLoading(true);

    try {
      axios
        .post("https://whistler-backend.herokuapp.com/factory/getfactory")
        .then((res) => {
          console.log(res.data.message);
          setFactories(res.data.message);
          setRedirect(true);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          window.alert(err);
          setLoading(false);
        });
    } catch (e) {
      console.log(e);
      window.alert(e);
      setLoading(false);
    }
  }, []);

  const assignCancelHandler = () => {
    setAssigning(false);
  };

  const onAssignHandler = (props) => {
    console.log(props);
    setId(props);
    setAssigning(true);
  };

  const factoriesList = (
    <div className={styles.flex}>
      {factories.map((factory) => (
        <Factory
          name={factory.name}
          email={factory.email}
          id={factory.factoryId}
          assign={onAssignHandler}
        />
      ))}
    </div>
  );

  return (
    <div className={styles.pages}>
      {/* <Spinner/> */}

      {loading ? <Spinner /> : null}

      <Header />

      <Modal show={assigning} close={assignCancelHandler}>
        <Assign factoryId={id} />
      </Modal>

      <div className={styles.box}>
        <div className={styles.bar}>
          <p>FACTORIES</p>
        </div>
        {factoriesList}
      </div>
      <Footer />
    </div>
  );
};

export default Factories;
