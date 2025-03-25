import React from "react";
import "./Checkout.css";

function Checkout() {
  return (
  
      <div className="checkout-box">
        <h1>Checkout</h1>
        <p>Thank you for shopping with us!</p>
        <form>
          <label>Name:</label>
          <input type="text" placeholder="Enter your name" />
          
          <label>Phone no:</label>
          <input type="text" placeholder="Enter your phone number" />
          
          <label>Address:</label>
          <input type="text" placeholder="Enter your address" />
          
          <label>City:</label>
          <input type="text" placeholder="Enter your city" />
          
          <label>State:</label>
          <input type="text" placeholder="Enter your state" />
          
          <label>Landmark:</label>
          <input type="text" placeholder="Landmark" />
          
          <label></label>
          <div className="payment-options">
          Payment type:
            <input type="radio" name="payment" /> Wallet
            <input type="radio" name="payment" /> UPI
            <input type="radio" name="payment" /> Netbanking
            <input type="radio" name="payment" /> Cash
          </div>
          <div>
          <button type="button" className="order-btn" onClick={() => alert("Order placed successfully")}>Place Order</button>
          </div>
        </form>
      </div>
  );
}

export default Checkout;
