import React, { useState } from "react";
import "./Box.css";
import { Icon, IconButton } from "@material-ui/core";
import TrainIcon from "@material-ui/icons/TrainOutlined";
import ArrowIcon from "@material-ui/icons/ArrowDownward";
import Up from "@material-ui/icons/ArrowUpward";
import { useHistory } from "react-router-dom";
function Box() {
  var station = ["Mumbai", "Delhi", "Kolkata", "Bangalore", "Chennai"];
  const [sr, setSr] = useState("");
  const [dest, setDest] = useState("");
  const [date, setDate] = useState("");
  var today = new Date();
  const handleClick = () => {
    if (sr === dest) {
      alert("Source and Destination cannot be same");
      return;
    }
    var dt = new Date(date);
    if (dt < today) {
      alert("Enter valid Date");
      return;
    }
    console.log(sr);
    console.log(dest);
    // history.push("/trainlist");
    history.push({
      pathname: "/trainlist",
      state: {
        source: sr,
        destination: dest,
      },
    });
  };
  const source = () => {
    let res = [];
    for (var i = 0; i < station.length; i++) {
      res.push(<option id={station[i]}>{station[i]}</option>);
    }
    return res;
  };
  const history = useHistory();
  return (
    <div className="box">
      <img
        src="https://images.pexels.com/photos/72594/japan-train-railroad-railway-72594.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      "
      <div className="image">
        <div className="extra"></div>
        <div className="book">
          <div className="book__header">
            <div className="title3">
              <div className="book1">
                <h3>BOOK</h3>
              </div>
              <div className="urticket">
                <h5>Your Ticket</h5>
              </div>
              <div className="icon1">
                <IconButton>
                  <TrainIcon />
                </IconButton>
              </div>
            </div>
          </div>
          <div className="form">
            <form action="">
              <div className="form-control">
                <input
                  type="text"
                  placeholder="Enter Source"
                  required
                  className="text"
                  onChange={(e) => setSr(e.target.value)}
                />
                <IconButton>
                  {" "}
                  <ArrowIcon></ArrowIcon>
                  <Up />
                </IconButton>

                <input
                  type="text"
                  placeholder="Enter Destination"
                  required
                  className="text"
                  onChange={(e) => setDest(e.target.value)}
                />

                <input
                  type="date"
                  style={{ border: "none", borderRadius: "6px" }}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
              <div className="btn1">
                <button className="btn" onClick={handleClick}>
                  Find Trains
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Box;
