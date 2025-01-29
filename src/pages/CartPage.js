import React from 'react';
import { Link } from 'react-router-dom';

const CartPage = () => {
  return (
    <div>
      <h1>Your Cart</h1>
      <p>Items you have added:</p>
      <ul>
        <li>Product 1 - Quantity: 1</li>
      </ul>
      <Link to="/checkout">Proceed to Checkout</Link>
    </div>
  );
};

export default CartPage;
