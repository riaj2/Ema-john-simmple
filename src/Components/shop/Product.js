import React from 'react';
import './product.css'

const Product = (props) => {
    const { category, id, img, name, price, ratings } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div>
                <h5 className='product-name'>{name}</h5>
                <p>Price: {price}</p>
                <p>Rattings {ratings} Star</p>
            </div>


            <button onClick={() => props.handlebutton(props.product)} className='btn-card'>
                <p>Add to card</p>
            </button>
        </div>
    );
};

export default Product;