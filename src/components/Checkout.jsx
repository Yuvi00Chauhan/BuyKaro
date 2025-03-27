import React from "react";
import "./Checkout.css";
import { NavLink } from "react-router-dom";
function Checkout() {
  const handlecheckout = () => {
   
    console.log("Order Placed");
  }
  return (
    <div className="checkout-box">
      <h1>Checkout</h1>
      <p>Thank you for shopping with us!</p>
      <form onSubmit={handlecheckout}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" placeholder="Enter your name" required/>
        </div>

        <div className="form-group">
          <label>Phone no:</label>
          <input type="text" placeholder="Enter your phone number" required />
        </div>

        <div className="form-group">
          <label>Address:</label>
          <input type="text" placeholder="Enter your address" required/>
        </div>

        <div className="form-group">
          <label>City:</label>
          <input type="text" placeholder="Enter your city" required/>
        </div>

        <div className="form-group">
          <label>State:</label>
          <input type="text" placeholder="Enter your state" required/>
        </div>

        <div className="form-group">
          <label>Landmark:</label>
          <input type="text" placeholder="Landmark" />
        </div>


        <div className="order-btn-container">
        <input type="submit" className="order-btn" id="" value="Place Order" />
       
        </div>
      </form>
    </div>
  );
}

export default Checkout;
