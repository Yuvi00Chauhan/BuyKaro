import React from "react";
import "./Footer.css";
function Footer() {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
<div className="company">
<p className="col-md-4 mb-0 text-white">© 2025 BuyKaro.com, Inc</p>
</div>

<ul className="nav col-md-4 justify-content-end">
  <li className="nav-item">
    <a href="#" className="nav-link px-2 text-white">Home</a>
  </li>
  <li className="nav-item">
    <a href="#" className="nav-link px-2 text-white">Features</a>
  </li>
  <li className="nav-item">
    <a href="#" className="nav-link px-2 text-white">Pricing</a>
  </li>
  <li className="nav-item">
    <a href="#" className="nav-link px-2 text-white">FAQs</a>
  </li>
  <li className="nav-item">
    <a href="#" className="nav-link px-2 text-white">About</a>
  </li>
</ul>

</footer>

    );
}
export default Footer;