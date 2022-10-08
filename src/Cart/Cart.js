import React from 'react';

const Cart = (props) => {
    return (
        <div>
            <h1>This is cart container</h1>
            <p>Selected item: {props.cart.length}</p>
        </div>
    );
};

export default Cart;