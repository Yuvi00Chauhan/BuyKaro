import "./App.css";
import Navbar from "./components/navbar";
import ProductListing from "./components/ProductListing";
import Cart from "./components/ProductCart";
import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { CartProvider } from "./components/CartContext";
import Checkout from "./components/Checkout";
import RegisterationPage from "./components/RegisterationPage";
import LoginPage from "./components/LoginPage";
import Footer from "./components/Footer";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <MainContent />
      </BrowserRouter>
    </CartProvider>
  );
}

function MainContent() {
  const location = useLocation();

  return (
    <div className="App">
      <div className="app-container">
       
        <Navbar />

        <Routes>
          <Route path="/" element={<Navigate to="/register" />} />
          <Route path="/register" element={<RegisterationPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/ProductListing" element={<ProductListing />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>

       
        <Footer />
      </div>
    </div>
  );
}


export default App;
