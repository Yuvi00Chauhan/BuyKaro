import { useEffect, useState, useContext } from "react";
import Product from "./Products";
import { CartContext } from "./CartContext";
import "./ProductListing.css";

function ProductListing() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    async function getProducts() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    }
    getProducts();
  }, []);

  const handleAddToCart = (id) => {
    const productToAdd = products.find((product) => product.id === id);
    if (productToAdd) {
      addToCart(productToAdd);
      console.log("Product added to cart:", productToAdd);
      
    }
  };

  return (
    <div className="container">
      <h1 id="heading">Products details</h1>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-xl-3">
            <Product
              id={product.id}
              title={product.title}
              price={product.price}
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