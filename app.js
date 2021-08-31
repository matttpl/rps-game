document.addEventListener('DOMContentLoaded', () => {
  //

  // Global variables
  let userScore = 0;
  let compScore = 0;

  // DOM variables
  const userScore_div = document.getElementById('user-score');
  const compScore_div = document.getElementById('comp-score');
  const scoreBoard_div = document.querySelector('.score-board');
  const result_p = document.querySelector('.result');
  const rock_div = document.querySelector('.rock');
  const paper_div = document.querySelector('.paper');
  const scissors_div = document.querySelector('.scissors');

  // Functions

  // Computer choice
  function getCompChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
  }

  // Convert r/p/s to word
  function convertToWord(letter) {
    if (letter === 'r') return 'Rock';
    if (letter === 'p') return 'Paper';
    if (letter === 's') return 'Scissors';
  }

  // Win / lose / draw
  function win(userChoice, compChoice) {
    userScore++;
    userScore_div.innerHTML = userScore;
    compScore_div.innerHTML = compScore;

    const smallUserWord = 'user'.fontsize(1).sup();
    const smallCompWord = 'comp'.fontsize(1).sup();
    result_p.innerHTML = `${convertToWord(userChoice)} ${smallUserWord} beats 
      ${convertToWord(compChoice)} ${smallCompWord}. You win!`;

    const userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 500);
  }

  function lose(userChoice, compChoice) {
    compScore++;
    userScore_div.innerHTML = userScore;
    compScore_div.innerHTML = compScore;

    const smallUserWord = 'user'.fontsize(1).sup();
    const smallCompWord = 'comp'.fontsize(1).sup();
    result_p.innerHTML = `${convertToWord(
      userChoice
    )} ${smallUserWord} loses to 
      ${convertToWord(compChoice)} ${smallCompWord}. You lost!`;

    const userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 500);
  }

  function draw(userChoice, compChoice) {
    const smallUserWord = 'user'.fontsize(1).sup();
    const smallCompWord = 'comp'.fontsize(1).sup();
    result_p.innerHTML = `${convertToWord(
      userChoice
    )} ${smallUserWord} equals to 
      ${convertToWord(compChoice)} ${smallCompWord}. Draw!`;

    const userChoice_div = document.getElementById(userChoice);
    userChoice_div.classList.add('grey-glow');
    setTimeout(() => userChoice_div.classList.remove('grey-glow'), 500);
  }

  // Main game
  function game(userChoice) {
    const compChoice = getCompChoice();

    switch (userChoice + compChoice) {
      case 'rs':
      case 'pr':
      case 'sp':
        win(userChoice, compChoice);
        break;
      case 'sr':
      case 'rp':
      case 'ps':
        lose(userChoice, compChoice);
        break;
      case 'rr':
      case 'pp':
      case 'ss':
        draw(userChoice, compChoice);
    }
  }

  // pick -> userChoice -> run game
  function main() {
    rock_div.addEventListener('click', () => game('r'));

    paper_div.addEventListener('click', () => game('p'));

    scissors_div.addEventListener('click', () => game('s'));
  }

  main();

  //
});
