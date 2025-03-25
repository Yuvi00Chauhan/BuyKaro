import React from "react";
import { NavLink } from "react-router-dom";
import "./Checkout.css";

function Checkout() {
  const handleSubmit = () => {
    alert("Order placed successfully");
  };

  return (
    <div>
      <h1>Checkout</h1>
      <p>Thank you for shopping with us!</p>
      <div className="checkout">
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="details">Name:   </label>
            <input
              type="text"
              id="name"
              name="fname"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="details">Phone no:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div>
            <label htmlFor="address" className="details">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              placeholder="Enter your address"
              required
            />
          </div>

          <div>
            <label htmlFor="city" className="details">City:</label>
            <input
              type="text"
              id="city"
              name="city"
              placeholder="Enter your city"
              required
            />
          </div>

          <div>
            <label htmlFor="state" className="details">State:</label>
            <input
              type="text"
              id="state"
              name="state"
              placeholder="Enter your state"
              required
            />
          </div>

          <div>
            <label htmlFor="landmark" className="details">Landmark:</label>
            <input
              type="text"
              id="landmark"
              name="landmark"
              placeholder="Landmark"
              optional
            />
          </div>

          <div>
            <b>Payment type:</b>
            
            <input
              type="radio"
              id="upi"
              className="pay"
              name="payment"
              defaultValue="UPI"
            />
            <label htmlFor="upi" className="pay">
              UPI
            </label>
            <input
              type="radio"
              id="net"
              className="pay"
              name="payment"
              defaultValue="Netbanking"
            />
            <label htmlFor="net" className="pay">
              Netbanking
            </label>
            <input
              type="radio"
              className="pay"
              id="wallet"
              name="payment"
              defaultValue="Wallet"
            />
            <label htmlFor="wallet" className="pay">
              Wallet
            </label>
            <input
              type="radio"
              className="pay"
              id="cash"
              name="payment"
              defaultValue="Cash"
            />
            <label htmlFor="cash" className="pay">
              Cash
            </label>
            <br />
          </div>
          
          <div className="btn">
          <input type="submit" className="order-btn" id="" value="Place Order" />
          </div>

        </form>
        
      </div>
     
    </div>
  );
}

export default Checkout;
