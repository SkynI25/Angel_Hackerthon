import React from 'react';
import './OpenRequest.scss';

const OpenRequest = ({
  restaurant: { name, img, phone, address, detailDescription, items },
}) => {
  return (
    <div>
      <div className="restaurant-info-container">
        <div className="img">
          <img src={img} alt={name} />
        </div>
        <p>전화번호 : {phone}</p>
        <p>주소 : {address}</p>
        <p>{detailDescription}</p>
      </div>
      <div className="restaurant-list-container">
        <div className="list">
          <h2>메뉴 소개</h2>
          {items &&
            items.map((item, idx) => (
              <div className="item-container" key={item.id}>
                <div className="img">
                  <img src={item.img} alt={item.name} />
                </div>
                <div className="info">
                  <p className="title">{item.name}</p>
                  <p className="description">
                    {new Intl.NumberFormat('ko-KR', {
                      style: 'currency',
                      currency: 'KRW',
                    }).format(item.price)}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
      <button class="btn open-btn" onClick={() => alert('신청되었습니다!')}>
        우리 동네에 오픈 신청하기
      </button>
    </div>
  );
};

export default OpenRequest;
