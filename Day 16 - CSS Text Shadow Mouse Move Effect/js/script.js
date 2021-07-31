const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 250; //250px

function shadow(event) {
  const {offsetWidth: width, offsetHeight: height} = hero;
  let {offsetX: x, offsetY: y} = event;

  if(this != event.target) {
    x += event.target.offsetLeft;
    y += event.target.offsetTop;
  }
  
  let xWalk = Math.round((x / width * walk) - (walk / 2)); 
  let yWalk = Math.round((y / height * walk) - (walk / 2)); 

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255, 0, 155, 0.6),
    ${xWalk * -1}px ${yWalk}px 0 rgba(150, 0, 155, 0.6),
    ${yWalk}px ${xWalk * -1}px 0 rgba(75, 0, 155, 0.6),
    ${yWalk * -1}px ${xWalk}px 0 rgba(25, 150, 0, 0.6)
  `;
}

hero.addEventListener('mousemove', shadow);