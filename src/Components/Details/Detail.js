import React,{Component} from "react";
import './Details.css'
import { Link } from "react-router-dom";
import { fetchBrunchData } from "../../api";


class Details extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
      currentRestaurant: {}
    };
  }

  componentDidMount = async () => {    
    console.log("hi") 
    if (this.props.restaurantId > 21) {
      <h1>Your Choice has no details</h1>
    }  else {
   
    try {
      const restaurantList = await fetchBrunchData()
      const data = await restaurantList.json() 
      this.setState({ restaurants: data.brunchData }); 
      const currentRestaurant = data.brunchData.find(rest => rest.id === Number(this.props.restaurantId))
      this.setState({ currentRestaurant: currentRestaurant })              
      
    } catch {
     this.setState({error: "Sorry, no restaurants found try again later"})
  }
}
 };

  render() { 
    let rest = this.state.currentRestaurant;  
    console.log(rest.time)
    return (
      <div className="rest-details-container">
        <img
          src={rest.image}
          className="rest-details-image hidden"
          alt={`image of ${rest.title}`}
        />
        <h1 className="rest-name">{rest.name}</h1>

        <h3 className="rest-address">Address: {rest.address}</h3>
        <p>{rest.time}</p>
        <h3 className="link">
          <a href={rest.websiteLink}>Visit Their Website</a>
        </h3>
        <Link to={"/choices"}>
          <button className="choices-home-btn">Back to Restaurants</button>
        </Link>
      </div>
    );
  }
}


export default Details