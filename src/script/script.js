"use strict";
//DOM manipulating

// Elements //////////////////////////////////////////////////////////////////////////
const checkBtn = document.querySelector(".check")
const guessDesc =document.querySelector(".guess-desc")
const scoreEl = document.querySelector(".score")
const headerEl =document.querySelector(".header-btn")
const body =document.querySelector("body")
const highScoreEl =document.querySelector(".high-score")
const againBtn =document.querySelector(".again-btn")




let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;


//function  //////////////////////////////////////////////////////////////////////
function displayMessage(message) {
  guessDesc.textContent = message;
}



//Add Event Listener ///////////////////////////////////////////////////////////////////////////////////

//Check btn 
checkBtn.addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //guess undefind
  if (!guess) {
    displayMessage("⛔ No number");


    //guess NOT currect
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📈 too high..." : "📉 too low...");
      score--;
      scoreEl.textContent = score;

      //chance finished
    } else {
      displayMessage("💥 you lose the game ...");
      scoreEl.textContent = 0;
    }


    //when the guess is correct....
  } else if (guess === secretNumber) {
    headerEl.textContent = secretNumber;
    displayMessage("🥳 correct Number ");

    //cahnge the bgColor
    body.style.backgroundColor = "#60b347";

    //change the wigth....
    headerEl.style.width = "30rem";

    if (score > highScore) {
      highScore = score;
      highScoreEl.textContent = highScore;
    }
  }
});

//again btn 
againBtn.addEventListener("click", function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  score = 20;
  scoreEl.textContent = score;

  body.style.backgroundColor = "#222";

  headerEl.style.width = "13rem";

  headerEl.textContent = "?";

  displayMessage("Start guessing ...");

  guessDesc.value = "";
});
