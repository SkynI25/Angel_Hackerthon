import React from 'react';
import './Cover.scss';

const Cover = ({ title }) => {
  return (
    <div className="cover-container">
      {/* img */}
      <div className="img"></div>

      {/* title */}
      {title && (
        <div className="title">
          <h2>{title}번째 카테고리</h2>
        </div>
      )}
    </div>
  );
};

export default Cover;
