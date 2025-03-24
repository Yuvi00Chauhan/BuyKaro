import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "./CartContext"; 
import "./navbar.css";
function Navbar() {
  const { cart } = useContext(CartContext); 
  const cartCount = cart.length; 

  return (
    <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
      <div className="container-fluid">
        <NavLink id="navLogo" className="navbar-brand" to={"/"}>
          BuyKaro.com
        </NavLink>

       
        <NavLink to={"/Cart"} className="cart-icon ms-auto ">
          🛒 Cart {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
