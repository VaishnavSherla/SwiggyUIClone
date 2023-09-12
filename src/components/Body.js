import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import mockData from "../utils/mockData";
import { DATA_URL } from "../utils/constants";
import ShimmerUi from "./ShimmerUi";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [resList, setResList] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch(DATA_URL);
      const jsonData = await response.json();
      if (
        jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants?.length > 0
      ) {
        const restaurants =
          jsonData.data.cards[4].card.card.gridElements.infoWithStyle
            .restaurants;
        setResList(restaurants);
        setFiltered(restaurants);
      } else {
        setResList(mockData);
        setFiltered(mockData);
      }
    } catch (error) {
      setResList(mockData);
      setFiltered(mockData);
    }
  };

  const handleSearch = () => {
    const filteredRestaurants = resList.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFiltered(filteredRestaurants);
  };

  const handleFilterTopRated = () => {
    const filteredRestaurants = resList.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );
    setFiltered(filteredRestaurants);
  };

  const resetFilters = () => {
    setFiltered(resList);
    setSearchText("");
  };

  if (filtered.length === 0) {
    return <ShimmerUi />;
  }

  if (onlineStatus === false) {
    return <h1>Status: {onlineStatus ? "Online" : "Offline"}</h1>;
  }

  return (
    <div className="body">
      <div className="flex">
        <div className="search">
          <input
            type="text"
            className="px-4 py-2 m-4 border border-solid rounded-lg border-black font-bold text-slate-600"
            placeholder="Search"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
          />
          <button
            className="px-4 py-2 bg-green-100 rounded-lg m-4 hover:cursor-pointer hover:bg-green-200 font-bold text-slate-600 hover:text-slate-900"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="filter">
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg hover:cursor-pointer hover:bg-green-200 font-bold text-slate-600 hover:text-slate-900"
            onClick={handleFilterTopRated}
          >
            Filter Top Rated
          </button>
          <button
            className="px-4 py-2 bg-green-100 m-4  rounded-lghover:cursor-pointer hover:bg-green-200 font-bold text-slate-600 hover:text-slate-900"
            onClick={resetFilters}
          >
            Reset Filters
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        {filtered.map((restaurant, index) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
