import "./styles.css";
import { useState } from "react";

var southList = [
  { food: "Masala Dosa", rating: "4.3/5" },
  { food: "Idli&Sambar", rating: "4.3/5" },
  { food: "Pongal", rating: "4.2/5" },
  { food: "Ugani & Vada", rating: "4.5/5" }
];
var northList = [
  { food: "Butter Chicken", rating: "4.3/5" },
  { food: "Pav bhaji", rating: "3.2/5" },
  { food: "Vada pav", rating: "4.2/5" },
  { food: "Chole Battore ", rating: "4.2/5" }
];
var northEastList = [
  { food: "Chicken roast", rating: "4.5/5" },
  { food: "Khar from Assam", rating: "4.1/5" },
  { food: "Smoked pork from Nagaland", rating: "4.9/5" },
  { food: "Galho", rating: "4.2/5" }
];
export default function App() {
  var [state, updateState] = useState(southList);

  function sIndia() {
    updateState(southList);
  }
  function nIndia() {
    updateState(northList);
  }
  function neIndia() {
    updateState(northEastList);
  }
  return (
    <div className="App">
      <h1>Delicious Food Items</h1>
      <h2>Hey check out my fav food items</h2>
      <button onClick={sIndia}>South India</button>
      <button onClick={nIndia}>North India</button>
      <button onClick={neIndia}>NorthEast India</button>
      <hr />
      {state.map(function (item) {
        return (
          <div className="itemContainer">
            <h2>{item.food}</h2>
            <h2>{item.rating}</h2>
          </div>
        );
      })}
    </div>
  );
}
