import React, { useContext } from 'react';
import { CartContext } from '../../CartContext/CartContext';

const OrderPage = () => {
  const { cart, setCart } = useContext(CartContext);

  return <div>{JSON.stringify(cart)}</div>;
};

export default OrderPage;
