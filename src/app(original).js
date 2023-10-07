/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let who = ["The dog", "My grandma", "His turtle", "My bird"];

  let action = ["ate", "peed", "crushed", "broke"];

  let what = ["my homework", "the keys", "the car"];

  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying",
  ];

  //randomElement starts with 0
  function randomElement(array) {
    //"array" is the index/parameter() for function
    //Math.random will provide a number 0-1
    //Math.round will round number UP so it is an integer, so 1 instead of 0.7
    //Math.floor will round DOWN number so it is an integer, so 0 instead of 0.7
    //array.length is used since a random number can be entered
    //array can be who, action, what, when
    return array[Math.floor(Math.random() * array.length)];
  }

  //" " + is for spacing | there better string concatination methods available
  let excuse =
    randomElement(who) +
    " " +
    randomElement(action) +
    " " +
    randomElement(what) +
    " " +
    randomElement(when);

  console.log(excuse);
};
