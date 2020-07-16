import React from 'react';
import { Link } from 'react-router-dom';
import './AuthForm.scss';

const textMap = {
  login: '로그인',
  register: '회원가입'
};

const AuthForm = ({ type, form, onChange, onSubmit }) => {
  const text = textMap[type];
  return (
    <div>
      <form>
        <h2>{text}</h2>
        <input type="text" name="id" placeholder="아이디" />
        <input type="password" name="password" placeholder="비밀번호" />
        {type === 'register' && (
          <div>
            <input type="password" name="passwordConfirm" placeholder="비밀번호 확인" />
            <input type="text" name="phone" placeholder="전화번호" />
            <input type="text" name="address" placeholder="주소" />
          </div>
        )}
        <button type="submit" className="btn">
          로그인
        </button>
        <div className="pageLink">
          {type === 'login' ? (
            <Link to="/signup">회원가입</Link>
          ) : (
            <Link to="/signin">로그인</Link>
          )}
        </div>
      </form>
    </div>
  );
};

export default AuthForm;
