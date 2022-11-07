import React from "react";
import Card from "../Card/Card";

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
         time={restaurant.time.map((choices) => choices)}
         websiteLink={restaurant.websiteLink}
         address={restaurant.address}
       />
     );
  })
  return (
    <div>
      <h1>{displayRandomRestaurant}</h1>
    </div>
  );
};

export default Randomizer;
