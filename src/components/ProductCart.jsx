import React, { useContext, useEffect } from "react";
import { CartContext } from "./CartContext";
import { NavLink } from "react-router-dom";
import "./ProductCart.css";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  useEffect(() => {
    let myCart = JSON.parse(localStorage.getItem("cartDetails")) || [];

    cart.forEach((item) => {
      const existingItem = myCart.find((cartItem) => cartItem.id === item.id);
      if (!existingItem) {
        myCart.push({
          id: item.id,
          image: item.imageurl,
          title: item.title,
          price: item.price,
          quantity: item.quantity,
        });
      }
    });

    localStorage.setItem("cartDetails", JSON.stringify(myCart));
  }, [cart]);

  return (
    <div className="cart-container">
      <h1>Shopping Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cart.map((item) => (
              <div key={item.id} className="cart-item">
                <img
                  src={item.imageurl}
                  alt={item.title}
                  className="item-image"
                />
                <div className="cart-item-details">
                  <h4>{item.title}</h4>
                  <h4>Price: ₹{item.price.toFixed(2)}</h4>
                  <h4>Quantity: {item.quantity}</h4>
                </div >
                <button className="remove-btn fa fa-trash-o" onClick={() => removeFromCart(item.id)}>
                  
                </button>
              </div>
            ))}
          </div>

          <div className="cart-footer">
            <div className="cart-total">
              <h3>Total Price: ₹{totalPrice.toFixed(2)}</h3>
            </div>
            <NavLink to="/checkout" className="checkout-btn">
              Checkout
            </NavLink>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;