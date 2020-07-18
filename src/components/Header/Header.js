import React from 'react';
import './Header.scss';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.png';

const Header = ({ userInfo }) => {
  const logOut = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userInfo');
    window.location.reload(false);
  };
  return (
    <header className="header">
      <div className="header-inner">
        <span>
          <Link to="/">
            <img src={Logo} alt="반짝식당" />
          </Link>
        </span>
        <nav className="gnb">
          {userInfo ? (
            <ul>
              <li onClick={logOut}>로그아웃</li>
            </ul>
          ) : (
            <ul>
              <li>
                <NavLink to="/signin">로그인</NavLink>
              </li>
              <li>
                <NavLink to="/signup">회원가입</NavLink>
              </li>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
