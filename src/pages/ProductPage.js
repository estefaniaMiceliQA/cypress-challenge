import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [message, setMessage] = useState('');

  const handleAddToCart = () => {
    setMessage(`Product ${id} added to cart!`);
    setTimeout(() => navigate('/cart'), 1000);
  };

  return (
    <div>
      <h1>Product {id}</h1>
      <p>Details about Product {id}</p>
      <button onClick={handleAddToCart}>Add to Cart</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default ProductPage;