import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const itemCards =
    resInfo?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ||
    [];

  return (
    <div className="menu">
      <h1>{resInfo?.info?.name}</h1>
      <p>
        {resInfo?.info?.cuisines?.join(", ")} - {resInfo?.info?.costForTwo}
      </p>

      <h1 className="px-4 font-medium">Menu</h1>
      <ul className="px-4 font-medium">
        {itemCards.map((item) => (
          <li key={item?.info?.id}>
            {item?.info?.name} - {"Rs."}
            {item.info.costForTwo}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
