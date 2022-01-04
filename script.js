/*document.querySelector('.message').textContent = 'correct number';
document.querySelector('.number').textContent = 13;
document.querySelector('.guess').value = 25;

*/
const number = document.querySelector('.number');
const message = document.querySelector('.message');
const score1 = document.querySelector('.score');
let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
const displaymessage = function (message) {
  message.textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = document.querySelector('.guess').value;
  if (!guess) {
    message('no number');
  }
  //when players wins the game
  else if (guess == secretNumber) {
    displaymessage('corrrect number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    number.style.width = '30rem';
    number.textContent = secretNumber;
    highScore = highScore < score ? score : highScore;
    document.querySelector('.highscore').textContent = highScore;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      message.textContent = guess > secretNumber ? 'Too high !' : 'Too low';
      score--;
      score1.textContent = score;
    } else {
      displaymessage('you lost the game');
      score1.textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  //highScore = highScore < score ? score : highScore;
  //document.querySelector('.highscore').textContent = highScore;
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  message.textContent = 'Start guessing...';
  number.textContent = '?';
  document.querySelector('.guess').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score1.textContent = score;
});
// const request = new XMLHttpRequest();
// request.open('GET', 'https://restcountries.eu/rest/v2/name/india');
// request.send();
// //console.log(request.responseText);
// request.addEventListener('load', function () {
//   const data = JSON.parse(this.responseText);
//   console.log(data);
// });
