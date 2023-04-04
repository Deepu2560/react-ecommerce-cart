import React from 'react';

const ProductCard = () => {
  return (
    <div data-testid="product-card">
      <h3 data-testid="name"></h3>
      <h5 data-testid="price"></h5>
      <p data-testid="quantity"></p>
      <button data-testid="add-btn"></button>
    </div>
  );
};

export default ProductCard;
