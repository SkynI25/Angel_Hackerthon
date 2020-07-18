import React from 'react';
import './CartButton.scss';
import { FaShoppingCart } from 'react-icons/fa';

const CartButton = ({ cart, handleCartBtnClick }) => {
  return (
    <button className="cart-btn btn" onClick={handleCartBtnClick}>
      <FaShoppingCart />
      {cart.length > 0 ? (
        <span className="count-badge">
          {cart.reduce((acc, cur) => acc + cur.count, 0)}
        </span>
      ) : null}
    </button>
  );
};

export default CartButton;
