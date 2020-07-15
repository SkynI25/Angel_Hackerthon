import React from 'react'
import Category from '../../components/Home/Category/Category'
import RestaurantList from '../../components/Home/RestaurantList/RestaurantList'
import './Home.scss'

const Home = () => {
  return (
    <div className="home-container">
      <Category />
      <RestaurantList />
    </div>
  )
}

export default Home
