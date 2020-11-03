import React, { useState, useReducer } from "react";
import "./Box.css";
import Spinner from "./Spinner";
import { useHistory } from "react-router-dom";
import Axios from "axios";
import { server_url } from "../constants";
function Box() {
  const history = useHistory();
  const defaultState = {
    isSpinnerOpen: false,
  };
  const reducer = (state, action) => {
    if (action.type === "open_spinner") {
      return {
        ...state,
        isSpinnerOpen: true,
      };
    }
    if (action.type === "close_spinner") {
      return {
        ...state,
        isSpinnerOpen: false,
      };
    }
  };
  const [state, dispatch] = useReducer(reducer, defaultState);

  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const handleClick = () => {
    if (!name.trim()) {
      alert("Please Enter Name");
      return;
    }
    if (age < 0 || age > 150) {
      alert("Please Enter Valid Age");
      return;
    }
    dispatch({ type: "open_spinner" });
    var url = server_url + "passenger/";
    const params = {
      user_name: name,
      age: age,
      gender: "Male",
      train_number: history.location.state.train_number,
      source: history.location.state.source,
      destination: history.location.state.destination,
      cost: history.location.state.cost,
    };
    console.log(params);
    console.log(url);
    Axios.post(url, params).then((response) => {
      console.log(response);
      history.push({
        pathname: "/ticket",
        state: response.data,
      });
    });
    dispatch({ type: "close_spinner" });
  };
  const closeSpinner = () => {
    // dispatch({ type: "close_spinner" });
    // history.push("/ticket");
  };

  return (
    <div className="box">
      <div className="extra"></div>
      <div className="contain">
        <div className="header_contain">
          <h2>Enter Passenger Details:</h2>
        </div>
        <div className="form">
          <div className="first">
            <label htmlFor="Name">Name:</label>
            <input
              id="Name"
              name="Name"
              type="text"
              placeholder="Enter Your Name*"
              style={{ textTransform: "capitalize", fontWeight: "bold" }}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className="first">
            <label htmlFor="Age">Age:</label>
            <input
              id="Age"
              name="Age"
              type="number"
              placeholder="Enter Your Age*"
              style={{ fontWeight: "bold" }}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="first">
            <label htmlFor="gender">Gender:</label>
            <select name="gender" id="gender" style={{ fontWeight: "bold" }}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="third">Third Gender</option>
            </select>
          </div>

          <div className="first">
            <button onClick={handleClick} className="btn2">
              Submit
            </button>
          </div>
        </div>
      </div>
      <div className="extra"></div>
      <div className="spin">
        {state.isSpinnerOpen && <Spinner closeSpinner={closeSpinner} />}
      </div>
    </div>
  );
}

export default Box;
