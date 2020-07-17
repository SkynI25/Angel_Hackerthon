import axios from 'axios';

// 회원가입
export const signupUser = () => {};

// 로그인
export const signinUser = () => {};

// 로그아웃
export const signoutUser = () => {};

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
