let countdown;
const displayTime = document.querySelector('.display__time-left');
const displayEndTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');

function timer(seconds) {
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  EndTime(then);

  countdown = setInterval( () => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    if(secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  let minutes = Math.floor(seconds / 60);
  let remainderSeconds = seconds % 60;

  minutes = minutes < 10 ? `0${minutes}` : minutes;
  remainderSeconds = remainderSeconds < 10 ? `0${remainderSeconds}` : remainderSeconds;
  if(minutes > 60) {
    let hours = Math.floor(minutes / 60);
    minutes = minutes % 60;
    hours = hours < 10 ? `0${hours}` : hours;
    displayTime.textContent = `${hours}:${minutes}:${remainderSeconds}`;
  }
  else {
    displayTime.textContent = `${minutes}:${remainderSeconds}`;
  }
}

function EndTime(timestamp) {
  const end = new Date(timestamp);
  let hours = end.getHours();
  let minutes = end.getMinutes();

  hours = hours < 10 ? `0${hours}` : hours;
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  displayEndTime.textContent = `Be back at ${hours}:${minutes}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

buttons.forEach( (button) => button.addEventListener('click', startTimer));

document.customForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const minutes = document.customForm.minutes.value;
  timer(minutes * 60);
  document.customForm.reset();
})