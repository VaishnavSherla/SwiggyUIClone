import React, { useState } from "react";
import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId)

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
  
  for (let i = 0; i <= resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.length; i++) {
    const currentCard = resInfo.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[i]?.card?.card;

    if (currentCard?.itemCards && currentCard.itemCards.some(item => item?.card?.info?.name)) {
      itemCards = itemCards.concat(currentCard.itemCards);
    }
  }
  
  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      <p>{avgRating} stars</p>

      <h2>Menu</h2>
      <ul>
        <ul>
          {itemCards ? (
            itemCards.map((item, index) => (
              <li key={item?.card?.info?.id}>
                {item?.card?.info?.name} -{" "}
                {item?.card?.info?.price / 100 || item?.card?.info?.defaultPrice}{" "}
                rs
              </li>
            ))
          ) : (
            <li>No menu items found</li>
          )}
        </ul>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
