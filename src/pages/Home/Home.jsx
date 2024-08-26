import React from 'react'
import SearchBar from '../../components/SearcbarHome/Searchbar';
import FoodTypes from '../../components/FoodTypes/FoodTypes';
import ItemCards from '../../components/ItemCards/ItemCards';


const Home = () => {
  return (
    <div>
      <SearchBar/>
      <FoodTypes/>
      <ItemCards/>
    </div>
  )
}

export default Home
