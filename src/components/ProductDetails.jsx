import { useParams } from "react-router-dom";
import { useProductContext } from "./ProductContext";
import { useEffect, useState } from "react";
import "./ProductDetails.css";
function ProductDetails() {
  const { id } = useParams();
  const { products, fetchProducts } = useProductContext(); 
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const getStarRating = (rating) => {
    if (!rating) return "No rating"; 
    return "⭐".repeat(Math.round(rating));
  };
  
  useEffect(() => {
    if (products.length > 0) {
      const foundProduct = products.find((p) => p.id === parseInt(id));
      setProduct(foundProduct);
      setLoading(false);
    } else {
      fetchProducts(); 
    }
  }, [id, products, fetchProducts]);

  if (loading) {
    return <div>Loading product details...</div>;
  }

  if (!product) {
    return <div>Product not found!</div>;
  }

  return (
    <div className="product-details">
      <h2 className="title">{product.title}</h2>
      <img className="pro-img"src={product.image} alt={product.title} />
      <p className="desc">{product.description}</p>
     
      <p >Price: ₹{product.price*85.63}</p>
      <p>Rating: {getStarRating(product.rating?.rate)}</p>
      <button>Add to Cart</button>
      <button>Buy Now</button>
    </div>
  );
}

export default ProductDetails;
