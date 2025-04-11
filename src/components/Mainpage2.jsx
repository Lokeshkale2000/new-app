import React, { useEffect, useState } from "react";
import Card2 from "./Card2"; // Assuming Card2 is a valid component in your project

const Mainpage2 = () => {
  const [restaurant, setRestaurant] = useState([]);

  //useEffect hook
  // () => {}  this is callback function.it is called insided the useeffect hook and it will be called when useeffect what to

  useEffect(() => {
    fetchdata();

    console.log("called this when dependencies changed");
  }, []); // if keep arrry  empty it will be only once

  /*if you donot want to re-render frequtly pass dependiance array to it. we can pass variable in  dependiance array if that variable
  changes  our useeffect hook will re render  eg(  [searchInput] )*/
  async function fetchdata() {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2706759&lng=77.4630265&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    console.log(data);

    // Extract restaurant list safely
    const cards =
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    const transformedData = cards
      .filter((item) => item?.info?.cloudinaryImageId) // Filter only those with image
      .map((item, index) => {
        const details = item.info; // Extract restaurant details

        return {
          id: details.id || index, // Ensure unique ID
          name: details.name || "Unknown",
          image:
            `https://media-assets.swiggy.com/${details.cloudinaryImageId}` ||
            "",
          locality: details.locality || "Unknown Area",
          areaName: details.areaName || "Unknown",
          rating: details.avgRating || "No Rating",
          price: details.costForTwo || "N/A",
          cuisines: details.cuisines || [],
          deliveryTime: details.sla?.deliveryTime || "N/A",
          link: details.cta?.link || "#", // Default link if missing
        };
      });

    setRestaurant(transformedData); // Set final transformed list
  }

  return (
    <div>
      <div className="mainpage">
        {restaurant.map((restaurant) => (
          <Card2 {...restaurant} key={restaurant.id} />
        ))}
      </div>
    </div>
  );
};

export default Mainpage2;
