import React from "react";
import "./Checkout.css";

function Checkout() {
  return (
    <div>
      <h1>Checkout</h1>
      <p>Thank you for shopping with us!</p>
      <div className="checkout">
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" name="fname" placeholder="Enter your name" />
          <br />

          <label htmlFor="phone">Phone no:</label>
          <input
            type="text"
            name="phone"
            placeholder="Enter your phone number"
          />
          <br />

          <label htmlFor="address">Address:</label>
          <input type="text" name="address" placeholder="Enter your address" />
          <br />

          <label htmlFor="city">City:</label>
          <input type="text" name="city" placeholder="Enter your city" />
          <br />

          <label htmlFor="state">State:</label>
          <input type="text" name="state" placeholder="Enter your state" />
          <br />

          <label htmlFor="landmark">Landmark:</label>
          <input type="text" name="landmark" placeholder="Landmark" />
          <br />

          <button
            type="button"
            onClick={() => alert("Order placed successfully")}
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default Checkout;
