import { useEffect, useState, useContext } from "react";
import Product from "./Products";
import { CartContext } from "./CartContext";
import "./ProductListing.css";

function ProductListing() {
  const [products, setProducts] = useState([]);
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
  }, []);

  
  const handleAddToCart = (id) => {
    const productToAdd = products.find((product) => product.id === id);
    if (productToAdd) {
      addToCart(productToAdd);
      console.log("Product added to cart:", productToAdd);
    }
  };


  const truncateTitle = (title, maxLength=20) => {
    return title.length > maxLength ? title.substring(0, maxLength)  : title;
  };

  return (
    <div className="container">
      <h1 id="heading">Product Details</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-xl-3">
            <Product
              id={product.id}
              title={truncateTitle(product.title, 20)}
              rating={product.rating?.rate}
              imageurl={product.image}
              addToCart={handleAddToCart}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListing;
