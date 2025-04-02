import { useParams, useNavigate } from "react-router-dom";
import { useProductContext } from "./ProductContext";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "./CartContext";
import "./ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const { products, fetchProducts } = useProductContext();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const truncatePrice = (price) => {
    return parseFloat(price.toFixed(2)); 
  };

  useEffect(() => {
    if (products.length > 0) {
      const foundProduct = products.find((p) => p.id === parseInt(id));
      setProduct(foundProduct || null);
      setLoading(false);
    } else {
      fetchProducts();
    }
  }, [id, products, fetchProducts]);


  const handleAddToCart = () => {
    if (product) {
      console.log("Adding to cart from Product Details:", product); // Debug
      addToCart({
        id: product.id,
        title: product.title,
        price: product.price,
        imageurl: product.image, 
      });
    }
  };


  const handleBuyNow = () => {
    navigate("/checkout");
  };

 
  const getStarRating = (rating) => {
    return rating ? "⭐".repeat(Math.round(rating)) : "No rating";
  };

 
  if (loading) return <div>Loading product details...</div>;
  if (!product) return <div>Product not found!</div>;

  return (
    <div className="product-details-page">
      <img className="pro-img" src={product.image} alt={product.title} />
      <div className="details-section">
        <h2 className="title">{product.title}</h2>
        <p className="desc">{product.description}</p>
        <p className="price">Price: ₹{truncatePrice(product.price * 85.79)} </p>
        <p className="rating">Rating: {getStarRating(product.rating?.rate)}</p>
        <div className="details-buttons">
          <button className="details-cart-button" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button className="buyButton" onClick={handleBuyNow}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
