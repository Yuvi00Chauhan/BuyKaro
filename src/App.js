import "./App.css";
import Navbar from "./components/navbar";
import ProductListing from "./components/ProductListing";
import Cart from "./components/ProductCart";
import { useState } from "react";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { CartProvider } from "./components/CartContext";
import Checkout from "./components/Checkout";
import RegisterationPage from "./components/RegisterationPage";
import LoginPage from "./components/LoginPage";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import Account from "./components/Account";
import ProductDetails from "./components/ProductDetails";
import { ProductProvider } from "./components/ProductContext";
import NavRibbon from "./components/NavRibbon"; 
import FeaturePage from "./components/FeaturePage";
import FAQsPage from "./components/FAQsPage";
function App() {
  const [searchTerm, setSearchTerm] = useState(""); 

  return (
    <CartProvider>
      <ProductProvider> 
        <BrowserRouter>
          <MainContent searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </BrowserRouter>
      </ProductProvider>
    </CartProvider>
  );
}

function MainContent({ searchTerm, setSearchTerm }) {  
  return (
    <div className="App">
      <div className="app-container">
        <Navbar setSearchTerm={setSearchTerm} />
        <NavRibbon/>
        <Routes>
          <Route  path="/" element={<Navigate to="/register" />} />
          <Route path="/register" element={<RegisterationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/ProductListing" element={<ProductListing searchTerm={searchTerm} />} /> 
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/account" element={<Account />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<FeaturePage />} />
          <Route path="/faqs" element={<FAQsPage />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
