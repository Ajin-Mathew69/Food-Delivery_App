import React from "react";

const CardDishItems = (props) => {
     return (
          <>
               <li>
                    <a
                         href="javaScript:;"
                         onClick={() => {
                              props.showPopupHandler(props.menuItems.strMeal);
                         }}
                    >
                         <img src={props.menuItems.strMealThumb} className="br-10 shadow" alt="" />
                         <h4 className="text--center">{props.menuItems.strMeal}</h4>
                    </a>
               </li>
          </>
     );
};

export default CardDishItems;
