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
// 카테고리 리스트
export const getCategories = async () => {
  const { data } = await axios.get(
    'https://angel-mkit.herokuapp.com/categories',
  );
  return data;
};

// 카테고리별 식당 리스트
export const getRestaurantsByCategory = async (categoryId) => {
  const { data } = await axios.get(
    `https://angel-mkit.herokuapp.com/categories/${categoryId}`,
  );
  return data;
};
