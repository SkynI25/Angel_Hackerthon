import React, { useState } from 'react';
import { signinUser, userInfo } from '../../lib/api';
import './SignIn.scss';

const SignIn = ({ props, setUserData }) => {
  const { history } = props;
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const handleSumbit = async (evt) => {
    try {
      evt.preventDefault();
      const { data } = await signinUser({ id, password });
      localStorage.setItem('token', JSON.stringify(data['data']));

      const token = localStorage.getItem('token');
      const response = await userInfo(JSON.parse(token));
      const userData = response.data;
      localStorage.setItem('userInfo', JSON.stringify(userData.data));
      setUserData(userData.data);
      history.push('/');
    } catch {}
  };
  return (
    <div className="signin-container">
      <form onSubmit={handleSumbit}>
        <h2>로그인</h2>
        <input
          type="text"
          name="id"
          placeholder="아이디"
          value={id}
          onChange={(evt) => setId(evt.target.value)}
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={password}
          onChange={(evt) => setPassword(evt.target.value)}
        />
        <button type="submit" className="btn">
          로그인
        </button>
      </form>
    </div>
  );
};

export default SignIn;
