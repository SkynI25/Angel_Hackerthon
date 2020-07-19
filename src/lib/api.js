import axios from 'axios';
import qs from 'querystring';

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

// 전체 식당 리스트
export const getRestaurants = async () => {
  const { data } = await axios.get(
    'https://angel-mkit.herokuapp.com/restaurants',
  );
  return data;
};

// 식당 상세 데이터
export const getRestaurantData = async (restaurantId) => {
  const { data } = await axios.get(
    `https://angel-mkit.herokuapp.com/restaurants/${restaurantId}`,
  );
  return data;
};

// 음식 주문
export const orderItems = async (token, itemList = []) => {
  const params = new URLSearchParams();
  params.append('itemList', JSON.stringify(itemList));

  const { data } = await axios.post(
    `https://angel-mkit.herokuapp.com/orderlist`,
    params,
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        token: token,
      },
    },
  );
  return data;
};

// 주문 조회
export const getOrderList = async (token) => {
  instance.defaults.headers.common['token'] = token;
  const {
    data: { data },
  } = await instance.get('/orderlist');
  return data;
};

// 좋아요
export const like = async (restaurantId) => {
  const tokenObj = localStorage.getItem('token');
  console.log(tokenObj);
  if (!tokenObj) {
    throw '로그인 해주세용';
  }
  const { token } = JSON.parse(tokenObj);
  console.log(token);

  const { data } = await instance.patch(
    `restaurants/${restaurantId}/likenum`,
    {},
    {
      headers: { token },
    },
  );
  return data;
};
