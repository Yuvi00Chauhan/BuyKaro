import React, { useContext } from "react";
import { CartContext } from "./CartContext";

function Product({ id, title, imageurl, price, rating }) {
    const { addToCart, cart } = useContext(CartContext);
    const isInCart = cart.some((item) => item.id === id);

    
    const renderStars = (rating) => {
        const fullStars = Math.round(rating); 
        return "⭐".repeat(fullStars); 
    };

    return (
        <div className="product-card">
            <img src={imageurl} alt="Product" />
            <div className="product-details">
                <h4 className="product-title">{title}</h4>
                <h4>Price: ${price}</h4>
                <h4 className="rating">{renderStars(rating)}</h4> 
                <button onClick={() => addToCart({ id, title, imageurl, price, rating })} className="cart-button">
                    Add to Cart
                    {isInCart && <span className="checkmark-circle">✔</span>}
                </button>
            </div>
        </div>
    );
}

export default Product;
