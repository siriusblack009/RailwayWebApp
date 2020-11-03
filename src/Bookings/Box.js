import React, { useState, useEffect } from "react";
import "./Box.css";
import { server_url } from "../constants";
import Axios from "axios";

function Box() {
  const header = [
    "S.No",
    "Id",
    "Passenger_Id",
    "Name",
    "Age",
    "Gender",
    "Pnr_No",
    "Seat_No",
    "Train_No",
    "Fare",
    "Status",
    "Source",
    "Destination",
  ];
  const [content, setContent] = useState(null);

  const url = server_url + "tickets/";
  useEffect(() => {
    Axios.get(url).then((response) => {
      setContent(response.data);
      console.log(response);
      generateData();
    });
  }, []);

  function generateHeader() {
    let res = [];
    for (var i = 0; i < header.length; i++) {
      res.push(<div className="head">{header[i]}</div>);
    }
    return res;
  }
  function generateData() {
    let res = [];
    if (content === null) {
      res.push(
        <h1
          style={{
            justifySelf: "center",
            justifyContent: "center",
            alignContent: "center",
            marginLeft: "35vw",
          }}
        >
          No Bookings Available
        </h1>
      );
      return res;
    }
    for (var i = 0; i < content.length; i++) {
      //   if (content[i].Seats === 0) continue;
      res.push(
        <div className="tr">
          <div className="td">{i + 1}</div>
          <div className="td">{content[i].id}</div>
          <div className="td">{content[i].passenger_Id}</div>
          <div className="td">{content[i].user_name}</div>
          <div className="td">{content[i].age}</div>
          <div className="td">{content[i].gender}</div>
          <div className="td">{content[i].pnr_number}</div>
          <div className="td">{content[i].seat_number}</div>
          <div className="td">{content[i].train_number}</div>
          <div className="td">{content[i].fare}</div>
          <div className="td">{content[i].reservation_status}</div>
          <div className="td">{content[i].source}</div>
          <div className="td">{content[i].destination}</div>
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
          No Bookings Available
        </h1>
      );
    }
    return res;
  }
  return (
    <div className="box15">
      <h2>Bookings:</h2>
      <div className="tabl">
        <div className="table_header">{generateHeader()}</div>
        <div className="table_body">{generateData()}</div>
      </div>
    </div>
  );
}

export default Box;
