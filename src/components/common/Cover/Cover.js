import React from 'react';
import './Cover.scss';

const Cover = ({ title = '', coverImage }) => {
  const bg = coverImage
    ? { background: `center / cover no-repeat url('${coverImage}')` }
    : {};

  return (
    <div className="cover-container">
      {/* img */}
      <div className="img" style={bg}></div>

      {/* title */}
      {title && (
        <div className="title">
          <h2>{title}</h2>
        </div>
      )}
    </div>
  );
};

export default Cover;
