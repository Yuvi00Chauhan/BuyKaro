import React from "react";

function Product({ id, title, imageurl, price, rating, addToCart }) {
    const renderStars = (rating) => {
        const fullStars = Math.floor(rating); 
        const stars = "⭐".repeat(fullStars); 
        return stars || "No rating";
    }
    const truncateTitle = (title, maxLength = 20) => {
        return title.length > maxLength ? title.substring(0, maxLength) + "..." : title;
    };
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
            <h4>{truncateTitle(title)}</h4>
                <p>Rating: {renderStars(rating)}</p>
                <h4>Price: ${price}</h4>
                <button onClick={handleAddToCart}> 
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default Product;