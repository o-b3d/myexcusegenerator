/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The spaceship", "My kite", "His bear", "My laptop"];

  let action = ["ran over", "flew over", "hit", "exploded"];

  let what = ["my skateboard", "the roller coaster", "the shed"];

  let when = [
    "before my Uncle's funeral",
    "exactly on time",
    "when I got home",
    "during my break",
    "while I ran"
  ];

  function randomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  let myexcuse =
    randomElement(who) +
    " " +
    randomElement(action) +
    " " +
    randomElement(what) +
    " " +
    randomElement(when);

  console.log(myexcuse);

  const excuseElement = document.getElementsByTagName("p");

  excuseElement[0].innerText = myexcuse;
};
