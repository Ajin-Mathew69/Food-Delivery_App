import React from "react";

import "./Banner.css";

const Banner = () => {
     return (
          <div className="banner">
               <img
                    className="banner__img"
                    src="https://images.unsplash.com/photo-1555243896-c709bfa0b564?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2000&q=80"
                    alt=""
               />
               <div className="banner__content">
                    <h1 className="banner__content__heading">It's all about good food & taste</h1>
                    <p className="banner__content__paragraph">
                         Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, officiis? Vero, rem sapiente,
                         dolorum alias, illum deserunt magni dolores ut architecto totam repellat accusantium optio.
                    </p>
               </div>
          </div>
     );
};

export default Banner;
