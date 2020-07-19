import React, { useState, useEffect } from 'react';
import Cover from '../../components/common/Cover/Cover';
import RestaurantList from '../../components/common/RestaurantList/RestaurantList';
import SkeletonList from '../../components/common/SkeletonList/SkeletonList';
import { getRestaurantsByCategory } from '../../lib/api';

const CategoryPage = ({ props: { match, history } }) => {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [coverImage, setImage] = useState('');
  const [isLoading, setIsLoading] = useState(true);

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
        .catch((err) => console.error(err))
        .finally(() => setIsLoading(false));
    })();
  }, [match, history]);

  return (
    <div>
      <Cover title={isLoading ? ' ' : name} coverImage={coverImage} />
      {isLoading ? <SkeletonList /> : <RestaurantList list={list} />}
    </div>
  );
};

export default CategoryPage;
