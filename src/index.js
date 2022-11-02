import React from "react";
import ReactDom from "react-dom";

const root = document.querySelector("#root");
const myName = "Subrina Lisa";
const currYear = new Date().getFullYear();
const currTime = new Date().getHours();
let greetings = "";

const textColor = {
  color: "#cc6d2e"
};

if (currTime < 12) {
  greetings = "Morning";
  textColor.color = "red";
} else if (currTime >= 12 && currTime < 18) {
  greetings = "Afternoon";
  textColor.color = "green";
} else {
  greetings = "Evening";
  textColor.color = "blue";
}

ReactDom.render(
  <div>
    <h1>Shopping List</h1>
    <ul>
      <li>Vegetables</li>
      <li>Egg</li>
      <li>Chicken</li>
    </ul>
    <h2 className="heading" style={textColor}>
      Good {greetings}
    </h2>
    <p>Created by {myName}</p>
    <p>Copyright {currYear}</p>
  </div>,
  root
);
