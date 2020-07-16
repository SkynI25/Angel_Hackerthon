import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://angel-mkit.herokuapp.com',
  timeout: 15000,
});

// 회원가입
export const signupUser = ({ id, password, phone, address }) => {
  return new Promise((res, rej) => {
    instance
      .post('/user', {
        userId: id,
        userPw: password,
        phone,
        address,
      })
      .then((data) => res(data))
      .catch((err) => console.error(err));
  });
};

// 로그인
export const signinUser = ({ id, password }) => {
  return new Promise((res, rej) => {
    instance
      .post('/auth', {
        userId: id,
        userPw: password,
      })
      .then((data) => res(data))
      .catch((err) => console.error(err));
  });
};

// 로그아웃
export const signoutUser = () => {};

// 유저정보
export const userInfo = ({ token }) => {
  instance.defaults.headers.common['token'] = token;
  return new Promise((res, rej) => {
    instance
      .get('/user')
      .then((data) => res(data))
      .catch((err) => console.error(err));
  });
};
