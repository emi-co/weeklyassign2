// const prompt = require("prompt-sync")();
let p_score = 0;
let com_score = 0;
let tie = 0;
const p_choice = document.getElementById("p_choice");
const com_choice = document.getElementById("com_choice");
const result_text = document.getElementById("result_text");
const score = document.getElementById("score");

{
  /* <div id="p_choice">You chose:</div>
    <div id="com_choice">The computer chose:</div>
    <div id="result_text">Draw</div> */
}

function playGame(p_hands) {
  com_hands = Math.floor(Math.random() * 3);
  let hands = ["rock", "paper", "scissors"];
  let result = "";

  p_choice.innerHTML = `You chose: ${hands[p_hands]}`;
  com_choice.innerHTML = `The computer chose: ${hands[com_hands]}`;

  if (com_hands === p_hands) {
    result = "Draw";
    tie++;
  } else if (com_hands === 0 && p_hands === 1) {
    result = "You lose";
    com_score++;
  } else if (com_hands === 1 && p_hands === 2) {
    result = "You lose";
    com_score++;
  } else if (com_hands === 2 && p_hands === 0) {
    result = "You lose";
    com_score++;
  } else {
    result = "You win";
    p_score++;
  }

  result_text.innerHTML = `Result: ${result}`;
  score.innerHTML = `Player: ${p_score} | Computer: ${com_score} | Ties: ${tie}`;
}
