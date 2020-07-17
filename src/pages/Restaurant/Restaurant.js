import React from 'react';
import Cover from '../../components/common/Cover/Cover';
import Card from '../../components/Restaurant/Card/Card';
import InfoTabs from '../../components/Restaurant/InfoTabs/InfoTabs';

const Restaurant = ({ props }) => {
  const { match } = props;
  const restaurantId =
    (match && match.params && match.params.restaurantId) || null;

  return (
    <section className="restaurant-container">
      <Cover />
      <Card />
      <InfoTabs />
    </section>
  );
};

export default Restaurant;
