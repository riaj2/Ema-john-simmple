import React, { useEffect, useState } from 'react';
import Cart from '../../Cart/Cart';
import Product from './Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch(' https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handlebtn = (product) => {
        console.log(product)
        const newCart = [...cart, product];
        setCart(newCart)
    }
    return (

        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product =>
                        <Product
                            product={product}
                            handlebutton={handlebtn}
                        >

                        </Product>
                    )
                }
            </div>


            <div className="cart-container">
                <Cart cart={cart}></Cart>
                <p>added </p>
            </div>
        </div>
    );
};

export default Shop;