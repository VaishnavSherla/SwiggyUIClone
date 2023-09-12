import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { id, name, cloudinaryImageId, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;

  return (
    <Link to={"/restaurants/" + id} className="hover:cursor-pointer">
      <div
        id="restaurant"
        className="flex gap-4 items-center md:items-stretch md:w-72 md:flex-col p-4 hover:shadow-md border border-white hover:border-[#d3d5df]"
      >
        <div className="w-24 h-24 relative md:w-64 md:h-40">
          <img
            src={CDN_URL + cloudinaryImageId}
            alt="restaurant-img"
            className="w-[88px] h-24 md:h-full md:w-full rounded-md md:rounded-none"
          />
        </div>
        <div className="flex flex-col md:gap-1">
          <div className="font-semibold md:font-medium text-gray-ultra text-[15px] md:text-[17px] truncate w-36 md:w-full">
            {name}
          </div>
          <div className="hidden md:inline-block text-[13px] text-gray-light font-light">
            {cuisines.join(", ")}
          </div>
          <div className="flex md:justify-between items-center gap-2 font-semibold mt-1 md:mt-3.5">
            <span className="text-yellow-500">★ {avgRating.toFixed(1)}</span>
            <span className="hidden md:inline-block text-xs text-gray-light">
              •
            </span>
            <span className="text-xs text-gray-light capitalize">
              {deliveryTime} Mins
            </span>
            <span className="hidden md:inline-block text-xs text-gray-light">
              •
            </span>
            <span className="hidden md:inline-block text-xs text-gray-light">
              {costForTwo}
            </span>
          </div>
          <div className="w-36 font-extralight text-[13px] text-gray-light truncate overflow-hidden md:hidden mt-0.5">
            {cuisines.join(", ")}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
