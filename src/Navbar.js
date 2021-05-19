import React, { useContext } from 'react'
import app from "./base";
import { Layout, Menu, Input } from 'antd';
import { UserOutlined, ShoppingCartOutlined, LogoutOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { CartContext } from './contexts/CartContext';
import { CartIcon } from './icons';
import './styles/navbar.css'

const { Header } = Layout;
const { SubMenu } = Menu;
const { Search } = Input;

const NavBar = () => {
    const { itemCount } = useContext(CartContext);

    return (
        <div>
            <Layout className="layout">
                <Header className="d-flex justify-content-between">
                    <div className="d-flex justify-content-center align-items-center">
                        <Link to=""><div className="logo1" /></Link>
                        <h6 className="text-white mx-2">Munch Eats</h6>
                    </div>
                    <div className="d-flex">
                        <Search className="" placeholder="Search" style={{ width: 200, marginTop: 15, }} enterButton />
                        <Menu theme="dark" mode="horizontal">
                            <SubMenu key="SubMenu" icon={<UserOutlined style={{ fontSize: '23px' }} />} title="Account">
                                <Menu.ItemGroup>
                                    <Menu.Item key="setting:1" onClick={() => app.auth().signOut()} icon={<LogoutOutlined style={{ fontSize: '23px' }} />}>Sign Out</Menu.Item>
                                </Menu.ItemGroup>
                            </SubMenu>
                        </Menu>
                        <Link to='/cart' class="cart-link"> <CartIcon /> Cart ({itemCount})</Link>
                    </div>
                </Header>
            </Layout>

        </div>
    )
}

export default NavBar;
