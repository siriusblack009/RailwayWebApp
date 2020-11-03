import React from "react";
import "./Box.css";
import { useHistory } from "react-router-dom";

function Box() {
  const history = useHistory();
  var ticket = history.location.state;
  return (
    <div className="masterbox">
      <div className="box4" style={{ boxShadow: "none" }}></div>
      <div className="box4" style={{ boxShadow: "none", flex: "0.08" }}></div>
      <div className="box4" style={{ flex: "0.33" }}>
        <div className="subbox">
          <h2>Ticket Details:</h2>
        </div>
        <div className="subbox">
          <h4>Name: {ticket.user_name}</h4>
        </div>
        <div className="subbox">
          <h4>Age: {ticket.age}</h4>
        </div>

        <div className="subbox">
          <h4>Gender: {ticket.gender}</h4>
        </div>

        <div className="subbox">
          <h4>Train No: {ticket.train_number}</h4>
        </div>

        <div className="subbox">
          {" "}
          <h4>Source: {ticket.source}</h4>
        </div>

        <div className="subbox">
          <h4>Destination: {ticket.destination}</h4>
        </div>

        <div className="subbox">
          {" "}
          <h4>Pnr_No: {ticket.pnr_number}</h4>
        </div>

        <div className="subbox">
          {" "}
          <h4>Seat_no: {ticket.seat_number}</h4>
        </div>

        <div className="subbox">
          <h4>Fare: {ticket.fare}</h4>
        </div>
      </div>
    </div>
  );
}

export default Box;
