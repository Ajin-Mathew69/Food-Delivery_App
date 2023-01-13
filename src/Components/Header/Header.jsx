import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
     return (
          <div className="header-section">
               <div className="header-container flex ">
                    <div className="logo-container">
                         <h5>Logo</h5>
                    </div>
                    <div className="home-container">
                         <Link to='/checkout'>
                              <img src="./images/cart1.png" alt="" />
                         </Link>
                         <Link to="/">Home</Link>
                         <Link to="/checkout">Checkout</Link>
                    </div>
               </div>
          </div>
     );
};

export default Header;
