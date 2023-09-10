import React from "react";
import ReactDOM from "react-dom/client";
import { logo, resObj } from "/components/constants";

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo">{logo}</div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

// we can use (props) directly rather than {resname, etc} like that

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cloudinaryImageId, cuisines, avgRating } = resData?.info;
  const { deliveryTime } = resData?.info?.sla;

  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt={`Logo for ${name}`}
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h4>Cuisines: {cuisines.join(",")}</h4>
      <h4>Average Rating: {avgRating}</h4>
      <h4>Delivery Time: {deliveryTime} mins</h4>
    </div>
  );
};

const SearchComponent = () => {
  return (
    <div className="search">
      <input type="text" placeholder="Search" />
      <button>Search</button>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <SearchComponent />
      <div className="res-container">
        {
            resObj.map((restaurant, index) => <RestaurantCard key={restaurant.info.id} resData={restaurant} />)
        }
      </div>
    </div>
  );
};

const FooterComponent = () => {
  return (
    <div className="footer">
      Swiggy &copy; {new Date().getFullYear()} All rights reserved.
    </div>
  );
};

const AppLayout = () => (
  <>
    {<HeaderComponent />}
    {<Body />}
    {<FooterComponent />}
  </>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
