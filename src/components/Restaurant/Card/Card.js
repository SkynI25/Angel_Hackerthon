import React, { useState } from 'react';
import './Card.scss';
import { AiFillHeart } from 'react-icons/ai';
import { like } from '../../../lib/api';

const Card = ({ restaurant: { id, name = '', description = '', likeNum } }) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      return;
    }
    setIsLiked(true);
    like(id)
      .then(() => setIsSuccess(true))
      .catch((err) => alert(err));
  };

  return (
    <div className="card-container">
      <div className="card">
        <h1>{name}</h1>
        <p>{`"${description}"`}</p>
        <div className="info">
          <span className="like" onClick={handleLike}>
            <AiFillHeart />
            <span>{isSuccess ? likeNum + 1 : likeNum}</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
