import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "./CartContext"; 
import "./navbar.css";

function Navbar() {
  const { cart } = useContext(CartContext); 
  
  // Calculate total quantity of items in the cart
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      < div className="container-fluid">
        <NavLink id="navLogo" className="navbar-brand" to={"/ProductListing"}>
          BuyKaro.com
        </NavLink>
        
        <a className="nav-link">Home</a>
        <a className="nav-link">Help center</a>
        <a className="nav-link">Contact us</a>
        <a className="nav-link">About us</a>
        <a className="nav-link"> Account</a>
        {/* Cart Icon with Dynamic Badge */}
        <NavLink to={"/Cart"} className="cart-icon ms-auto">
          🛒 Cart
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </NavLink>
      </div>
    </nav>
  ); 
}

export default Navbar;
