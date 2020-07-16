import React from 'react';
import Category from '../../components/Home/Category/Category';
import RestaurantList from '../../components/common/RestaurantList/RestaurantList';
import './Home.scss';
import Banner from '../../components/Home/Banner/Banner';

const Home = () => {
  return (
    <div className="home-container">
      <Banner />
      <Category />
      <RestaurantList title="요즘 핫한 추천 맛집" />
    </div>
  );
};

export default Home;
