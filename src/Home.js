import React from "react";
import axios from "axios";
import "./styles/home.css";
import HomeView from "./HomeView";

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

      // axios
      //   .get(
      //     'https://api.documenu.com/v2/restaurants/search/fields',
      //     {
      //       headers: {
      //         'x-api-key': '57252e4269885f88fb92ae743fa700f8',
      //       },
      //       params: {
      //         address: '4255 Amboy Rd',
      //         zip_code: '10308',
      //         state: 'NY',
      //         fullmenu: 'true',
      //       },
      //     }
      //   )
      //   .then((res) => {
      //     console.log(res.data.data[0]);
      //   })
      //   .catch((err) => {
      //     console.log(err.response);
      //   })
  };

  render() {
    return (
      <div>
        <HomeView
          restaurants={this.state.restaurants}
          loading={this.state.loading}
          fastfood={this.state.fastfood}
        ></HomeView>
      </div>
    );
  }
}

export default Home;
