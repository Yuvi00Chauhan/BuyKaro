import React from "react";
import "./Footer.css";
import { useNavigate } from "react-router-dom";
function Footer() {
  const navigate = useNavigate();
  const goToAbout = () => {
    navigate("/about"); // Navigates to the About page
  };
  const goToHome = () => {
    navigate("/productListing"); // Navigates to the About page
  };
  return (
    <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 border-top">
      <div className="company">
        <p className="col-md-4 mb-0 text-white">© 2025 BuyKaro.com, Inc</p>
      </div>

      <ul className="nav col-md-4 justify-content-end">
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-white" onClick={goToHome}>
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-white">
            Features
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-white">
            Pricing
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link px-2 text-white">
            FAQs
          </a>
        </li>
        <li className="nav-item">
          <a href="#about" className="nav-link px-2 text-white" onClick={goToAbout}>
            About
          </a>
        </li>
      </ul>
    </footer>
  );
}
export default Footer;
