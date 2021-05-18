import React from "react"
import axios from "axios";
import "./styles/home.css"
import Navbar from "./Navbar"
import { Card, Layout, Spin, Carousel } from 'antd';

const { Footer } = Layout;

const imageStyle = {
    height: '350px',
    width: '100vw'
}
const { Meta } = Card;

const RestaurantView = (props) => {
    console.log(props.restaurant);
    console.log(props.menu);
    var value = props.restaurant;
    var items = props.menu;
    console.log(items.menu_sections);

    return (
        <div className="BG">
            <Navbar />
            {!props.loading ? (
                <div>
                    {value && items ? ( 
                        <div>
                            {items.menu_name}
                            <br></br>
                            {items.menu_sections && items.menu_sections.map((s) => {
                                <div key={s.section_name}>
                                    <h3>{s.section_name}</h3>
                                    <p>{s.description}</p>
                                    {s.menu_items.length > 0 && s.menu_items.map((food) => 
                                        <div key={food.name}>
                                            <p>{food.name}</p>
                                            <p>{food.description}</p>
                                            <p>{food.price}</p>
                                        </div>
                                    )}
                                </div>
                            })}
                        </div>
                    ) : 
                    <div style={{ height: "50vh" }} className="container d-flex justify-content-center align-items-center">
                        <Spin size="large" />
                    </div>
                    }
                </div>
            ) : 
            <div style={{ height: "50vh" }} className="container d-flex justify-content-center align-items-center">
                <Spin size="large" />
            </div>
            }
            <div className="mt-5">
                <Layout>
                    <Footer className="text-white" style={{ textAlign: 'center', backgroundColor: '#001529' }}>Munch Eats ©2021</Footer>
                </Layout>
            </div>
        </div>
    )
}

export default RestaurantView;