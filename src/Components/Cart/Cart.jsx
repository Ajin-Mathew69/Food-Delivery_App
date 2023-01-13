import React from "react";
import "./Cart.css";

const Cart = ({cartItems}) => {
  let addToCartItems=cartItems.map((items)=>{
     return(
          <div className="selected-cart-items">
           <img src={items.cartItemImage} className="cart-img br-10 shadow" alt="" />
                    <h6> {items.cartItemName} </h6>
          </div>
     )
  })
    
     return (
          <div className="cart-wrapper flex">
               <div className="cart-item">
                    <h6 text--center>Your Cart</h6>
                  { addToCartItems}
               </div>
          </div>
     );
};

export default Cart;

// cartItemName
// cartItemImage
