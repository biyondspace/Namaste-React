import { useEffect, useState } from "react";
import { RES_API } from "./contants";

const useFilteredRestaurant = () => {
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_API);
    const json = await data.json();
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return [filteredRestaurant, setFilteredRestaurant];
};

export default useFilteredRestaurant;
