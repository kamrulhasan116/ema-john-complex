import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    // console.log(props);
    const { img, name, seller, price, stock } = props.product;
    // console.log(props.product);
    return (
        <div className="product">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h3 className="product-name">{name}</h3>
                <br />
                <p><small>By :{seller}</small></p>
                
                <p>${price}</p>
                
                <p><small>Only {stock} left in stock available - soon buy now</small></p>
               
                <button className= "main-button" onClick = {() =>props.handelAddProduct(props.product)}>
                    <FontAwesomeIcon icon={faShoppingCart} />Add to cart</button>
            </div>

        </div>
    );
};

export default Product;