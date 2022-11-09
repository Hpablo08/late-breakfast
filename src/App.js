import React, {Component} from "react";
import { fetchBrunchData } from "./api";
import './App.css'
import Choices from "./Components/Choices/Choices";
import Details from "./Components/Details/Detail";
import Form from "./Components/Form/Form";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import { Route } from "react-router-dom";
 import Randomizer from "./Components/Randomizer/Randomizer";
 import { Switch } from "react-router-dom";

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
   // console.log(this.state.restaurants)
return (
  <div className="App">    
      <NavigationBar restaurants={this.state.restaurants} />
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div className="form">              
              <Form addRestaurant={this.addRestaurant} />
            </div>
          )}
        />
        <Route
          path="/choices"
          render={() => <Choices restaurants={this.state.restaurants} />}
        />
        <Route
          path="/randomizer"
          render={() => <Randomizer restaurants={this.state.restaurants} />}
        />
        <Route
          path="/:id"
          render={({ match }) => <Details restaurantId={match.params.id} />}
        />
      </Switch>
    
  </div>
);
  }
  
}

export default App

