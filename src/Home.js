import React from "react";
import axios from "axios";
import "./styles/home.css";
import HomeView from "./HomeView"


class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
      fastfood: [],
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
        `${"https://cors.bridged.cc/"}https://api.yelp.com/v3/businesses/search?`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
          params: {
            location: "StatenIsland",
            category: "restaurants",
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

    axios
      .get(
        `${"https://cors.bridged.cc/"}https://api.yelp.com/v3/businesses/search?`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
          params: {
            location: "StatenIsland",
            term: "fastfood",
          },
        }
      )
      .then((res) => {
        console.log(res.data.businesses);
        this.setState({ fastfood: res.data.businesses, loading: false });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  render() {
    return (
      <div>
        <HomeView
          restaurants={this.state.restaurants}
          loading={this.state.loading}
          fastfood={this.state.fastfood}>
        </HomeView>
      </div>
    );
  }
}

export default Home;
