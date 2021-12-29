const openMenu = document.querySelector(".menu-btn");
let homeScreen = document.querySelector(".home-screen");
let menuScreen = document.querySelector(".menu-screen");
let returnHome = document.querySelector(".back-home");
let stopWatch = document.querySelector("#stopwatch");
let stopwatchScreen = document.querySelector(".stopwatch-screen");
let stopWatchEvent = document.querySelector(".btn-start");
let stopWatchExit = document.querySelector(".back-menu");
let stopWatchBtnReset = document.querySelector(".btn-reset");
let timerScreen = document.querySelector("#timer");
let timer = document.querySelector(".timer-screen");
let timerExit = document.querySelector(".exit-timer");
let timerScreenTwo = document.querySelector("#start");
let timerScreenIndicator = document.querySelector(".timer-screen-two");
openMenu.addEventListener("click", () => {
  homeScreen.classList.add("deactivate-home");
  menuScreen.classList.add("activate-menu");
});

returnHome.addEventListener("click", () => {
  homeScreen.classList.remove("deactivate-home");
  menuScreen.classList.remove("activate-menu");
});

stopWatch.addEventListener("click", () => {
  menuScreen.classList.remove("activate-menu");
  stopwatchScreen.classList.add("activate-stopwatch");
});

stopWatchEvent.addEventListener("click", () => {
  document.querySelector(".btn-stop").classList.add("activate-stop");
  document.querySelector(".btn-start").classList.add("deactivate-start");
});

stopWatchExit.addEventListener("click", () => {
  menuScreen.classList.add("activate-menu");
  stopwatchScreen.classList.remove("activate-stopwatch");
});

stopWatchBtnReset.addEventListener("click", () => {
  document.querySelector(".btn-stop").classList.remove("activate-stop");
  document.querySelector(".btn-start").classList.remove("deactivate-start");
});

timerScreen.addEventListener("click", () => {
  menuScreen.classList.remove("activate-menu");
  timer.classList.add("activate-timer");
});

timerExit.addEventListener("click", () => {
  menuScreen.classList.add("activate-menu");
  timer.classList.remove("activate-timer");
});

timerScreenTwo.addEventListener("click", () => {
  timer.classList.remove("activate-timer");
  timerScreenIndicator.classList.add("activate-timer-reader");

  const displayCount = () => {};

  displayCount();
});
