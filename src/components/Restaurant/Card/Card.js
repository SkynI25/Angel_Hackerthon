import React from 'react';
import './Card.scss';
import { AiFillStar } from 'react-icons/ai';

const Card = ({ restaurant: { name = '', description = '' } }) => {
  return (
    <div className="card-container">
      <div className="card">
        <h1>{name}</h1>
        <p>{`"${description}"`}</p>
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
