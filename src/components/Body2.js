import React, { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Search from './Search';
import mockData from '../utils/mockData';

const Body2 = () => {
  // Local state variable to track whether to show all restaurants or top-rated ones
  const [showTopRated, setShowTopRated] = useState(false);

  const handleToggleClick = () => {
    setShowTopRated(!showTopRated); // Toggle the state
  };

  // Filter the data based on the current state
  const filteredData = showTopRated
    ? mockData.filter((restaurant) => restaurant.info.avgRating > 4)
    : mockData;

  return (
    <div className="body">
      <Search />
      <div className="filter">
        <button className="filter-btn" onClick={handleToggleClick}>
          {showTopRated ? 'Show All Restaurants' : 'Show Top Rated'}
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

export default Body2;
