import React from "react";
import "./NavRibbon.css";
function NavRibbon() {
  return (
    <nav className="navbar navbar-expand-lg ribbon" >
      <div className="container-fluid">
        
        
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle drops"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
               Electronics
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Mobiles</a></li>
                <li><a className="dropdown-item" href="#">Headphones</a></li>
                <li><a className="dropdown-item" href="#">TWS</a></li>
              </ul>
            </li>
            
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle drops"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                TV & Appliances
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">TV</a></li>
                <li><a className="dropdown-item" href="#">Washing Machine</a></li>
                <li><a className="dropdown-item" href="#">Refridgerator</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle drops"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Home & Decor
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Paintings</a></li>
                <li><a className="dropdown-item" href="#">Chalandier</a></li>
                <li><a className="dropdown-item" href="#">Lights</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle drops"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Books
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Novels</a></li>
                <li><a className="dropdown-item" href="#">Educational Books</a></li>
                <li><a className="dropdown-item" href="#">Religious Books</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle drops"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sports
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Cricket</a></li>
                <li><a className="dropdown-item" href="#">Volleyball</a></li>
                <li><a className="dropdown-item" href="#">Football</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle drops"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Furniture
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Chairs</a></li>
                <li><a className="dropdown-item" href="#">Tables</a></li>
                <li><a className="dropdown-item" href="#">Beds</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle drops"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
               Clothing
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Men</a></li>
                <li><a className="dropdown-item" href="#">Women</a></li>
                <li><a className="dropdown-item" href="#">Kids</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavRibbon;
