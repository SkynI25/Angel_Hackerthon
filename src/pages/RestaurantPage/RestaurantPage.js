import React, { useEffect, useState, useContext } from 'react';
import Cover from '../../components/common/Cover/Cover';
import Card from '../../components/Restaurant/Card/Card';
import InfoTabs from '../../components/Restaurant/InfoTabs/InfoTabs';
import { getRestaurantData } from '../../lib/api';
import CartButton from '../../components/Restaurant/CartButton/CartButton';
import CartModal from '../../components/Restaurant/CartModal/CartModal';
import { CartContext } from '../../CartContext/CartContext';

const RestaurantPage = ({ props: { match, history } }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [restaurant, setRestaurant] = useState({});
  const { cart, setCart } = useContext(CartContext);

  const addItem = (item) => {
    const itemIndex = cart.findIndex((i) => i.id === item.id);
    if (itemIndex !== -1) {
      setCart([
        ...cart.slice(0, itemIndex),
        {
          ...cart[itemIndex],
          count: cart[itemIndex].count + 1,
        },
        ...cart.slice(itemIndex + 1),
      ]);
    } else {
      setCart([
        ...cart,
        {
          ...item,
          count: 1,
        },
      ]);
    }
  };

  const changeCount = (itemId, count) => {
    const itemIndex = cart.findIndex((i) => i.id === itemId);
    if (itemIndex !== -1) {
      setCart([
        ...cart.slice(0, itemIndex),
        {
          ...cart[itemIndex],
          count,
        },
        ...cart.slice(itemIndex + 1),
      ]);
    }
  };

  const deleteItem = (itemId) => {
    const itemIndex = cart.findIndex((i) => i.id === itemId);
    if (itemIndex !== -1) {
      setCart([...cart.slice(0, itemIndex), ...cart.slice(itemIndex + 1)]);
    }
  };

  const handleCartBtnClick = () => {
    setIsOpen(true);
  };

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
  }, [match, history]);

  // 페이지 렌더링 시 카트 초기화
  useEffect(() => {
    setCart([]);
  }, []);

  return (
    <section className="restaurant-container">
      <Cover coverImage={restaurant.img} />
      <Card restaurant={restaurant} />
      <InfoTabs restaurant={restaurant} addItem={addItem} />
      <CartButton cart={cart} handleCartBtnClick={handleCartBtnClick} />
      <CartModal
        cart={cart}
        modalIsOpen={modalIsOpen}
        setIsOpen={setIsOpen}
        deleteItem={deleteItem}
        changeCount={changeCount}
        history={history}
      />
    </section>
  );
};

export default RestaurantPage;
