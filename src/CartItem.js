import React, { useContext } from 'react';
import { PlusCircleIcon, MinusCircleIcon, TrashIcon } from './icons'
import { CartContext } from './contexts/CartContext';
import { formatNumber } from './helpers/utils';

import "./styles/cart.css";

const CartItem = ({product}) => {
    const { increase, decrease, removeProduct } = useContext(CartContext);

    return ( 
        <div className="row py-2">
            <div className="col-sm-4 p-2 product-details">
                <h5 className="mb-1">{product.name}</h5>
                <p className="mb-1">Price: {formatNumber(product.price)} </p>
                
            </div>
            <div className="col-sm-2 p-2 text-center product-quantity">
                 <p className="mb-0">Quantity: {product.quantity}</p>
            </div>
            <div className="col-sm-5 p-2 product-buttons">
                 <button 
                    onClick={() => increase(product)}
                    className="btn btn-dark add-item">
                    <PlusCircleIcon width={"20px"} />
                 </button>

                {
                    product.quantity > 1 &&
                    <button
                        onClick={() => decrease(product)}
                        className="btn btn-danger">
                        <MinusCircleIcon width={"20px"} />
                    </button>
                }

                {
                    product.quantity === 1 &&
                    <button
                        onClick={() => removeProduct(product)}
                        className="btn btn-danger">
                        <TrashIcon width={"20px"} />
                    </button>
                 }
                 
            </div>
        </div>
    );
}
 
export default CartItem;