import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "./CartContext"; 
import "./navbar.css";

function Navbar({ setSearchTerm }) {  
  const { cart } = useContext(CartContext);
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value); 
  };

  return (
    <nav className="navbar">
      <div className="container-fluid">
        <NavLink id="navLogo" className="navbar-brand" to={"/ProductListing"}>
          BuyKaro.com
        </NavLink>

        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li className="navlink"><NavLink to="/ProductListing">Home</NavLink></li>
          <li className="navlink about"><NavLink to="/about">About Us</NavLink></li>
          <li className="navlink"><NavLink to="/contact">Contact Us</NavLink></li>
          <li className="navlink" id="user"><NavLink to="/account">Account</NavLink></li>
          <li className="navlink"><NavLink to="/login">Logout</NavLink></li>
          
          <li className="cart-mobile">
            <NavLink to={"/Cart"} className="cart-icon">
              🛒 Cart
              {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
            </NavLink>
          </li>
        </ul>
        
        
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search products..." 
            onChange={handleSearch} 
          />
        </div>

        <div className="cart-desktop">
          <NavLink to={"/Cart"} className="cart-icon">
            🛒 Cart
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
