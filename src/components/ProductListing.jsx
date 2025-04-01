import { useEffect, useContext } from "react";
import Product from "./Products";
import { CartContext } from "./CartContext";
import { useProductContext } from "./ProductContext";
import "./ProductListing.css";
import { useNavigate } from "react-router-dom";
function ProductListing() {
  const navigate = useNavigate();
  const { products, setProducts } = useProductContext(); 
  const { addToCart } = useContext(CartContext);


  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setProducts(data); 
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, [setProducts]);

 
  const handleAddToCart = (id) => {
    const productToAdd = products.find((product) => product.id === id);
    if (productToAdd) {
      addToCart(productToAdd); 
      console.log("Product added to cart:", productToAdd);
    }
  };

  
  const truncateTitle = (title, maxLength = 15) => {
    return title.length > maxLength ? title.substring(0, maxLength) + "..." : title;
  };

 
  const truncatePrice = (price) => {
    return parseFloat(price.toFixed(2)); 
  };

  
  if (!products.length) {
    return <div className="container">Loading products...</div>;
  }

  return (
    <div className="container">
      <h1 id="heading">Products</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
            <Product
              id={product.id}
              
              title={truncateTitle(product.title, 15)}
              // rating={product.rating?.rate} 
              imageurl={product.image}
             
              price={truncatePrice(product.price * 85.79)} 
              addToCart={handleAddToCart} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListing;
