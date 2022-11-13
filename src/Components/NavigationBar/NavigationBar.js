import React from "react";
import "./NavigationBar.css";
import Choices from "../Choices/Choices";
import { Link } from "react-router-dom";
import Randomizer from "../Randomizer/Randomizer";
import Favorites from "../Favorites/Favorites";
import breakfast from "../../images/breakfast.png";
import PropTypes from "prop-types";

const NavigationBar = ({ restaurants, faveRest, deleteRestaurant, addFavorite }) => {
  return (
    <div className="nav-bar">
      <img src={breakfast} className="logo" alt="late-breakfast-logo" />
      <div className="nav-btn-container">
        <Link
          to={"/choices"}
          onClick={() => {
            <Choices restaurants={restaurants} addFavorite={addFavorite} />;
          }}
        >
          <button>Restaurant Choices</button>
        </Link>
        <Link
          to={"/favorites"}
          onClick={() => {
            <Favorites
              faveRest={faveRest}
              deleteRestaurant={deleteRestaurant}
              addFavorite={addFavorite}
            />;
          }}
        >
          <button>Favorite</button>
        </Link>
        <Link
          to={"/randomizer"}
          onClick={() => {
            <Randomizer restaurants={restaurants} addFavorite={addFavorite} />;
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
};

export default NavigationBar;

NavigationBar.propTypes = {
  restaurants: PropTypes.array,
  deleteRestaurant: PropTypes.func,
  addFavorite: PropTypes.func,
};
