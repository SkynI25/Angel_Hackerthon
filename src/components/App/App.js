import React, { useState } from 'react';
import './App.scss';
import { Route, BrowserRouter } from 'react-router-dom';
import {
  HomePage,
  SignInPage,
  SignUpPage,
  RestaurantPage,
  CategoryPage,
  OrderPage,
  MyPage,
} from '../../pages';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { CartContext } from '../../CartContext/CartContext';

const App = () => {
  const user = localStorage.getItem('userInfo');
  const [userData, setUserData] = useState(null);
  const [cart, setCart] = useState([]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      <BrowserRouter>
        <div className="App">
          <Header userInfo={user} />
          <main className="main">
            <Route exact path="/" component={HomePage} />
            <Route
              path="/signin"
              render={(props) => (
                <SignInPage props={props} setUserData={setUserData} />
              )}
            />
            <Route path="/signup" component={SignUpPage} />
            <Route
              path="/restaurant/:restaurantId"
              render={(props) => (
                <RestaurantPage props={props} userInfo={user} />
              )}
            />
            <Route
              path="/category/:categoryId"
              render={(props) => <CategoryPage props={props} userInfo={user} />}
            />
            <Route
              path="/order"
              render={(props) => <OrderPage props={props} userInfo={user} />}
            />
            <Route
              path="/mypage"
              render={(props) => <MyPage props={props} userInfo={user} />}
            />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </CartContext.Provider>
  );
};

export default App;
