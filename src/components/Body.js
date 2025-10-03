import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useListOfReastaurant from "../utils/useListOfRestaurant";
import useFilteredRestaurant from "../utils/useFilteredRestaurant";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useListOfReastaurant();
  const [filteredRestaurant, setFilteredRestaurant] = useFilteredRestaurant();

  const [searchText, setSearchText] = useState("");

  console.log("Body Rendered");

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <div>
        <h1>Looks like you're offline!! check your internet connection.</h1>
        <button
          className="onbtn"
          onClick={() => {
            window.location.reload();
          }}
        >
          Retry
        </button>
      </div>
    );

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              console.log(searchText);

              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res?.info?.avgRating > 4.5
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/city/surat/" + restaurant?.info?.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
