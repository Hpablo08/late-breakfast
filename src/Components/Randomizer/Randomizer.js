import React from "react";
import Card from "../Card/Card";
import UserCard from "../UserCard/UserCard";
import "./Randomizer.css";

const Randomizer = ({ restaurants }) => {
  const randomRestaurant = restaurants
    .sort((a, b) => 0.5 - Math.random())
    .slice(0, 1);
  const displayRandomRestaurant = randomRestaurant.map((restaurant) => {
    if (restaurant.id <= 21) {
      return (
        <Card
          key={restaurant.id}
          id={restaurant.id}
          img={restaurant.image}
          name={restaurant.name}
          address={restaurant.address}
        />
      );
    } else {
      return (
        <UserCard
          key={restaurant.id}
          id={restaurant.id}
          img={restaurant.image}
          name={restaurant.name}
        />
      );
    }
  });
  return (
    <div>
      <h1>Your Random Choice</h1>
      <div className="RandomCard">{displayRandomRestaurant}</div>
    </div>
  );
};

export default Randomizer;
