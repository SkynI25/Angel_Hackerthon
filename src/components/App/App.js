import React, { useEffect, useState } from 'react';
import './App.scss';
import { Route, BrowserRouter } from 'react-router-dom';
import { Home, SignIn, SignUp, Restaurant, Category } from '../../pages';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { userInfo } from '../../lib/api';
const App = () => {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('token');
        // const response = await userInfo(JSON.parse(token));
        // const { data } = response.data;
        // setUserData(data);
      } catch {}
    };
    fetchData();
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <main className="main">
          <Route exact path="/" component={Home} />
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route path="/restaurant/:restaurantId" component={Restaurant} />
          <Route path="/category/:categoryId" component={Category} />
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
