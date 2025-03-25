import "./App.css";
import Navbar from "./components/navbar";
import ProductListing from "./components/ProductListing";
import Cart from "./components/ProductCart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./components/CartContext";
import Checkout from "./components/Checkout";
import RegisterationPage from "./components/RegisterationPage";
function App() {
  return (
    console.log("getting products"),  
    <div className="App">
<CartProvider>
       <BrowserRouter>
      <Navbar />
      <RegisterationPage/>
      <Routes>
        {/* <Route path="/" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
         */}
      </Routes>
      </BrowserRouter>
     </CartProvider>
    </div>
    
  );
  
}

export default App;
