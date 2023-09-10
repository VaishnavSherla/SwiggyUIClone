import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import mockData from "../utils/mockData";

const Body = () => {
  // Local state variable and State Update Function with an initial value (e.g., 'mockData')
  const [filteredData, setFilteredData] = useState(mockData);
  const [searchValue, setSearchValue] = useState('');


  // useEffect takes 2 arguments one is callback func and dependency array
  useEffect(() => {
    console.log('Rendered Ui')
  }, [])


  const handleFilterClick = () => {
    // Filter the data and update the state
    const filteredRestaurants = mockData.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );
    setFilteredData(filteredRestaurants);
  };

  const handleShowAllClick = () => {
    // Show all restaurants by resetting the data
    setFilteredData(mockData);
  };

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  }

  const handleSearchClick = () => {
  const filteredRestaurants = mockData.filter(
    (restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchValue.toLowerCase())
  );
  setFilteredData(filteredRestaurants);
};


  return (
    <div className="body">
      <div className="search">
        <input
          type="text"
          placeholder="Search for restaurants"
          value={searchValue}
          onChange={handleSearchChange}
        />
        <button onClick={handleSearchClick}>Search</button>
      </div>
      <div className="filter">
        <button className="filter-btn" onClick={handleFilterClick}>
          Filter Top Rated
        </button>
        <button className="filter-btn" onClick={handleShowAllClick}>
          Show All Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredData.map((restaurant, index) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
