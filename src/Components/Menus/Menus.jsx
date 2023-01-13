import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Banner from "../Banner/Banner";
import Checkout from "../Checkout/Checkout";
import { AllMenuContext } from "../Contexts/AllMenuContext";
import FilteredDishes from "../FilteredDishes/FilteredDishes";
import Header from "../Header/Header";
import "../Menus/Menus.css";
import SpecialDishes from "../SpecialDishes/SpecialDishes";

const Menus = () => {
     return (
          <div>
               <Router>
                    <Header />
                   
                    <Routes>
                         {/* Page 1 */}
                         <Route
                              path="/"
                              exact
                              element={
                                <>
                                   <Banner />
                                   <AllMenuContext>
                                        <SpecialDishes />
                                        <FilteredDishes />
                                   </AllMenuContext></>
                              }
                         />

                         {/* Page 2 */}
                         <Route path="/checkout" element={<Checkout />} />
                    </Routes>
               </Router>
          </div>
     );
};

export default Menus;
