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
    try {
      const restaurantList = await fetchBrunchData()
      const data = await restaurantList.json() 
      this.setState({ restaurants: data.brunchData }); 
      const currentRestaurant = data.brunchData.find(rest => rest.id === Number(this.props.restaurantId))
      this.setState({ currentRestaurant: currentRestaurant })                 
      // this.getRest();
    } catch {
     this.setState({error: "Sorry, no restaurants found try again later"})
  }
 };

  render() { 
    let rest = this.state.currentRestaurant;  
    console.log(rest.time)
    return (
      <div className="rest-details-container">
        <img
          src={rest.image}
          className="details-image hidden"
          alt={`image of ${rest.title}`}
        />
        <h1>{rest.name}</h1>
        <h2 className="link">        
          <a href={rest.websiteLink}>Visit Their Website</a>
        </h2>
        <h2>Address: {rest.address}</h2>
        <p>{rest.time}</p>
        <Link to={"/"}>
          <button className="details-home-btn">Home</button>
        </Link>
      </div>
    );
  }
}


export default Details