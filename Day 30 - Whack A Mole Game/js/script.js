const holes = document.querySelectorAll(".hole");
const scoreBoard = document.querySelector(".score");
const moles = document.querySelectorAll(".mole");
let lastHole;
let timeOut = false;
let score = 0;

function randomTime(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHoles(holes) {
  const index = Math.round(Math.random() * (holes.length - 1));
  const hole = holes[index];

  if(lastHole === hole) {
    return randomHoles(holes);
  }

  lastHole = hole;

  return hole;
}

function peep() {
  const time = randomTime(300, 1000);
  const hole = randomHoles(holes);

  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if(!timeOut) peep();
  }, time);
}

function startGame() {
  scoreBoard.textContent = 0;
  score = 0;
  timeOut = false;
  peep();
  setTimeout( () => {
    timeOut = true;
  }, 10000);
}

function bonk(event) {
  if(!event.isTrusted) return;

  score++;
  this.classList.remove('up');
  scoreBoard.textContent = score;
}

moles.forEach( (mole) => mole.addEventListener('click', bonk));


