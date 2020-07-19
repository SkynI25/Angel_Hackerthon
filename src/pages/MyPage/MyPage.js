import React, { useState, useEffect } from 'react';
import './MyPage.scss';
import { getOrderList } from '../../lib/api';
import OrderItem from './OrderItem';

const MyPage = () => {
  const [orderList, setOrderList] = useState([]);

  useEffect(() => {
    (function () {
      const { token } = JSON.parse(localStorage.getItem('token'));
      getOrderList(token)
        .then((res) => setOrderList(res.orderList))
        .catch((err) => console.log(err));
    })();
  }, []);
  return (
    <div className="mypage-container">
      <header>
        <h1>마이 페이지</h1>
        <h3>최근 주문 목록</h3>
      </header>
      <section>
        <article className="history">
          {orderList.map((order, idx) => (
            <OrderItem key={order.orderlistKey} order={order} />
          ))}
        </article>
      </section>
    </div>
  );
};

export default MyPage;
