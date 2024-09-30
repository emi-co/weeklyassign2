let hands = ["rock", "paper", "scissors"];
let com_hands;

function game(p_hands) {
  com_hands = Math.floor(Math.random() * 3);

  if (com_hands === p_hands) {
    return "Draw";
    
  } else if (com_hands === 0 && p_hands === 1 || 2) {
    return "You lose";
  }
  
  } else if (com_hands === 1 || 2 && p_hands === 0) {
    return "You win";
  
  } else if (com_hands === 2 && p_hands === 1) {
    return "You lose";
  
  } else if (com_hands === 1 && p_hands === 2) {
  return "You win";
}
