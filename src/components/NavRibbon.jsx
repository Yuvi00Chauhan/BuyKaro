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
                 
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
               Electronics
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item"  >Mobiles</a></li>
                <li><a className="dropdown-item"  >Headphones</a></li>
                <li><a className="dropdown-item"  >TWS</a></li>
              </ul>
            </li>
            
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle drops"
                 
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                TV & Appliances
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item"  >TV</a></li>
                <li><a className="dropdown-item"  >Washing Machine</a></li>
                <li><a className="dropdown-item"  >Refridgerator</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle drops"
                 
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Home & Decor
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item"  >Paintings</a></li>
                <li><a className="dropdown-item"  >Chalandier</a></li>
                <li><a className="dropdown-item"  >Lights</a></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle drops"
                 
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Books
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" >Novels</a></li>
                <li><a className="dropdown-item" >Educational Books</a></li>
                <li><a className="dropdown-item" >Religious Books</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle drops"
                 
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sports
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" >Cricket</a></li>
                <li><a className="dropdown-item" >Volleyball</a></li>
                <li><a className="dropdown-item" >Football</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle drops"
                 
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Furniture
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item"  >Chairs</a></li>
                <li><a className="dropdown-item"  >Tables</a></li>
                <li><a className="dropdown-item"  >Beds</a></li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle drops"
                 
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
               Clothing
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item"  >Men</a></li>
                <li><a className="dropdown-item"  >Women</a></li>
                <li><a className="dropdown-item"  >Kids</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavRibbon;
