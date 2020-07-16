import React from 'react';
import { signinUser } from '../../lib/api';
import './SignIn.scss';

const SignIn = () => {
  return (
    <div className="signin-container">
      <form>
        <h2>로그인</h2>
        <input type="text" name="id" placeholder="아이디" />
        <input type="password" name="password" placeholder="비밀번호" />
        <button type="submit" className="btn">
          로그인
        </button>
      </form>
    </div>
  );
};

export default SignIn;
