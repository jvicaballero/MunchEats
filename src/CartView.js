import React, { useContext } from 'react';

import CartProducts from './CartProducts';
import { CartContext } from './contexts/CartContext';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import { formatNumber } from './helpers/utils';

import "./styles/cart.css";
import Navbar from "./Navbar";

const { Footer } = Layout;

const CartView = () => {
    const { total, cartItems, itemCount, clearCart, checkout, handleCheckout } = useContext(CartContext);

    return (
        <div>
            <div className="BG-cart">
                <Navbar />
                <div className="placeholder">
                    <div className="container">
                        <div className="text-center mt-5">
                            <h1>Cart</h1>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-sm-9 p-3 test1">
                                {
                                    cartItems.length > 0 ? <CartProducts />
                                        :
                                        <div className="p-3 text-center">
                                            Your cart is empty
                                    </div>
                                }

                                {/* { checkout && 
                                    <div className="p-3 text-center text-success">
                                        <p>Checkout successful</p>
                                        <Link to="/" className="btn btn-outline-success btn-sm">BUY MORE</Link>
                                    </div>
                                } */}
                            </div>
                            {
                                cartItems.length > 0 &&
                                <div className="col-sm-3 p-3">
                                    <div className="card card-body">
                                        <p className="mb-1">Total Items</p>
                                        <h4 className="mb-3 txt-right">{itemCount}</h4>
                                        <p className="mb-1">Total Payment</p>
                                        <h3 className="m-0 txt-right">{formatNumber(total)}</h3>
                                        <hr className="my-4" />
                                        <div className="text-center">
                                            <button type="button" className="btn btn-success mb-2" onClick={handleCheckout}>CHECKOUT</button>
                                            <button type="button" className="btn btn-outline- btn-sm" onClick={clearCart}>CLEAR</button>
                                        </div>

                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <Layout>
                    <Footer className="text-white" style={{ textAlign: 'center', backgroundColor: '#001529' }}>Munch Eats ©2021</Footer>
                </Layout>
            </div>
        </div>
    );
}

export default CartView;
