import React from 'react';
import { Link } from 'react-router-dom';
import './RestaurantList.scss';
import { AiFillStar } from 'react-icons/ai';

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
                <img src={item.img} />
              </div>
              <div>
                <p className="title">{item.name}</p>
                <p className="description">{item.description}</p>
                <p>
                  <span class="star">
                    <AiFillStar />
                    4.{Math.floor(Math.random() * 10) % 10}
                  </span>
                  <span class="review">{`(${
                    Math.floor(Math.random() * 900) + 10
                  })`}</span>
                </p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default RestaurantList;
