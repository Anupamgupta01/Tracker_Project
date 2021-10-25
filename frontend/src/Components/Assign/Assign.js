import React, { useState, useEffect } from "react";
import axios from "axios";
import web3 from "../../ethereum/web3";
import { Redirect } from "react-router-dom";
import Random from "../../ethereum/random";
import Spinner from "../../Ui/Spinner/Spinner";
import styles from "./Assign.module.css";
import img from "../Images/cal.png";
const Assign = (props) => {
  const [date, setDate] = useState([]);
  const [random, setRandom] = useState([]);
  const [loading, setLoading] = useState(false);

  const onAssignHandler = async () => {
    setLoading(true);

    console.log("randomNumber");
    const accounts = await web3.eth.getAccounts();
    console.log(Random.methods);
    console.log(Random.events);

    console.log(accounts[0]);

    try {
      let randomNumber = await Random.methods.getRandomNumber().send({
        from: accounts[0],
      });
      console.log(randomNumber);
    } catch (err) {
      setLoading(false);
      window.alert(err);
    }

    // setTimeout(async () => {
    //   let rand = await Random.methods.randomResult().call();
    //   setRandom(rand);
    //   console.log(random);
    // }, 40000);

    Random.events.randomNumberGenrated(function(error, event) {
      if (error) {
        console.log(error);
      }
      console.log("IN EVENT!!!");
      console.log(event);
      console.log(event.returnValues.randomResult);
      setRandom(event.returnValues.randomResult);
      const data = {
        date: date,
        random: event.returnValues.randomResult,
        factoryId: props.factoryId,
      };

      console.log(data);

      axios
        .post("https://whistler-backend.herokuapp.com/admin/assignNgo", data)
        .then((res) => {
          console.log(res);
          //   setRedirect(true);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLoading(false);
          window.alert(err);
        });
    });
  };

  return (
    <div className={styles.box}>
      {loading ? <Spinner /> : null}
      <div className={styles.imgback}>
        <img src={img} className={styles.img} />
      </div>
      <div className={styles.tag}>Assign Date</div>
      <input type="text" placeholder="Admin Name" className={styles.inp} />
      <input
        type="date"
        placeholder="Date (YYYY/MM/DD)"
        onChange={(event) => setDate(event.target.value)}
        className={styles.inp}
      />

      <button onClick={onAssignHandler} className={styles.btn}>
        Assign
      </button>
    </div>
  );
};

export default Assign;
