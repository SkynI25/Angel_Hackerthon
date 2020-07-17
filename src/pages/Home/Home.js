import React, { useState, useEffect } from 'react';
import Category from '../../components/Home/Category/Category';
import RestaurantList from '../../components/common/RestaurantList/RestaurantList';
import './Home.scss';
import Banner from '../../components/Home/Banner/Banner';
import { getRestaurants } from '../../lib/api';

const Home = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    (function () {
      getRestaurants()
        .then((res) => {
          if (!res.success || !res.data) {
            throw new Error(res.errors);
          }
          setList(res.data);
        })
        .catch((err) => console.error(err));
    })();
  }, []);

  return (
    <div className="home-container">
      <Banner />
      <Category />
      <RestaurantList title="요즘 핫한 추천 맛집" list={list} />
    </div>
  );
};

export default Home;
