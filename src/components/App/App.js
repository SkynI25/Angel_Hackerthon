import React, { useState } from 'react';
import './App.scss';
import { Route, BrowserRouter, Redirect } from 'react-router-dom';
import { Home, SignIn, SignUp, Restaurant, Category } from '../../pages';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const App = () => {
  const user = localStorage.getItem('userInfo');
  const [userData, setUserData] = useState(null);
  return (
    <BrowserRouter>
      <div className="App">
        <Header userInfo={user} />
        <main className="main">
          <Route exact path="/" component={Home} />
          <Route
            path="/signin"
            render={(props) => (
              <SignIn props={props} setUserData={setUserData} />
            )}
          />
          <Route path="/signup" component={SignUp} />
          <Route
            path="/restaurant/:restaurantId"
            render={(props) => <Restaurant props={props} userInfo={user} />}
          />
          <Route
            path="/category/:categoryId"
            render={(props) => <Category props={props} userInfo={user} />}
          />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
