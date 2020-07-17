import React, { useEffect, useState } from 'react';
import Cover from '../../components/common/Cover/Cover';
import Card from '../../components/Restaurant/Card/Card';
import InfoTabs from '../../components/Restaurant/InfoTabs/InfoTabs';
import { getRestaurantData } from '../../lib/api';

const Restaurant = ({ props: { match, history } }) => {
  const [restaurant, setRestaurant] = useState({});
  useEffect(() => {
    const restaurantId =
      (match && match.params && match.params.restaurantId) || null;

    if (!restaurantId) {
      console.error('invalid restaurantId!');
      history.push('/');
    }

    (function () {
      getRestaurantData(restaurantId)
        .then((res) => {
          if (!res.success || !res.data) {
            throw new Error(res.errors);
          }
          setRestaurant(res.data);
        })
        .catch((err) => {
          console.error(err);
          history.push('/');
        });
    })();
  }, []);

  return (
    <section className="restaurant-container">
      <Cover />
      <Card restaurant={restaurant} />
      <InfoTabs restaurant={restaurant} />
    </section>
  );
};

export default Restaurant;
