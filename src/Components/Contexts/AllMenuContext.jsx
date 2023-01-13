import React, { useState, useEffect } from "react";
import Loader from "../Loader/Loader";

export const AllMenuContexts = React.createContext();

export const AllMenuContext = (props) => {



     
     let [menu, setMenu] = useState([]);
     let [loading, setLoading] = useState(false);

     // Fetching all menus from API
     async function getMenuDetails() {
          setLoading(true);
          const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=c";
          let response = await fetch(API_URL);
          let data = await response.json();
          setMenu(data.meals);
          setLoading(false);
     }

     // useEffect with fetching function
     useEffect(() => {
          getMenuDetails();
     }, []);

     return <AllMenuContexts.Provider value={menu}>{!loading ? props.children : <Loader />}</AllMenuContexts.Provider>;
};


