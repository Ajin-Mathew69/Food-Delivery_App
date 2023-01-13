import React, { useState } from "react";
import PopUp from "../PopUp/PopUp";
import CardDishItems from "../ReusedComponents/CardDishItems";
import "./SpecialDishes.css";

import { useContext } from "react";
import Cart from "../Cart/Cart";
import { AllMenuContexts } from "../Contexts/AllMenuContext";

const SpecialDishes = () => {
     let [showPopup, setShowPopup] = useState(false);
     let [currentDish, setCurrentDish] = useState("");
     //
     let [cartItems, setCartItems] = useState([]);
     let maxSpecialDishes = 8;
     // Global variable is  assigned here
     const allMenu = useContext(AllMenuContexts);

     // Show PopUp function Handler
     const showPopupHandler = (dishName) => {
          setShowPopup(true);
          setCurrentDish(dishName);
     };
     //   Close PopUp function Handler
     const closePopupHandler = () => {
          setShowPopup(false);
     };

     // Add to cart function Handler
     const addToCartHandler = (cartImages, cartNames) => {
          setCartItems([
               ...cartItems,
               {
                    cartItemImage: cartImages,
                    cartItemName: cartNames,
               },
          ]);
     };
     
     let specialDishesMenu = allMenu.map((menuItems, index) => {
          if (index < maxSpecialDishes) {
               return <CardDishItems menuItems={menuItems} showPopupHandler={showPopupHandler} />;
          }
     });
     return (
          <section className="special-dishes  ">
               {showPopup && (
                    <PopUp
                         closePopupHandler={closePopupHandler}
                         currentDish={currentDish}
                         addToCartHandler={addToCartHandler}
                    />
               )}
               <div className="container flex ">
                    {/* Add to cart added here */}
                    <Cart cartItems={cartItems} />
                    <div className="special-dishes__content  text--center">
                         {" "}
                         <h2>Our Special Dishes</h2>
                         <p>
                              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, eveniet vitae tempora
                              officia amet porro? Id voluptatum neque necessitatibus tempore? Facilis eaque vitae est
                              labore.
                         </p>
                    </div>
               </div>
               <div className="special-dishes__list container ">
                    <ul className="flex flex-wrap gap-40  ">{specialDishesMenu}</ul>
               </div>
          </section>
     );
};

export default SpecialDishes;
