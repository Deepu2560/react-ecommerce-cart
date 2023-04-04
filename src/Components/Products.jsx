import React, { useState } from 'react';
import ProductCard from './ProductCard';
import CartComponent from './CartComponent';
import style from './Products.module.css';

const Products = () => {
  const [products, setProducts] = useState(null);
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    let ispresent = cart.some((elem) => elem.id === item.id);
    if (!ispresent) {
      setCart((prev) => [...prev, { ...item, qty: 1 }]);
    } else {
      let cartFilter = cart.filter((elem) => {
        if (elem.id === item.id) {
          elem.qty++;
        }
        return elem;
      });
      setCart(() => cartFilter);
    }

    let prodFilter = products.filter((elem) => {
      if (elem.id === item.id) {
        elem.stock--;
      }
      return elem;
    });
    setProducts(() => prodFilter);
  }

  async function getProductsData() {
    let response = await fetch('http://localhost:8080/products');
    let data = await response.json();
    setProducts(() => data);
  }

  return (
    <div className={style.productsContainer}>
      {!products ? (
        <button data-testid="get-btn" onClick={() => getProductsData()}>
          Get Products
        </button>
      ) : (
        <div className="dashboard">
          <h1>Dashboard</h1>
          <div>
            <h1>Cart</h1>
            <CartComponent cartProducts={cart} />
          </div>
          <div data-testid="products-container" className={style.productMain}>
            {products.map((elem) => {
              return <ProductCard key={elem.id} data={elem} addCart={addToCart} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
