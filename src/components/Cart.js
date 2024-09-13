import React, { useContext } from "react";
import { CartCont } from "./CartContext";

function Cart() {
  const { cartItems } = useContext(CartCont);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.title} - {item.price} $
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
