import React from 'react';
import './SkeletonList.scss';

const SkeletonList = ({ title }) => {
  return (
    <div className="skeleton-list-container">
      {title && <h2>{title}</h2>}
      <div className="list">
        {[0, 0, 0, 0].map((i, idx) => (
          <div key={idx} className="item-container">
            <div className="img"></div>
            <div className="info">
              <p className="title"></p>
              <p className="description"></p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkeletonList;
