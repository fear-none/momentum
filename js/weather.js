const weather = document.getElementById("weather");
const temperature = document.querySelector("#weather span:first-child")
const city = document.querySelector("#weather span:last-child");
const API_KEY = "";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const icon = document.createElement("img");
      icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      weather.prepend(icon);
      temperature.innerText = `${data.main.temp.toFixed(1)}°`;
      city.innerText = data.name;
    });
}

function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
