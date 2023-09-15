import React, { useState } from "react";
import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(0)
  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <ShimmerUi />;
  }

  if (!resInfo.cards) {
    return <div>No restaurant found</div>;
  }

  const {
    id,
    name,
    cuisines,
    cloudinaryImageId,
    avgRating,
    costForTwoMessage,
  } = resInfo?.cards[0]?.card?.card?.info;
  let itemCards = [];

  console.log(resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold text-slate-900 my-10 ">{name}</h1>
      <p className="font-se text-slate-600">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>

      {/* Categories Accordians */}
      {categories.map((category, index) => (
        <RestaurantCategory
          key={category?.card?.card.id}
          data={category?.card?.card}
          showItems={index === showIndex}
          setShowIndex={setShowIndex}
          showIndex = {showIndex}
          index={index}
        />))}

      {/* {categories.map((category, index) => (
        <RestaurantCategory data={category?.card?.card} showItems={index == showIndex ? true : false} setShowIndex={() => setShowIndex(index)}/>
      ))} */}
      
    </div>
  );
};

export default RestaurantMenu;
