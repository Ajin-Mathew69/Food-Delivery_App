import React, { useContext } from "react";
import { AllMenuContexts } from "../Contexts/AllMenuContext";

import "./PopUp.css";

const PopUp = ({ closePopupHandler, currentDish, addToCartHandler }) => {
     // Global variable is assigned here:
     const popUpMenu = useContext(AllMenuContexts);

     let dishDetails = popUpMenu
          .filter((menuItems) => {
               return menuItems.strMeal === currentDish;
          })
          .map((items) => {
               return (
                    <>
                         <div className="popup-content-data">
                              <div className="popup-content-img">
                                   <img src={items.strMealThumb} className="br-10 shadow imgPoster" alt="" />
                                   <div className="popup-content-category">
                                        <h5>{items.strCategory}</h5>
                                   </div>
                              </div>

                              <h4 className="text--center">{items.strMeal}</h4>
                         </div>

                         <h4 className="ingredients-header">Ingredients</h4>
                         <ul className="dish-ingredients flex">
                              <li> {items.strIngredient1}</li>
                              <li> {items.strIngredient2}</li>
                              <li> {items.strIngredient3}</li>
                              <li> {items.strIngredient4}</li>
                              <li> {items.strIngredient5}</li>
                         </ul>

                         <button className="order-btn" onClick={() => addToCartHandler(items.strMealThumb, items.strMeal)}>
                              Order Now
                         </button>
                         <h4 className="close" onClick={closePopupHandler}>
                              Close
                         </h4>
                    </>
               );
          });
     console.log("dish details", dishDetails);
     return (
          <div className="popup flex flex-center">
               <div className="content flex flex-center">{dishDetails}</div>
          </div>
     );
};

export default PopUp;
