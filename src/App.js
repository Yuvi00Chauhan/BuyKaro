import "./App.css";
import Navbar from "./components/navbar";
import ProductListing from "./components/ProductListing";
import Cart from "./components/ProductCart";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./components/CartContext";
import Checkout from "./components/Checkout";
function App() {
  return (
    console.log("getting products"),  
    <div className="App">
<CartProvider>
       <BrowserRouter>
      <Navbar />
      <RegisterationPage/>
// <Routes>
//   <Route path="/" element={<ProductListing />} />
//   <Route path="/cart" element={<Cart />} />
//   <Route path="/checkout" element={<Checkout />} />
// </Routes>
      
 </BrowserRouter>
     </CartProvider>
    </div>
    
  );
  
}
import RegisterationPage from "./components/RegisterationPage";

export default App;
