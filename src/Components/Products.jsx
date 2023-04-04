import React, { useState } from 'react';

const Products = () => {
  return (
    <div>
      <button data-testid="get-btn"></button>
      <div className="dashboard">
        <h1>Dashboard</h1>
        <div>
          <h1>Cart</h1>
          {/* import cart component here */}
        </div>
        <div data-testid="products-container">{/* map thorugh products */}</div>
      </div>
    </div>
  );
};

export default Products;
