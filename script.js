"use strict";

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let hs = 0;

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".guess").value);

  //invalid

  if (!guess) {
    document.querySelector(".message").textContent = "No Number !";
  }
  //guess high
  else if (guess > number) {
    document.querySelector(".message").textContent = "Too High :/";
    score--;
    document.querySelector(".score").textContent = score;
  }
  //guess low
  else if (guess < number) {
    score--;
    document.querySelector(".message").textContent = "Too low :/";
    document.querySelector(".score").textContent = score;
  }
  //winner
  else if (guess === number) {
    document.querySelector(".message").textContent = "Correct !!!";

    document.querySelector(".number").textContent = number;

    document.querySelector("body").style.backgroundColor = "#60b347";

    if (score > hs) {
      hs = score;
      document.querySelector(".highscore").textContent = hs;
    }
  }

  if (score < 0) {
    document.querySelector(".message").textContent = "You lost the game :( ";
    document.querySelector(".score").textContent = "0";
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  number = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start guessing...";

  document.querySelector(".score").textContent = score;

  document.querySelector(".number").textContent = "?";

  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#222";
});
