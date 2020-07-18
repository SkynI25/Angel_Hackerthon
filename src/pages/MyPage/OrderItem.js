import React from 'react';

const OrderItem = ({ order }) => {
  const { orderDate, name, img, title, price } = order;
  return (
    <div className="item">
      <img src={img} />
      <div className="column">
        <span className="date">{orderDate}</span>
        {/* <span className="storeName">{title}</span> */}
        <span className="menu">{name}</span>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default OrderItem;
