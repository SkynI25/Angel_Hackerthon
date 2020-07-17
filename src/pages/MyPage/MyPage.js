import React, { useState, useEffect } from 'react';
import './MyPage.scss';
import { getOrderList } from '../../lib/api';
import OrderItem from './OrderItem';

const MyPage = () => {
  const orders = [
    {
      id: 1,
      orderDate: '2020-07-17 23:59:59',
      img:
        'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/2JVJ/image/vEBttMW9x_W027VoICmrbHh3fY4.png',
      name: '짜장면',
      price: '5000',
    },
    {
      id: 2,
      orderDate: '2020-07-15 23:59:59',
      img:
        'https://recipe1.ezmember.co.kr/cache/recipe/2018/07/14/7ed726074031a11480d1ed901c5b92211.jpg',
      name: '콩국수',
      price: '5000',
    },
    {
      id: 3,
      orderDate: '2020-07-16 23:59:59',
      img:
        'https://th4.tmon.kr/thumbs/image/d26/07c/a58/c4aa0a377_700x700_95_FIT.jpg',
      name: '냉면',
      price: '5000',
    },
    {
      id: 4,
      orderDate: '2020-07-17 23:59:59',
      img:
        'https://th4.tmon.kr/thumbs/image/d26/07c/a58/c4aa0a377_700x700_95_FIT.jpg',
      name: '냉면',
      price: '5000',
    },
  ];
  const [orderList, setOrderList] = useState([]);

  /* useEffect(() => {
    (function () {
      getOrderList()
        .then((res) => {
          if (!res.success || !res.data) {
            throw new Error(res.errors);
          }
          console.log(res.data);
          setOrderList(res.data);
        })
        .catch((err) => console.log(err));
    })();
  }, []); */
  return (
    <div className="mypage-container">
      <header>
        <h1>마이 페이지</h1>
        <h3>최근 조회한 상점 리스트</h3>
      </header>
      <section>
        <span className="title">최근 주문 내역</span>
        <article className="history">
          {orders.map((order, idx) => (
            <OrderItem key={idx} order={order} />
          ))}
        </article>
      </section>
    </div>
  );
};

export default MyPage;
