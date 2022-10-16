'use strict';

let dice1El = document.querySelector('.dice1');
let dice2El = document.querySelector('.dice2');
let dice3El = document.querySelector('.dice3');
let btnRollDice = document.querySelector('.btn-roll-dice');
let btnHistoryEl = document.querySelector('.btn-history');
let sumEl = document.querySelector('.sum');

//history
let historyObj = {
  firstDice: [],
  secondDice: [],
  thirdDice: [],
};
let indexHistory = 0; // might delete

// -------------------function to roll the dice starts--------------------
btnRollDice.addEventListener('click', function () {
  document.querySelector('body').style.backgroundImage =
    'linear-gradient(to top left, #286b2a 0%, #c7a20d 100%)';
  let dice1 = Math.trunc(Math.random() * 6) + 1;
  let dice2 = Math.trunc(Math.random() * 6) + 1;
  let dice3 = Math.trunc(Math.random() * 6) + 1;

  //------------------add to history array STARTS HERE-----------------------
  historyObj.firstDice.push(dice1);
  historyObj.secondDice.push(dice2);
  switch (dice3) {
    case 1:
      historyObj.thirdDice.push('yellow');
      break;
    case 2:
      historyObj.thirdDice.push('green');
      break;
    case 3:
      historyObj.thirdDice.push('blue');
      break;
    case 4:
      historyObj.thirdDice.push('pirate');
      break;
    case 5:
      historyObj.thirdDice.push('pirate');
      break;
    case 6:
      historyObj.thirdDice.push('pirate');
      break;
  }
  // historyObj.thirdDice.push(dice3);
  //------------------add to history array ENDS HERE-----------------------

  console.log(`history: ${dice1} ${dice2} ${dice3}`);

  sumEl.textContent = dice1 + dice2;

  // Classic 2 dice roll
  dice1El.src = `dice-${dice1}.png`;
  dice2El.src = `dice-red-${dice2}.png`;

  // Special dice roll
  if (dice3 === 1) {
    dice3El.src = `yellow.png`;
    document.querySelector('body').style.backgroundImage =
      'linear-gradient(to top left, #ce9314 0%, #c7a20d 100%)';
  } else if (dice3 === 2) {
    dice3El.src = `green.png`;
    document.querySelector('body').style.backgroundImage =
      'linear-gradient(to top left, rgb(147, 243, 50) 0%, #286b2a 100%)';
  } else if (dice3 === 3) {
    dice3El.src = `blue.png`;
    document.querySelector('body').style.backgroundImage =
      'linear-gradient(to top left, #286b2a 0%, #0dc7ae 100%)';
  } else if (dice3 === 4) {
    dice3El.src = 'pirate.png';
    document.querySelector('body').style.backgroundImage =
      'linear-gradient(to top left, #000000 0%, #d1d1d1 100%)';
  } else if (dice3 === 5) {
    dice3El.src = 'pirate.png';
    document.querySelector('body').style.backgroundImage =
      'linear-gradient(to top left, #000000 0%, #d1d1d1 100%)';
  } else {
    dice3El.src = 'pirate.png';
    document.querySelector('body').style.backgroundImage =
      'linear-gradient(to top left, #000000 0%, #d1d1d1 100%)';
  }

  //sum of the 2 dice
  let sum = dice1 + dice2;
  console.log(`sum = ${sum}`);
  if (sum === 7) {
    document.querySelector('body').style.background = '#EC2A00';
  }
});
// -------------------function to roll the dice ends--------------------

btnHistoryEl.addEventListener('click', function () {
  console.log('History btn clicked');
  console.log(historyObj.firstDice);
  console.log(historyObj.secondDice);
  console.log(historyObj.thirdDice);
});
