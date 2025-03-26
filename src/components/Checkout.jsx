import React from "react";
import "./Checkout.css";
import { NavLink } from "react-router-dom";
function Checkout() {
  return (
    <div className="checkout-box">
      <h1>Checkout</h1>
      <p>Thank you for shopping with us!</p>
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" placeholder="Enter your name" />
        </div>

        <div className="form-group">
          <label>Phone no:</label>
          <input type="text" placeholder="Enter your phone number" />
        </div>

        <div className="form-group">
          <label>Address:</label>
          <input type="text" placeholder="Enter your address" />
        </div>

        <div className="form-group">
          <label>City:</label>
          <input type="text" placeholder="Enter your city" />
        </div>

        <div className="form-group">
          <label>State:</label>
          <input type="text" placeholder="Enter your state" />
        </div>

        <div className="form-group">
          <label>Landmark:</label>
          <input type="text" placeholder="Landmark" />
        </div>

        <div className="payment-group">
          <label>Payment type:</label>
          <div className="payment-options">
          <input type="radio" name="payment"className="plabel" />
            <label> Wallet</label>
            <input type="radio" name="payment" className="plabel" />
            <label> UPI</label>
            <input type="radio" name="payment" className="plabel"/>
            <label> Netbanking</label>
            <input type="radio" name="payment" className="plabel"/>
            <label> Cash</label>
          </div>
        </div>
        <div className="order-btn-container">
        <input type="submit" className="order-btn" id="" value="Sign Up" />
        {/* <button type="button" className="order-btn" onClick={() => alert("Order placed successfully")}>
          Place Order
        </button> */}
        </div>
      </form>
    </div>
  );
}

export default Checkout;
