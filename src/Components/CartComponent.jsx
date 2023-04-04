import React from 'react';

const CartComponent = ({ cartProducts }) => {
  if (!cartProducts.length) {
    return <h2 data-testid="empty-text">The cart is empty!</h2>;
  }

  return (
    <div data-testid="cart-container">
      <table>
        <thead>
          <tr>
            <th>Sno</th>
            <th>Name</th>
            <th>Price</th>
            <th>Units</th>
          </tr>
        </thead>
        <tbody data-testid="cart-body">
          {cartProducts.map((elem, idx) => {
            return (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{elem.name}</td>
                <td>{elem.price}</td>
                <td>{elem.qty}</td>
              </tr>
            );
          })}
          <tr>
            <td>{}</td>
            <td>{}</td>
            <td>Total</td>
            <td data-testid="total-price">
              {cartProducts.reduce((acc, cur) => acc + +cur.price * cur.qty, 0).toFixed(2)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
export default CartComponent;
