import React, { useState, useEffect } from "react";
import axios from "axios";
import web3 from "../../../ethereum/web3";
import Whistler from "../../../ethereum/whistler";
import { Redirect } from "react-router-dom";
import Headerngo from "../../../Header/HeaderUser";
import Footer from "../../../Footer/Footer";
import styles from "./File.module.css";
import img from "../../Images/user.png";
import Spinner from "../../../Ui/Spinner/Spinner";
import { RiCoinsLine } from "react-icons/ri";

const File = (props) => {
  const [ran, setran] = useState(false);
  const func1 = () => {
    setran(!ran);
  };
  const [id, setId] = useState("");
  const [desc, setDesc] = useState("");
  const [list, setList] = useState([]);
  const [date, setDate] = useState([]);
  const [loading, setLoading] = useState(false);
  const [file, setFile] = useState(false);

  const onComplainHandler = async () => {
    const accounts = await web3.eth.getAccounts();

    setLoading(true);

    console.log(id);
    console.log(desc);
    console.log(localStorage.getItem("phone"));

    try{

      const formData = new FormData();
      formData.append("file", file);

      const res = await axios.post(
        "https://whistler-backend.herokuapp.com/public/upload",
        formData
      );

      console.log( res.data.fileUrl);

      await Whistler.methods
      .file_complain(
        id,
        desc,
        date,
        res.data.fileUrl,
        localStorage.getItem("phone")
      )
      .send({
        from: accounts[0],
      });

      setLoading(false);
      console.log("done")
    }catch(e) {
      setLoading(false);
      window.alert(e);
    }
  };

  useEffect(async () => {

    setLoading(true);

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;

    setDate(today);

    try {
      let factories = await axios.post(
        "https://whistler-backend.herokuapp.com/factory/getFactory"
      );
      console.log(factories);
      let renderList = factories.data.message.map((factory) => (
        <option key={factory._id} value={factory.factoryId}>
          {factory.name}
        </option>
      ));
      setList(renderList);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      window.alert(error)
    }
  }, []);

  const dropdownHandler = (e) => {
    console.log(e.target.value);
    setId(e.target.value);
  };

  return (
    <div className={styles.file}>
      <Headerngo />

      {loading ? <Spinner/> : null}

      <div className={styles.box}>
        <div className={styles.imgback}>
          <img src={img} className={styles.img} />
        </div>
        <div className={styles.tag}>Add new Complaint</div>
        {ran ? (
          <select onChange={dropdownHandler} className={styles.sel} disabled>
            <option>SELECT FACTORY</option>
          </select>
        ) : (
          <select onChange={dropdownHandler} className={styles.sel}>
            <option disabled selected value>
              SELECT FACTORY
            </option>
            {list}
          </select>
        )}

        <div className={styles.flex}>
          <input type="checkbox" onClick={func1} />
          <p>Factory not in list</p>
        </div>
        <input
          type="text"
          placeholder="Factory Name"
          className={ran ? styles.inp : styles.dis}
        />

        <input
          type="text"
          placeholder="Factory Email"
          className={ran ? styles.inp : styles.dis}
        />
        <textarea
          placeholder="Description"
          onChange={(event) => setDesc(event.target.value)}
          className={styles.txt}
        ></textarea>

        <input
          type="file"
          onChange={(event) => setFile(event.target.files[0])}
          style={{ width: "100%", margin: "20px 0", border: "1px solid #ccc" }}
        />

        <button onClick={onComplainHandler} className={styles.btn}>
          SUBMIT
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default File;
