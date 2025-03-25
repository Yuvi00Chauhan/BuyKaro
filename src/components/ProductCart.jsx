import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import { NavLink } from "react-router-dom";
import "./ProductCart.css";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  console.log("Cart contents:", cart);

  const handleRemove = (id) => {
    console.log(`Removing item with id: ${id}`);
    removeFromCart(id);
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

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
                <img src={item.image} alt={item.title} className="item-image" />
                <div className="cart-item-details">
                  <h4>{item.title}</h4>
                  <h4>Price: ${item.price.toFixed(2)}</h4>
                </div>

                {/* NavLink as Remove Button */}
                <NavLink 
                  className="remove-btn fa fa-trash-o" 
                  onClick={() => handleRemove(item.id)}
                >
                </NavLink>
              </div>
            ))}
          </div>
          <div className="cart-footer">
            <div className="cart-total">
              <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
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
