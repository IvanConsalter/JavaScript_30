const timeNodes = Array.from(document.querySelectorAll('[data-time]'));

const seconds = timeNodes
  .map( (node) => node.dataset.time)
  .map( (timeCode) => {
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    return (mins * 60) + secs;
  })
  .reduce((total, vidSeconds) => total + vidSeconds);

let secondsLeft = seconds;
console.log(secondsLeft);

const hours = Math.floor(secondsLeft / 3600);
console.log(hours);

secondsLeft %= 3600;
console.log(secondsLeft);

const minutes = Math.floor(secondsLeft / 60);
console.log(minutes);

secondsLeft %= 60;
console.log(secondsLeft);

console.log(`Total time of videos: ${hours}:${minutes}:${secondsLeft}`);
document.querySelector('.totalTime').innerHTML = `Total time of videos: ${hours}:${minutes}:${secondsLeft}`;
