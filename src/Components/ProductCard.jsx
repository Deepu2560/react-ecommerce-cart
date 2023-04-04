import React from 'react';
import style from './ProductCard.module.css';

const ProductCard = ({ data, addCart }) => {
  return (
    <div data-testid="product-card" className={style.ProductCardContainer}>
      <h3 data-testid="name">Name: {data.name}</h3>
      <h5 data-testid="price">Price: {data.price}</h5>
      <p data-testid="quantity">Quantity: {data.stock} Units</p>
      <button
        data-testid="add-btn"
        onClick={() => {
          return addCart(data);
        }}
        disabled={data.stock ? false : true}
        className={data.stock ? style.ProductInStock : style.ProductOutStock}
      >
        {data.stock ? 'Add to cart' : 'Out of stock'}
      </button>
    </div>
  );
};

export default ProductCard;
