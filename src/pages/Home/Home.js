import React from 'react'
import Category from '../../components/Home/Category/Category'
import RestaurantList from '../../components/Home/RestaurantList/RestaurantList'
import './Home.scss'
import Banner from '../../components/Home/Banner/Banner'

const Home = () => {
  return (
    <div className="home-container">
      <Banner />
      <Category />
      <RestaurantList />
    </div>
  )
}

export default Home
