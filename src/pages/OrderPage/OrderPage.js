import React, { useContext, useState } from 'react';
import { CartContext } from '../../CartContext/CartContext';
import { orderItems } from '../../lib/api';
import './OrderPage.scss';

const OrderPage = ({ props: { history }, userInfo }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { cart, setCart } = useContext(CartContext);
  const user = userInfo ? JSON.parse(userInfo) : null;
  const token =
    localStorage.getItem('token') &&
    JSON.parse(localStorage.getItem('token')).token;

  if (!user || !user.userId || !token || cart.length < 1) {
    history.push('/');
  }

  const priceSum = cart.reduce((acc, cur) => acc + cur.price * cur.count, 0);

  const handleOrder = async () => {
    const itemList = cart.reduce((acc, cur) => {
      acc.push({ itemKey: cur.id, count: cur.count });
      return acc;
    }, []);
    setIsLoading(true);
    orderItems(token, itemList)
      .then((res) => {
        setCart([]);
        history.push('/');
      })
      .catch((err) => console.error(err))
      .finally(() => setIsLoading(false));
  };

  return (
    <section className="order-container">
      <div className="delivery-container">
        <h3 className="title">배달정보</h3>
        <div>{user.address}</div>
        <div>{user.phone}</div>
      </div>
      <div className="item-container">
        <h3 className="title">상품정보</h3>
        {cart.map((item) => (
          <div key={item.id} className="item">
            <span className="name">
              {item.name}, {item.count}개
            </span>
            <span className="price">
              {new Intl.NumberFormat('ko-KR').format(item.price * item.count)}원
            </span>
          </div>
        ))}
      </div>
      <div className="info-container">
        <h3 className="title">최종 결제금액</h3>
        <div className="item">
          <span className="name">총 상품금액</span>
          <span className="price">
            {new Intl.NumberFormat('ko-KR').format(priceSum)}원
          </span>
        </div>
        <div className="item">
          <span className="name">총 배송비</span>
          <span className="price">3,500원</span>
        </div>
        <div className="item">
          <span className="name">총 결제예상금액</span>
          <span className="price">
            {new Intl.NumberFormat('ko-KR').format(priceSum + 3500)}원
          </span>
        </div>
      </div>
      <button
        className="btn order-btn"
        onClick={handleOrder}
        disabled={isLoading}
      >
        {isLoading
          ? '결제중'
          : `${new Intl.NumberFormat('ko-KR').format(
              priceSum + 3500,
            )}원 결제하기`}
      </button>
    </section>
  );
};

export default OrderPage;
