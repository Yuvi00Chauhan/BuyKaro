

import React from "react";

function Product({ title, imageurl, price, rating, addToCart }) {
    return (
        
        <div className="product-card">
        <img src={imageurl} alt="Product" />
        <div className="product-details">
            <h4>{title}</h4>
            <h4>Price: ${price}</h4>
            <h4>Rating: {rating}</h4>
            <button onClick={() => addToCart({ title, price, imageurl })}>
                Add to Cart
            </button>
        </div>
    </div>
    );
}

export default Product;