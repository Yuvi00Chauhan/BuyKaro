import { useEffect } from "react";
import { useState } from "react";
import Product from "./Products";
import "./ProductListing.css";

function ProductListing() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getProducts() {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProducts(data);
    }

    getProducts();
  }, []);
  return (
    <div className="container">
      <h1 id="heading">Products details</h1>
      <div className="row">
        {products &&
          products.map((product) => (
            <div key={product.id} className="col-xl-3">
              <Product
               
                title={product.title}
                price={product.price}
                rating={product.rating?.rate}
                imageurl={product.image}
              />
            </div>
          ))}
      </div>
    </div>
  );
}

export default ProductListing;
