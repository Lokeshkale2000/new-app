import React from "react";
import "./MainPage.css";
import Card from "./Card";


import { restaurantslist } from "./Constaint";

import { useState } from "react";

// config driven ui .... it is ui where we can manage visiablity of the ui that which part of ui should be visiable to  targeted person

// Capitalized Card component

const Mainpage = () => {
  /*React Data Binding: A Comprehensive Guide to One-Way and Two ...In
   React, data binding refers to synchronizing data between the UI and application state,
    typically using a one-way data flow where data flows from parent to child components through props
     and state changes propagate down the component tree
*/

  /* searchInput is a just a local variable and  setSearchInput is used  to
  modified using useState or useState function that write in react core library  */

  // it is just array has intially state variable and updated variable
  const [searchInput, setSearchInput] = useState(""); // kfc is the default state

  // Why we used useState because normal variable is not eable  to update change happing
  // react keep track on variable , when every variable is updated whole component  re-render

  const [restaurant, setRestaurant] = useState(restaurantslist);
  const [togge, setTogge] = useState("false");

  //function of filtering restaurants
  const filterData = (searchInput, restaurantList) => {
    const filterData = restaurantList.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchInput.toLowerCase())
    );
    return filterData;
  };


  return (
    <>
      <div>
        <input
          type="text"
          placeholder="Search-filed"
          value={searchInput}
          //e is event property with it we can read it
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        ></input>

        <button
          onClick={() => {
            const data = filterData(searchInput, restaurantslist);
            setRestaurant(data);
          }}
        >
          Search
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            if (togge === "false") {
              setTogge("true");
            } else {
              setTogge("false");
            }
          }}
        >
          change the status
        </button>
        <p>{togge}</p>
      </div>
      <div className="mainpage">
        {restaurant.map((restaurant) => (
          <Card {...restaurant} key={restaurant.id} />
        ))}
      </div>
    
    </>
  );
};

export default Mainpage;
