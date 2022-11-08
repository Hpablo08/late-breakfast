import React from "react";
import './NavigationBar.css'
import Choices from "../Choices/Choices";
import { Link } from "react-router-dom";
import Randomizer from "../Randomizer/Randomizer";

const NavigationBar = ({restaurants}) => {
  return (
    <div className="nav-bar">
      <h1 className="neon-sign">Late Breakfast</h1>
      <div className="nav-btn-container">
        <Link
          to={"/choices"}
          onClick={() => {
            <Choices restaurants={restaurants} />;
          }}
        >
          <button>Restaurant Choices</button>
        </Link>
        <Link
          to={"/randomizer"}
          onClick={() => {
            <Randomizer restaurants={restaurants} />;
          }}
        >
          <button>Randomizer</button>
        </Link>
        <Link to={"/"}>
          <button className="details-home-btn">Home</button>
        </Link>
      </div>
    </div>
  );
}

export default NavigationBar