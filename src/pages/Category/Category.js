import React, { useState, useEffect } from 'react';
import Cover from '../../components/common/Cover/Cover';
import RestaurantList from '../../components/common/RestaurantList/RestaurantList';
import { getRestaurantsByCategory } from '../../lib/api';

const Category = ({ props: { match, history } }) => {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [coverImage, setImage] = useState('');

  useEffect(() => {
    const categoryId =
      (match && match.params && match.params.categoryId) || null;

    if (!categoryId) {
      console.error('invalid categoryId!');
      history.push('/');
    }

    (function () {
      getRestaurantsByCategory(categoryId)
        .then((res) => {
          if (!res.success || !res.data) {
            throw new Error(res.errors);
          }
          const { category, categoryImg, restaurants } = res.data;
          setName(category);
          setImage(categoryImg);
          setList(restaurants);
        })
        .catch((err) => console.error(err));
    })();
  }, []);

  return (
    <div>
      <Cover title={name} />
      <RestaurantList list={list} />
    </div>
  );
};

export default Category;
