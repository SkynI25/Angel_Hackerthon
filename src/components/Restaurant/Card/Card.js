import React from 'react';
import './Card.scss';
import { AiFillStar } from 'react-icons/ai';

const Card = () => {
  return (
    <div className="card-container">
      <div className="card">
        <h1>지역명 가게이름</h1>
        <p>"탱글탱글 찜닭과 부추의 조화"</p>
        <div className="info">
          <span className="star">
            <AiFillStar />
            4.7
          </span>
          <span className="review">리뷰 999개</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
