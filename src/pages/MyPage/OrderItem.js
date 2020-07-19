import React from 'react';

/*
arrivalDate: "2020-07-20T00:18:30.000Z"
companyImg: "https://t1.daumcdn.net/cfile/blog/217A774D5388B7381C"
companyKey: 51
companyName: "뉴숯불"
itemList: (2) [{…}, {…}]
orderDate: "2020-07-19T00:18:30.000Z"
orderlistKey: 321
state: "배송중"
*/

const OrderItem = ({
  order: { arrivalDate, companyImg, companyName, itemList, orderDate, state },
}) => {
  const priceSum = itemList.reduce((acc, cur) => acc + cur.price, 0) + 3500;
  const itemName =
    itemList[0].name +
    (itemList.length > 1 ? ` 외 ${itemList.length - 1}` : '');

  return (
    <div className="item">
      <div className="img">
        <img src={companyImg} alt={companyName} />
      </div>
      <div className="info">
        <h3>{companyName}</h3>
        <p>
          <span className="item-name">{itemName}</span>
          <span className="price">
            {new Intl.NumberFormat('ko-KR').format(priceSum)}원
          </span>
          <span className="date">
            {new Date(orderDate).toLocaleDateString()}
          </span>
        </p>
        <p>{state}</p>
      </div>
    </div>
  );
};

export default OrderItem;
