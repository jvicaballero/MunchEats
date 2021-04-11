import React from "react"
import "./styles/home.css"
import Navbar from "./Navbar"
import RestaurantContainer from "./RestaurantContainer"
import HomeBanner1 from "./styles/Images/HomeBanner1.png"
import HomeBanner2 from "./styles/Images/HomeBanner2.png"
import HomeBanner3 from "./styles/Images/HomeBanner3.png"
import { Card, Layout, Spin, Carousel } from 'antd';


const { Footer } = Layout;

const imageStyle = {
    height: '350px',
    width: '100vw'
}
const { Meta } = Card;

const HomeView = (props) => {
    return (
        <div className="BG">
            <Navbar />
            <div>
                <Carousel autoplay>
                    <div>
                        <img className="homeBanner1" style={imageStyle} src={HomeBanner1} alt="homebanner1"></img>
                    </div>
                    <div>
                        <img className="homeBanner2" style={imageStyle} src={HomeBanner2} alt="homebanner1"></img>
                    </div>
                    <div>
                        <img className="homeBanner3" style={imageStyle} src={HomeBanner3} alt="homebanner1"></img>
                    </div>
                </Carousel>
            </div>
            {!props.loading ? (
                <div className="container">              <div className=" mt-5 mx-5 d-flex">
                    <h2>Local Favorites</h2>
                    <button className="mx-4 text-white" style={{ backgroundColor: "#D42B2B", borderRadius: 30, width: 110, height: 40, borderStyle: "none" }}> View All</button>
                </div>
                    <RestaurantContainer
                        fastfood={props.fastfood}
                        restaurants={props.restaurants}
                        type="restaurant">
                    </RestaurantContainer>
                    <div className=" mt-5 mx-5 d-flex">
                        <h2>Fast Food</h2>
                        <button className="mx-4 text-white" style={{ backgroundColor: "#D42B2B", borderRadius: 30, width: 110, height: 40, borderStyle: "none" }}> View All</button>
                    </div>
                    <RestaurantContainer
                        fastfood={props.fastfood}
                        restaurants={props.restaurants}
                        type="fastfood">
                    </RestaurantContainer>
                </div>
            ) : <div style={{ height: "50vh" }} className="container d-flex justify-content-center align-items-center">
                <Spin size="large" />
            </div>}
            <div className="mt-5">
                <Layout>
                    <Footer className="text-white" style={{ textAlign: 'center', backgroundColor: '#001529' }}>Munch Eats ©2021</Footer>
                </Layout>
            </div>
        </div>
    )
}

export default HomeView;
