import "./App.css";
import Navbar from "./components/navbar";
import ProductListing from "./components/ProductListing";

function App() {
  return (
    console.log("getting products"),  
    <div className="App">
      <Navbar />
      <ProductListing />
    </div>
    
  );
  
}

export default App;
