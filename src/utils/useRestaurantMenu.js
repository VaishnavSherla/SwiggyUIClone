import { MENU_API } from "../utils/constants";
import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
    [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
      }, []);
    
    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        setResInfo(json.data);
    };
    
    return resInfo;
}

export default useRestaurantMenu;