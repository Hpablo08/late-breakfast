import React from "react";
import Card from "../Card/Card";
import './Randomizer.css'

const Randomizer = ({restaurants}) => {
  console.log("random")
  const randomRestaurant = restaurants.sort((a, b) => 0.5 - Math.random()).slice(0, 1)
  const displayRandomRestaurant = randomRestaurant.map((restaurant) => {
     return (
       <Card
         key={restaurant.id}
         id={restaurant.id}
         img={restaurant.image}
         name={restaurant.name}
         address={restaurant.address}        
       />
     );
  })
  return (
    <div>
      <h1>Your Random Choice</h1>
      <div className="RandomCard">{displayRandomRestaurant}</div>
    </div>
  );
};

export default Randomizer;
