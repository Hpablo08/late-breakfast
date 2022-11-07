import React, {Component} from "react";
import { fetchBrunchData } from "./api";
import './App.css'
import Choices from "./Components/Choices/Choices";
// import Choices from "./Components/Choices/Choices";
import Form from "./Components/Form/Form";
// import Randomizer from "./Components/Randomizer/Randomizer";

class App extends Component {
  constructor() {
    super()
    this.state = {
      restaurants: [],
    };
  }
  componentDidMount = async () => {
    try {
      const restaurantList = await fetchBrunchData()
      const data = await restaurantList.json()
      this.setState({ restaurants: data.brunchData });
    } catch {
     this.setState({error: "Sorry, no restaurants found try again later"})
  }
}
   addRestaurant = (newRestaurant) => {
    console.log(newRestaurant)
    this.setState({restaurants: [...this.state.restaurants, newRestaurant]});
  }
  render() {
    console.log(this.state.restaurants)
return ( 
    <main className="App">
      <h1>Late Breakfast</h1>
     <div>
      <Choices restaurants={this.state.restaurants}/>
     </div>
      <Form addRestaurant={this.addRestaurant}/>
    </main>
  )
  }
  
}

export default App

