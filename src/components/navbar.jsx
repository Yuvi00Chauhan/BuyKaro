import React from "react";
class Navbar extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <div className="container-fluid">
            <a id="navLogo" className="navbar-brand" href="#">
              BuyKaro.com
            </a>

          
              <a href=""className="cart-icon ms-auto">🛒 Cart</a>
            </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
