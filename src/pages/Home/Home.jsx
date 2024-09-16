import React, { useState } from "react";
import SearchBar from '../../components/SearcbarHome/Searchbar';
import FoodTypes from '../../components/FoodTypes/FoodTypes';
import ItemCards from '../../components/ItemCards/ItemCards';


const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div>
      <SearchBar/>
      <FoodTypes onSelectCategory={setSelectedCategory} />
      <ItemCards selectedCategory={selectedCategory} />
    </div>
  )
}

export default Home
