import "./FilteredDishes.css";
import { useState, useEffect, useContext } from "react";
import Alert from "../Alert/Alert";
import Pagination from "../Pagination/Pagination";
import CardDishItems from "../ReusedComponents/CardDishItems";
import { AllMenuContexts } from "../Contexts/AllMenuContext";

const FilteredDishes = () => {
     let [menuCategory, setMenuCategory] = useState([]);
     let [singleDish, setSingleDish] = useState([]);

     //  Fetching data by category
     async function getMenuItemsCategory() {
          const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php";
          let response = await fetch(API_URL);
          let categoryData = await response.json();
          setMenuCategory(categoryData.categories);
     }

     // Fetching  data by ONE Category

     async function getOnlyOneCategory() {
          const API_URL = "https://www.themealdb.com/api/json/v1/1/filter.php?c=Beef";
          let response = await fetch(API_URL);
          let singleDishData = await response.json();
          setSingleDish(singleDishData.meals);
     }

     // useEffect with fetching function
     useEffect(() => {
          getMenuItemsCategory();
          getOnlyOneCategory();
     }, []);
     // ==============================================================================================
     // ==============================================================================================

     // Global variable is assigned here:
     const filteredMenus = useContext(AllMenuContexts);

     //  let [filteredMenuCategories, setFilteredMenuCategories] = useState(props.allMenus);

     let [filteredFinalMenu, setFilteredFinalMenu] = useState([]);
     let [activeDish, setActiveDish] = useState("Beef");
     let [currentPage, setCurrentPage] = useState(1);
     let [itemsPerPage, setItemsPerPage] = useState(4);

     // Pagination Math
     let indexOfLastDish = currentPage * itemsPerPage;
     // currentPage => 1
     // currentPage=1 itemsPerPage=4 1*4=4
     // ==============>
     //  currentPage changed => 2
     // currentPage=2 itemsPerPage=4 2*4=8
     // ===============>
     // currentPage changed=>3
     // currentPage=3 itemsPerPage=4 3*4=12

     let indexOfFirstDish = indexOfLastDish - itemsPerPage;
     // indexOfLastDish=4 itemsPerPage=4 4-4=0
     // indexOfLastDish=8 itemsPerPage=4 8-4 =4
     // indexOfLastDish=12 itemsPerPage=4 12-4=8

     // Slicing the FilterDishes Array for the page number
     let showingItemsPage = filteredFinalMenu.slice(indexOfFirstDish, indexOfLastDish);

     // Showing Single Dish
     let maxItems = 8;
     let singleDishItems = singleDish.map((menuItems, index) => {
          if (index < maxItems) {
               return <CardDishItems menuItems={menuItems} />;
          }
     });

     // Filtered  MenuList OnClick Function
     const filteredDishesMenuHandler = (category) => {
          setSingleDish([]);
          setActiveDish(category);

          let filteredDishesAre = filteredMenus
               .filter((item) => {
                    return item.strCategory === category;
               })
               .map((menuItems) => {
                    return <CardDishItems menuItems={menuItems} />;
               });
          setFilteredFinalMenu(filteredDishesAre);
     };

     // Showing all the Categories Menus
     let menuCategoryNames = menuCategory.map((categoryItems) => {
          return (
               <li
                    className={categoryItems.strCategory === activeDish ? "active" : " "}
                    onClick={() => {
                         filteredDishesMenuHandler(categoryItems.strCategory);
                    }}
               >
                    {categoryItems.strCategory}
               </li>
          );
     });
     return (
          <div className="filtered-dishes">
               <div className="container">
                    <div className="text--center">
                         {" "}
                         <h2>Choose your dishes</h2>
                         <p>
                              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero rerum quidem officiis tempore!
                              Quidem possimus, animi odit sed saepe earum.
                         </p>
                    </div>
                    <div className="filtered-dishes">
                         <ul>{menuCategoryNames}</ul>
                    </div>
                    <div className="filtered-dishes-results container finalDish">
                         <ul className="flex flex-center flex-wrap   ">
                              {singleDishItems}
                              {singleDishItems != 0 || filteredFinalMenu.length !== 0 ? showingItemsPage : <Alert />}{" "}
                         </ul>
                    </div>
                    <Pagination
                         filteredFinalMenu={filteredFinalMenu}
                         itemsPerPage={itemsPerPage}
                         currentPage={currentPage}
                         setCurrentPage={setCurrentPage}
                    />
               </div>
          </div>
     );
};

export default FilteredDishes;
