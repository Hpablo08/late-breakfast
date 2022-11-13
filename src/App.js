import React, { Component } from "react";
import { fetchBrunchData } from "./api";
import "./App.css";
import Choices from "./Components/Choices/Choices";
import Details from "./Components/Details/Detail";
import Form from "./Components/Form/Form";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import { Route } from "react-router-dom";
import Randomizer from "./Components/Randomizer/Randomizer";
import { Switch } from "react-router-dom";
import baconeggs from "./images/baconeggs.gif";
import Favorites from "./Components/Favorites/Favorites";
import PageNotFound from "./Components/PageNotFound/PageNotFound";

class App extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
      faveRest: [],
    };
  }
  componentDidMount = async () => {
    this.setState({ loading: true });
    try {
      const restaurantList = await fetchBrunchData();
      const data = await restaurantList.json();
      this.setState({ restaurants: data.brunchData, loading: false });
    } catch {
      this.setState({ error: "Sorry, no restaurants found try again later" });
    }
  };
  addRestaurant = (newRestaurant) => {
    this.setState({ restaurants: [...this.state.restaurants, newRestaurant] });
  };
  deleteRestaurant = (id) => {
    const filteredIdeas = this.state.restaurants.filter(
      (restaurant) => restaurant.id != id
    );

    this.setState({ restaurants: filteredIdeas });
  };
  addFavorite = (id) => {
    const findFavorites = this.state.restaurants.find(
      (restaurant) => restaurant.id === id
    );
    this.setState({ faveRest: [...this.state.faveRest, findFavorites] });
  };
  render() {
    return (
      <div className="App">
        <NavigationBar
          restaurants={this.state.restaurants}
          faveRest={this.state.faveRest}
          deleteRestaurant={this.deleteRestaurant}
          addFavorite={this.addFavorite}
        />
        <div className="loader-container">
          {this.state.loading && (
            <img
              src={baconeggs}
              className="loader"
              alt="Eggs & Bacon Loading"
            />
          )}
        </div>
        {!this.state.restaurants.length && (
          <h2 className="error-message">{this.state.error}</h2>
        )}
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <div className="home-page-container">
                <Form addRestaurant={this.addRestaurant} />
              </div>
            )}
          />
          <Route
            exact
            path="/choices"
            render={() => (
              <Choices
                restaurants={this.state.restaurants}
                deleteRestaurant={this.deleteRestaurant}
                addFavorite={this.addFavorite}
              />
            )}
          />
          <Route
            exact
            path="/favorites"
            render={() => (
              <Favorites
                faveRest={this.state.faveRest}
                deleteRestaurant={this.deleteRestaurant}
              />
            )}
          />
          <Route
            exact
            path="/randomizer"
            render={() => (
              <Randomizer
                restaurants={this.state.restaurants}
                addFavorite={this.addFavorite}
              />
            )}
          />
          <Route
            exact
            path="/location/:id"
            render={({ match }) => <Details restaurantId={match.params.id} />}
          />
          <Route path="*" component={PageNotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
