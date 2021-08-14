const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');

speed.addEventListener('mousemove', function(event) {
  const y = event.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;

  const min = 0.5;
  const max = 4.0;

  const height = Math.round(percent * 100) + "%";
  const playBackRate = percent * (max - min) + min;
  bar.style.height = height;
  bar.textContent = playBackRate.toFixed(1) + 'x';
  video.playbackRate = playBackRate.toFixed(1);
})