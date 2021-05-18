import React from 'react'
import "./styles/home.css"
import { Card, Rate } from 'antd';
import { withRouter } from "react-router-dom";

const { Meta } = Card;

const RestaurantContainer = (props) => {
    var value
    props.type == "restaurant" ? (value = props.restaurants) : value = props.fastfood
    return (
        <div>
            <div className="restaurantContainer p-4">
                <div class="row row-cols-1 row-cols-md-3 g-4">
                    {value &&
                        value.slice(0, 6).map((restaurant) => (
                            <div class="col" key={restaurant.id} onClick={() => props.history.push(`/restaurant/${restaurant.name}/${restaurant.location.address1}/${restaurant.location.city}/${restaurant.location.state}/${restaurant.location.country}/${restaurant.location.zip_code}`)}>
                                <Card
                                    className="Card"
                                    span={8}
                                    hoverable
                                    style={{ width: 400, borderRadius: 30 }}
                                    cover={
                                        <img
                                            className="ImageTop"
                                            alt="example"
                                            style={{ width: 400, height: 300, borderRadius: "30px 30px 0px 0px" }}
                                            src={restaurant.image_url}
                                        />
                                    }
                                >
                                    <Meta title={restaurant.name} />
                                    <div className="d-flex">
                                        <h6 className="mt-1">{restaurant.price}</h6>
                                        <h6 className="mt-1 mx-2">{restaurant.rating}</h6>
                                        {restaurant.rating == 5 ? (
                                            <>
                                                <Rate style={{ fontSize: 16 }} disabled defaultValue={5} />
                                            </>
                                        ) : restaurant.rating < 5 && restaurant.rating >= 4 ? (
                                            <>
                                                <Rate style={{ fontSize: 16 }} disabled defaultValue={4} />
                                            </>
                                        ) : restaurant.rating < 4 && restaurant.rating >= 3 ? (
                                            <>
                                                <Rate style={{ fontSize: 16 }} disabled defaultValue={3} />
                                            </>
                                        ) : restaurant.rating < 3 ? (
                                            <>
                                                <Rate style={{ fontSize: 16 }} disabled defaultValue={2} />
                                            </>
                                        ) : <></>
                                        }
                                    </div>
                                    <p>{restaurant.location.address1}</p>
                                </Card>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    )
}
export default withRouter(RestaurantContainer);
