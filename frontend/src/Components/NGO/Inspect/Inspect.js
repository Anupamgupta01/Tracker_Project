import React, { useState } from "react";
import axios from "axios";
import web3 from "../../../ethereum/web3";
import Whistler from "../../../ethereum/whistler";
import { Redirect } from "react-router-dom";
import Headerngo from "../../../Header/Headerngo";
import img from "../../Images/images.jpg";
import img2 from "../../Images/user.png";
import { Link } from "react-router-dom";
import styles from "./Inspect.module.css";
import Footer from "../../../Footer/Footer";
import Spinner from "../../../Ui/Spinner/Spinner";

const Inspect = (props) => {
  const [show, setshow] = useState(false);
  const func1 = () => {
    setshow(true);
  };
  const [chemical, setChemical] = useState("");
  const [quantity, setQuantity] = useState("");
  const [remarks, setRemarks] = useState([]);
  const [Inspector, setInspector] = useState([]);
  const [loading, setLoading] = useState(false);

  const onInspectHandler = async () => {
    setLoading(true);

    const accounts = await web3.eth.getAccounts();

    console.log(accounts[0]);

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + "/" + dd + "/" + yyyy;

    try {
      await Whistler.methods
        .inspect(
          localStorage.getItem("assigned"),
          chemical,
          quantity,
          today,
          localStorage.getItem("name"),
          true,
          remarks,
          Inspector
        )
        .send({
          from: accounts[0],
        });
    } catch (e) {
      window.alert(e);
      setLoading(false);
    }
  };

  const onFinishHandler = () => {
    onInspectHandler();

    const data = {
      ngoId: localStorage.getItem("ngoId")
    };

    console.log(data);

    axios
      .post("https://whistler-backend.herokuapp.com/admin/done", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });

    localStorage.setItem("isAssigned", "false");
    window.location.reload();
  }

  let form = (
    <div>
      <div className={styles.tileup}>
        <div className={styles.bar}>{localStorage.getItem("name")}</div>

        <div className={styles.tile}>
          <div className={styles.user}></div>

          <div className={styles.inner}>
            <div className={styles.one}>
              <p>Assigned Factory ID:</p>
              <div className={styles.date}>
                <div>{localStorage.getItem("Assigned Factory Id")}</div>
              </div>
            </div>
            <div className={styles.one}>
              <p>Assigned Factory Name:</p>
              <div className={styles.aadhar}>
                <div>TISCO</div>
              </div>
            </div>
            <div className={styles.one}>
              <p>Assigned On: </p>
              <div className={styles.group}>
                {localStorage.getItem("dateON")}
              </div>
            </div>
            <div className={styles.one}>
              <p>Inspection Date: </p>
              <div className={styles.group}>{localStorage.getItem("date")}</div>
            </div>
            {!show ? (
              <div onClick={func1} className={styles.btn}>
                Inspect
              </div>
            ) : (
              <br />
            )}
          </div>
        </div>
      </div>
      <div className={show ? styles.box : styles.hid}>
        <div className={styles.imgback}>
          <img src={img2} className={styles.img} />
        </div>
        <div className={styles.tag}>Inspection Report</div>

        <input
          type="text"
          placeholder="chemical name"
          className={styles.inp}
          onChange={(event) => setChemical(event.target.value)}
        />
        <input
          type="text"
          placeholder="quantity"
          className={styles.inp}
          onChange={(event) => setQuantity(event.target.value)}
        />

        <textarea
          placeholder="remarks"
          onChange={(event) => setRemarks(event.target.value)}
          className={styles.txt}
        ></textarea>

        <input
          type="text"
          placeholder="Inspector Name"
          onChange={(event) => setInspector(event.target.value)}
          className={styles.inp}
        />
        <button className={styles.btn2}
        onClick={onInspectHandler} >Submit and Add Another Report</button>

        <button className={styles.btn2} onClick={onFinishHandler}>
          SUBMIT and Finish Inspection
        </button>
      </div>
    </div>
  );

  return (
    <div className={styles.page}>
      <Headerngo />

      {loading ? <Spinner /> : null}

      {console.log(localStorage.getItem("isAssigned"))}

      {localStorage.getItem("isAssigned") == "true" ? (
        form
      ) : (
        <div className={styles.nope}>
          {" "}
          <p className={styles.nopep}> No Assignment yet!!</p>
          <p> Visit Old assignments</p>
          <div className={styles.fifty}>
            <div className={styles.select}>
              <Link to="/">Previous </Link>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Inspect;
