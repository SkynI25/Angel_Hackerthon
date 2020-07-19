import React from 'react';
import { Link } from 'react-router-dom';
import './RestaurantList.scss';
import { AiFillHeart } from 'react-icons/ai';

const RestaurantList = ({ title, list }) => {
  return (
    <div className="restaurant-list-container">
      {title && <h2>{title}</h2>}
      <div className="list">
        {list &&
          list.map((item, idx) => (
            <Link
              to={`/restaurant/${item.id}`}
              key={item.id}
              className="item-container"
            >
              <div className="img">
                <img src={item.foodImg} alt={item.name} />
              </div>
              <div>
                <p className="title">{item.name}</p>
                <p className="description">{item.description}</p>
                <p>
                  <span className="like">
                    <AiFillHeart /> <span>{item.likeNum}</span>
                  </span>
                </p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default RestaurantList;
