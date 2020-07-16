import React, { useState, useEffect } from 'react';
import Cover from '../../components/common/Cover/Cover';
import RestaurantList from '../../components/common/RestaurantList/RestaurantList';
import { getRestaurantsByCategory } from '../../lib/api';

const Category = ({ match, history }) => {
  const [list, setList] = useState([]);

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
          setList(res.data);
        })
        .catch((err) => console.error(err));
    })();
  }, []);

  return (
    <div>
      <Cover title={'hi~'} />
      <RestaurantList list={list} />
    </div>
  );
};

export default Category;
