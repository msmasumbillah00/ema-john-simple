import React from 'react';
import "./Cart.css";

const Cart = ( props ) => {
    const cart = props.cart;

    let [ total, totalShiping ] = [ 0, 0 ];
    for ( const product of cart ) {
        total = total + product.price;
        totalShiping = totalShiping + product.shipping;
    }
    const tax = ( total * 7 ) / 100;
    console.log( cart, )
    return (
        <div className='cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: { cart.length }</p>
            <p>Total Price: ${ total } </p>
            <p>Total Shipping Charge: ${ totalShiping }</p>
            <p>Tax: ${ tax.toFixed( 2 ) }</p>
            <h5>Grand Total: { ( total + totalShiping + tax ).toFixed( 2 ) }</h5>
        </div>
    );
};

export default Cart;