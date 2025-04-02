import { useEffect, useContext, useState } from "react";
import Product from "./Products";
import { CartContext } from "./CartContext";
import { useProductContext } from "./ProductContext";
import "./ProductListing.css";

function ProductListing({ searchTerm }) { 
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

  const truncateTitle = (title, maxLength = 10) => {
    return title.length > maxLength ? title.substring(0, maxLength) : title;
  };

  const truncatePrice = (price) => {
    return parseFloat(price.toFixed(2));
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes((searchTerm || "").toLowerCase())
  );
  

  if (!products.length) {
    return <div className="container">Loading products...</div>;
  }

  return (
    <div className="container">
      <h1 id="heading">Products</h1>
      <div className={`row ${filteredProducts.length === 1 ? "single-item" : ""}`}>
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <div key={product.id} className="col-xl-3 col-lg-4 col-md-6 col-sm-12">
              <Product
                id={product.id}
                title={truncateTitle(product.title, 10)}
                imageurl={product.image}
                price={truncatePrice(product.price * 85.79)}
                addToCart={handleAddToCart}
              />
            </div>
          ))
        ) : (
          <p>No products found!</p>
        )}
      </div>
    </div>
  );
}

export default ProductListing;
