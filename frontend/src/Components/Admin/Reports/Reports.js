import React, { useState, useEffect } from "react";
import Factory from "../../Cards/Factory/Factory";
import styles from "./Reports.module.css";
import axios from "axios";
import web3 from "../../../ethereum/web3";
import Whistler from "../../../ethereum/whistler";
import Report from "../../Cards/Report/Report";
import { Redirect } from "react-router-dom";
import Header from "../../../Header/Header";
import Footer from "../../../Footer/Footer";
import Spinner from "../../../Ui/Spinner/Spinner";
import { FaWindows } from "react-icons/fa";

const Reports = () => {
  const [reports, setReports] = useState([]);
  const [reports1, setReports1] = useState([]);
  const [count, setCount] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(async () => {
    setLoading(true);

    const accounts = await web3.eth.getAccounts();

    try {
      var today = new Date();
      var dd = String(today.getDate()).padStart(2, "0");
      var mm = String(today.getMonth() + 1).padStart(2, "0");
      var yyyy = today.getFullYear();

      today = mm + "/" + dd + "/" + yyyy;

      setCount(today);

      let reportsArray = [];

      await axios
        .post("https://whistler-backend.herokuapp.com/factory/count")
        .then(async (res) => {
          setCount(res.data.count);
          for (let i = 1; i <= res.data.count; i++) {
            let c = await Whistler.methods.reports_count(i).call({
              from: accounts[0],
            });

            console.log(c);

            for (let j = 0; j < c; j++) {
              let report = await Whistler.methods.reports_map(i, j).call({
                from: accounts[0],
              });

              reportsArray.push(report);

              console.log(report);
            }
          }

          setReports(reportsArray);
          setReports1(reportsArray);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });

      for (let i = 1; i <= count; i++) {
        let c = await Whistler.methods.reports_count(i).call({
          from: accounts[0],
        });

        console.log(c);

        for (let j = 0; j < c; j++) {
          let report = await Whistler.methods.reports_map(i, j).call({
            from: accounts[0],
          });

          console.log(report);
        }

        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      window.alert(e);
      setLoading(false);
    }
  }, []);

  const searchHandler = (e) => {
    let data = reports;
    console.log(data);
    let data2 = data.filter((factory) =>
      factory.chemical_name.includes(e.target.value)
    );
    console.log(e.target.value);
    setReports1(data2);
  };

  const reportsList = (
    <div className={styles.flex}>
      <input
        type="search"
        onChange={searchHandler}
        className={styles.search}
        placeholder="Search"
      />
      {reports1.map((report) => (
        <Report
          chemical={report.chemical_name}
          date={report.date}
          inspector={report.inspector}
          ngo={report.ngo_name}
          quantity={report.quantity}
          remarks={report.remarks}
          treated={report.treated}
        />
      ))}
    </div>
  );

  return (
    <div className={styles.pages}>
      {loading ? <Spinner /> : null}

      <Header />
      <div className={styles.box}>
        <div className={styles.bar}>
          <p>
            Reports<p className={styles.small}>: by NGO</p>
          </p>
        </div>
        {reportsList}
      </div>
      <Footer />
    </div>
  );
};

export default Reports;
