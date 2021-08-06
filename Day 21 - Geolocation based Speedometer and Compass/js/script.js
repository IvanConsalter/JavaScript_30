const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');
const latitude = document.querySelector('.latitude-value');
const longitude = document.querySelector('.longitude-value');

navigator.geolocation.watchPosition((data) => {
    console.log(data);
    latitude.textContent = data.coords.latitude.toFixed(2);
    longitude.textContent = data.coords.longitude.toFixed(2);
    if(data.coords.speed) {
      speed.textContent = `${data.coords.speed}KM/H`;
    }
    else {
      speed.textContent = 'it was not possible to get the speed';
      speed.style.fontSize = '36px';
      speed.style.color = 'red';
    }
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
  },
  (err) => {
    console.error(err);
  }
);
