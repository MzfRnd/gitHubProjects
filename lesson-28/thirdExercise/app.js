const switchButton = document.getElementById("switch");
const lightOne = document.getElementById("lightOne");
const lightTwo = document.getElementById("lightTwo");
const lightThree = document.getElementById("lightThree");
let first = lightOne.classList;

switchButton.onclick = function () {
  if (
    lightOne.classList.value == false &&
    lightTwo.classList.value == false &&
    lightThree.classList.value == false
  ) {
    lightOne.classList.add("yellow");
    switchButton.innerText = "Switch the lights";
  } else if (lightOne.classList.value == "yellow") {
    lightOne.classList.remove("yellow");
    lightTwo.classList.add("yellow");
  } else if (lightTwo.classList.value == "yellow") {
    lightTwo.classList.remove("yellow");
    lightThree.classList.add("yellow");
  } else if (lightThree.classList.value == "yellow") {
    lightThree.classList.remove("yellow");
    switchButton.innerText = "Turn on the light";
  }
};
