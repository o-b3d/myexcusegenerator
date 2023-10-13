/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let pronouns = ["the", "our", "each", "someones", "their"];
  let adjs = ["great", "depressed", "big", "fast", "aggresive"];
  let nouns = ["jogger", "racoon", "athlete", "developer", "driver"];

  // Function to choose random pronouns, adjs, and nouns for domain name
  function getRandomChoice(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  // Functions to Generate Domain Names
  function DomainNameGenerator() {
    let displayedPronouns = getRandomChoice(pronouns);
    let displayedAdjs = getRandomChoice(adjs);
    let displayedNouns = getRandomChoice(nouns);

    return `${displayedPronouns}${displayedAdjs}${displayedNouns}.com`;
  }

  // Function to Create Multiple Domain Names
  function CustomDomainGenerator(num) {
    let multipleDomains = [];

    for (let i = 0; i < num; i++) {
      let domain = "";
      do {
        domain = DomainNameGenerator();
      } while (multipleDomains.includes(domain));
      multipleDomains.push(domain);
    }

    return multipleDomains;
  }

  /* Enter to HTML via DOM*/
  const domainNameElement1 = document.getElementsByClassName("list-group-item");
  const numberOfDomains1 = 1;
  const GeneratedDomains1 = CustomDomainGenerator(numberOfDomains1);
  domainNameElement1[0].innerText = GeneratedDomains1;

  const domainNameElement2 = document.getElementsByClassName(
    "list-group-item list-group-item-primary"
  );
  const numberOfDomains2 = 1;
  const GeneratedDomains2 = CustomDomainGenerator(numberOfDomains2);
  domainNameElement2[0].innerText = GeneratedDomains2;

  const domainNameElement3 = document.getElementsByClassName(
    "list-group-item list-group-item-secondary"
  );
  const numberOfDomains3 = 1;
  const GeneratedDomains3 = CustomDomainGenerator(numberOfDomains3);
  domainNameElement3[0].innerText = GeneratedDomains3;

  const domainNameElement4 = document.getElementsByClassName(
    "list-group-item list-group-item-success"
  );
  const numberOfDomains4 = 1;
  const GeneratedDomains4 = CustomDomainGenerator(numberOfDomains4);
  domainNameElement4[0].innerText = GeneratedDomains4;

  const domainNameElement5 = document.getElementsByClassName(
    "list-group-item list-group-item-danger"
  );
  const numberOfDomains5 = 1;
  const GeneratedDomains5 = CustomDomainGenerator(numberOfDomains5);
  domainNameElement5[0].innerText = GeneratedDomains5;

  const domainNameElement6 = document.getElementsByClassName(
    "list-group-item list-group-item-warning"
  );
  const numberOfDomains6 = 1;
  const GeneratedDomains6 = CustomDomainGenerator(numberOfDomains6);
  domainNameElement6[0].innerText = GeneratedDomains6;

  const domainNameElement7 = document.getElementsByClassName(
    "list-group-item list-group-item-info"
  );
  const numberOfDomains7 = 1;
  const GeneratedDomains7 = CustomDomainGenerator(numberOfDomains7);
  domainNameElement7[0].innerText = GeneratedDomains7;

  const domainNameElement8 = document.getElementsByClassName(
    "list-group-item list-group-item-dark"
  );
  const numberOfDomains8 = 1;
  const GeneratedDomains8 = CustomDomainGenerator(numberOfDomains8);
  domainNameElement8[0].innerText = GeneratedDomains8;

  /* Copy and Paste
  const domainNameElement# = document.getElementsByClassName();
  const numberOfDomains# = 1;
  const GeneratedDomains# = CustomDomainGenerator(numberOfDomains#);
  domainNameElement#[0].innerText = GeneratedDomains#;
  */
};
