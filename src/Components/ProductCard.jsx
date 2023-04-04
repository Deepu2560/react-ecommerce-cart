import React from 'react';

const ProductCard = ({ data, addCart }) => {
  return (
    <div data-testid="product-card">
      <h3 data-testid="name">Name: {data.name}</h3>
      <h5 data-testid="price">Price: {data.price}</h5>
      <p data-testid="quantity">Quantity: {data.stock} Units</p>
      <button
        data-testid="add-btn"
        onClick={() => {
          if (data.stock > 0) {
            return addCart(data);
          }
        }}
      >
        {data.stock ? 'Add to cart' : 'Out of stock'}
      </button>
    </div>
  );
};

export default ProductCard;
