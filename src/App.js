import React, {useEffect, useState} from "react";
import { fetchBrunchData } from "./api";
import './App.css'
import Choices from "./Components/Choices/Choices";
import Form from "./Components/Form/Form";
import Randomizer from "./Components/Randomizer/Randomizer";

const App = () => {
  const [restaurants, setRestaurants] = useState([])

  const addRestaurant = (newRestaurant) => {
    setRestaurants([...restaurants, newRestaurant]);
  }
  return ( 
    <main className="App">
      <h1>Late Breakfast</h1>
      <Choices />
      <Randomizer />
      <Form />
    </main>
  )
}

