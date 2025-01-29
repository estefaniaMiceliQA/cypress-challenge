import React, { useState } from 'react';

const CheckoutPage = () => {
  const [message, setMessage] = useState('');

  const handleCheckout = () => {
    setMessage('Thank you for your purchase!');
  };

  return (
    <div>
      <h1>Checkout</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCheckout();
        }}
      >
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <button type="submit">Complete Purchase</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default CheckoutPage;