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

  function getRandomWord(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  const randomWho = getRandomWord(who);
  const randomAction = getRandomWord(action);
  const randomWhat = getRandomWord(what);
  const randomWhen = getRandomWord(when);

  const myexcuse = `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;

  const excuseElement = document.getElementsByTagName("p");

  excuseElement[0].innerText = myexcuse;
};
