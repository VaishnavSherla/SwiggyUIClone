import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { id, name, cloudinaryImageId, cuisines, avgRating } = resData?.info;
  const { deliveryTime } = resData?.info?.sla;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt={`Logo for ${name}`}
        src={`${CDN_URL}${cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h4>Cuisines: {cuisines.join(",")}</h4>
      <h4>Average Rating: {avgRating}</h4>
      <h4>Delivery Time: {deliveryTime} mins</h4>
      <Link to={"/restaurants/" + id}><h3>View Menu</h3></Link>
    </div>
  );
};

export default RestaurantCard;
