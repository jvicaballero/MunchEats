import React from "react";
import app from "./base";
import axios from "axios";
import "./styles/home.css";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.getRestaurants();
  }

  getRestaurants = () => {
    this.setState({ loading: true });

    axios
      .get(
        `${"https://cors-anywhere.herokuapp.com/"}https://api.yelp.com/v3/businesses/search?`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
          params: {
            location: "NYC",
            term: "restaurants",
          },
        }
      )
      .then((res) => {
        console.log(res.data.businesses);
        this.setState({ restaurants: res.data.businesses, loading: false });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  render() {
    return (
      <div>
        <h1>Home</h1>
        <button onClick={() => app.auth().signOut()}>Sign out</button>
        {this.state.restaurants &&
          this.state.restaurants.map((restaurant) => (
            <div key={restaurant.id}>
              <h3 class="restaurant-name">{restaurant.name}</h3>
              <img
                class="restaurant-img"
                src={restaurant.image_url}
                alt="Photo of restaurant"
              ></img>
            </div>
          ))}
      </div>
    );
  }
}

export default Home;
