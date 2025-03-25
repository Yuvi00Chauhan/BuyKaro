import React from "react";

function Product({ id, title, imageurl, price, rating, addToCart }) {
    const handleAddToCart = () => {
        console.log("Product added to cart:", id); 
        if (addToCart) {
            addToCart(id);
            alert("Product added to cart");
        }
    };

    return (
        <div className="product-card">
            <img src={imageurl} alt="Product" />
            <div className="product-details" key={Product?.id}>
                <h4>{title}</h4>
                <h4>Price: ${price}</h4>
                <h4>Rating: {rating}</h4>
                <button onClick={handleAddToCart}> 
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default Product;