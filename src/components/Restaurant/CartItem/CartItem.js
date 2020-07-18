import React from 'react';
import { MdClose } from 'react-icons/md';
import NumericInput from 'react-numeric-input';
import './CartItem.scss';

const CartItem = ({ item, deleteItem, changeCount }) => {
  return (
    <div className="modal-list">
      <div className="img">
        <img src={item.img} alt={item.name} />
      </div>
      <div className="info">
        <div className="info-row">
          <span className="name">{item.name}</span>
          <span className="delete" onClick={() => deleteItem(item.id)}>
            <MdClose />
          </span>
        </div>
        <div className="info-row">
          <NumericInput
            min={1}
            max={100}
            value={item.count}
            mobile={true}
            onChange={(value) => changeCount(item.id, value)}
          />
          <span>
            {new Intl.NumberFormat('ko-KR').format(item.price * item.count)}원
          </span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
