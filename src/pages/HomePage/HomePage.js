import React, { useState, useEffect } from 'react';
import Category from '../../components/Home/Category/Category';
import RestaurantList from '../../components/common/RestaurantList/RestaurantList';
import SkeletonList from '../../components/common/SkeletonList/SkeletonList';
import './HomePage.scss';
import Banner from '../../components/Home/Banner/Banner';
import { getRestaurants } from '../../lib/api';

const HomePage = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (function () {
      getRestaurants()
        .then((res) => {
          if (!res.success || !res.data) {
            throw res.errors;
          }
          setList(res.data);
        })
        .catch((err) => console.error(err))
        .finally(() => setIsLoading(false));
    })();
  }, []);

  return (
    <section className="home-container">
      <Banner />
      <Category />
      {isLoading ? (
        <SkeletonList title="지금 배달 가능한 지역맛집" />
      ) : (
        <RestaurantList title="지금 배달 가능한 지역맛집" list={list} />
      )}
    </section>
  );
};

export default HomePage;
