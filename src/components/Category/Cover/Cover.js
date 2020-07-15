import React from 'react'
import './Cover.scss'

const Cover = ({ title }) => {
  return (
    <div className="cover-container">
      {/* img */}
      <div className="img"></div>

      {/* title */}
      <div className="title">
        <h2>{title}</h2>
      </div>
    </div>
  )
}

export default Cover
