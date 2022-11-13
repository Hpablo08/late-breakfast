import React from "react";
import Card from "../Card/Card";
import UserCard from "../UserCard/UserCard";
import "./Favorites.css";
import PropTypes from "prop-types";

const Favorites = ({ faveRest, deleteRestaurant, addFavorite }) => {
  let displayChoices;
  let noChoices;
  if (!faveRest.length) {
    noChoices = <h1 className="favorite">You Have NO Favorites</h1>;
  } else {
    displayChoices = faveRest.map((restaurant) => {
      if (restaurant.id <= 21) {
        return (
          <Card
            key={restaurant.id}
            id={restaurant.id}
            img={restaurant.image}
            name={restaurant.name}
            address={restaurant.address}
            addFavorite={addFavorite}
          />
        );
      } else {
        return (
          <UserCard
            key={restaurant.id}
            id={restaurant.id}
            img={restaurant.image}
            name={restaurant.name}
            deleteRestaurant={deleteRestaurant}
            addFavorite={addFavorite}
          />
        );
      }
    });
  }
  return (
    <div>
      <div>{noChoices}</div>
      <div className="fave-container">{displayChoices}</div>
    </div>
  );
};

export default Favorites;

Favorites.propTypes = {
  faveRest: PropTypes.array,
  deleteRestaurant: PropTypes.func,
  addFavorite: PropTypes.func,
};
