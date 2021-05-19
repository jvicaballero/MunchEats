import React, { useContext } from "react"
import "./styles/home.css"
import Navbar from "./Navbar"
import { CartContext } from './contexts/CartContext';
import { Layout, Spin, notification } from 'antd';
import { formatNumber } from './helpers/utils';
import { ShoppingCartOutlined, SmileOutlined } from '@ant-design/icons';

const { Footer } = Layout;

const RestaurantView = (props) => {
    console.log(props.restaurant);
    console.log(props.menu);

    const { addProduct, cartItems, increase } = useContext(CartContext);

    const isInCart = food => {
        if (!!cartItems.find(item => item.name === food.name)) {
            increase(food);
        } else {
            addProduct(food);
        }
        openNotification(food.name);
    }

    const openNotification = (name) => {
        notification.open({
            message: name,
            description: 'Added to Cart',
            icon: <SmileOutlined style={{ color: '#FFA500' }} />,
        });
    };

    return (
        <div className="BG">
            <Navbar />
            <div className="container">
                {!props.loading && !props.loading2 ? (
                    <div className="restaurantContainer mt-5">
                        {props.restaurant && props.menu ? (
                            <div className="p-4 mt-">
                                <h1>{props.restaurant.name}</h1>
                                {props.menu.menu_sections && props.menu.menu_sections.map((s) => {
                                    return (
                                        <div className="mt-5" key={s.section_name}>
                                            <h3>{s.section_name}</h3>
                                            <p>{s.description}</p>
                                            {s.menu_items.length > 0 && s.menu_items.map((food) =>
                                                <div className="border border-2 border-dark rounded-pill mb-3 p-2 div-hover d-flex justify-content-between" key={food.name} onClick={() => isInCart(food)}>
                                                    <div className="mx-4">
                                                        <h5>{food.name}</h5>
                                                        <p>{food.description}</p>
                                                        <p>{formatNumber(food.price)}</p>
                                                    </div>
                                                    <div className="add_to_cart_notif d-flex justify-content-center align-items-center rounded-pill">
                                                        <ShoppingCartOutlined style={{ fontSize: '50px', color: '#fff' }} />
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                        ) :
                            <div style={{ height: "100vh" }} className="container d-flex justify-content-center align-items-center">
                                <Spin size="large" />
                            </div>
                        }
                    </div>
                ) :
                    <div style={{ height: "100vh" }} className="container d-flex justify-content-center align-items-center">
                        <Spin size="large" />
                    </div>
                }
            </div>
            <div className="mt-5">
                <Layout>
                    <Footer className="text-white" style={{ textAlign: 'center', backgroundColor: '#001529' }}>Munch Eats ©2021</Footer>
                </Layout>
            </div>
        </div>
    )
}

export default RestaurantView;
