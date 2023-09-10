import React, { useState } from 'react';

const Search = ({ restaurants }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchClick = () => {
    // Filter restaurants based on the search input value
    const filteredRestaurants = restaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchValue.toLowerCase())
    );

    // Pass the filtered results to the parent component using the onSearch callback
    onSearch(filteredRestaurants);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search for restaurants"
        value={searchValue}
        onChange={handleSearchChange}
      />
      <button onClick={handleSearchClick}>Search</button>
    </div>
  );
};

export default Search;
