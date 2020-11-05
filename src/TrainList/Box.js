import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Box.css";
import Axios from "axios";
import { server_url } from "../constants";

async function makeRequest(source, dest) {
  const url = server_url + "search/";
  const params = {
    start: "Agra",
    stop: "Agra2",
  };
  var content;
  console.log(params);
  await Axios.post(url, params).then((response) => {
    content = response.data;
  });
  console.log(content);
  return content;
}
function Box() {
  const history = useHistory();
  const header = [
    "Serial No",
    "Train No",
    "Train Name",
    "Seats Available",
    "Cost",
    "Book",
  ];

  var source = history.location.state.source;
  var dest = history.location.state.destination;

  const [content, setContent] = useState(null);

  const url = server_url + "search/";
  const params = {
    start: source,
    stop: dest,
  };
  useEffect(() => {
    Axios.post(url, params).then((response) => {
      setContent(response.data);
      //   console.log(content);
      generateData();
    });
  }, []);

  //   let content = makeRequest(source, dest);
  //   console.log(1);
  //   const content = [
  //     { Train_No: 12345, Train_Name: "rajdhani", Seats: 0 },
  //     { Train_No: 12345, Train_Name: "rajdhani", Seats: 0 },
  //     { Train_No: 12345, Train_Name: "rajdhani", Seats: 0 },
  //     { Train_No: 12345, Train_Name: "rajdhani", Seats: 2 },
  //   ];
  function generateHeader() {
    let res = [];
    for (var i = 0; i < header.length; i++) {
      res.push(<div className="head">{header[i]}</div>);
    }
    return res;
  }
  function generateData() {
    let res = [];
    if (content == null) {
      res.push(
        <h1
          style={{
            justifySelf: "center",
            justifyContent: "center",
            alignContent: "center",
            marginLeft: "35vw",
          }}
        >
          Loading...
        </h1>
      );
      return res;
    }
    for (var i = 0; i < content.length; i++) {
      //   if (content[i].Seats === 0) continue;
      var train_number = content[i].train_number;
      var train_cost = content[i].cost;
      res.push(
        <div className="tr">
          <div className="td">{i + 1}</div>
          <div className="td">{content[i].train_number}</div>
          <div className="td">{content[i].train_name}</div>
          <div className="td">{Math.floor(Math.random() * 100)}</div>
          <div className="td">{content[i].cost}</div>
          <div className="td">
            <button
              className="btn3"
              onClick={() =>
                history.push({
                  pathname: "/passenger",
                  state: {
                    train_number: train_number,
                    source: source,
                    destination: dest,
                    cost: train_cost,
                  },
                })
              }
            >
              Select
            </button>
          </div>
        </div>
      );
    }
    if (res.length === 0) {
      res.push(
        <h1
          style={{
            justifySelf: "center",
            justifyContent: "center",
            alignContent: "center",
            marginLeft: "35vw",
          }}
        >
          No Trains Available
        </h1>
      );
    }
    return res;
  }
  return (
    <>
      <div className="box">
        <div className="tabl">
          <div className="table_header">{generateHeader()}</div>
          <div className="table_body">{generateData()}</div>
        </div>
      </div>
    </>
  );
}

export default Box;
