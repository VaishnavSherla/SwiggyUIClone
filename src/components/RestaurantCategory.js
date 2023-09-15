import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, index, showIndex }) => {
  const handleClick = () => {
    if (index === showIndex) {
      setShowIndex(null); // Set to null if already open
    } else {
      setShowIndex(index); // Set to the clicked index
    }
  };

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4  rounded-2xl">
      <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold text-slate-900">
          {data.title} ({data.itemCards.length})
        </span>
        <span>{showItems ? "⬆️" : "⬇️"}</span>
      </div>
      {showItems && <ItemList items={data.itemCards}></ItemList>}
    </div>
  );
};

export default RestaurantCategory;
