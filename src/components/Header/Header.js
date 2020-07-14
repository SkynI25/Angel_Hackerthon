import React from 'react'
import './Header.scss'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <span>
          <Link to="">HOME</Link>
        </span>
        <nav className="gnb">
          <ul>
            <li>
              <NavLink to="/signin">로그인</NavLink>
            </li>
            <li>
              <NavLink to="/signup">회원가입</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
