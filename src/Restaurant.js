import React from "react";
import axios from "axios";
// import "./styles/home.css";
import RestaurantView from "./RestaurantView";

class Restaurant extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      restaurant: [],
      menu: {},
      loading: false,
      loading2: false,
    };
  }

  componentDidMount() {
    this.getRestaurant();
  }

  getRestaurant = (props) => {
    this.setState({ loading: true, loading2: true });

    axios
      .get(
        `${"https://cors.bridged.cc/"}https://api.yelp.com/v3/businesses/matches?`,
        {
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
          },
          params: {
            name: this.props.match.params.name,
            address1: this.props.match.params.address1,
            city: this.props.match.params.city, 
            state: this.props.match.params.state,
            country: this.props.match.params.country,
            zip_code: this.props.match.params.zip_code,
          },
        }
      )
      .then((res) => {
        console.log(res.data.businesses[0]);
        this.setState({ restaurant: res.data.businesses[0], loading: false });
        console.log(this.state.restaurant);
      })
      .catch((err) => {
        console.log(err.response);
      });

    axios
      .get(
        'https://api.documenu.com/v2/restaurants/search/fields',
        {
          headers: {
            'x-api-key': '57252e4269885f88fb92ae743fa700f8',
          },
          params: {
            address: this.props.match.params.address1,
            state: this.props.match.params.state,
            zip_code: this.props.match.params.zip_code,
            fullmenu: 'true',
          },
        }
      )
      .then((res) => {
        console.log(res.data.data[0].menus[0]);
        this.setState({ menu: res.data.data[0].menus[0], loading2: false })
        console.log(this.state.menu);
      })
      .catch((err) => {
        console.log(err.response);
      })
  };

  render() {
    return (
      <div>
        <RestaurantView
            restaurant={this.state.restaurant}
            menu={this.state.menu}
            loading={this.state.loading}
            loading2={this.state.loading2}
        ></RestaurantView>
      </div>
    );
  }
}

export default Restaurant;
