const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logText(event) {
  console.log(this.classList.value);
  //event.stopPropagation();
}

//document.body.addEventListener('click', logText);
divs.forEach( (div) => div.addEventListener('click', logText, {
  capture: true,
  // once: true
}));

button.addEventListener('click', () => {
  console.log('click');
}, {
  once: true
})

